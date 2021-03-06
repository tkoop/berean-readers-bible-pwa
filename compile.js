console.log("compiling...")

var fs = require("fs")
const { execSync } = require('child_process');

doIt()

function doIt() {
	fs.readFile("brb.html", function (err, buffer) {
		parseHTML(buffer.toString())

		fs.readFile("serviceWorker.js", async function (err, buffer) {
			let version = await execSync('git rev-parse HEAD').toString().trim()
			let files = await execSync('cd public; find * -type f -not -name "serviceWorker.js"').toString().split("\n").map(a => {
				return a.trim()
			}).filter(a => {
				return a.length > 0
			})

			buffer = "/************\n  THIS FILE WAS GENERATED BY compile.js\n************/\n\n" +
				buffer.toString()
					.replace("'{cache-version}'", JSON.stringify(version))
					.replace("'{cache-files}'", JSON.stringify(files))

			fs.writeFile("public/serviceWorker.js", buffer, (err) => {
				if (err) throw err;
				console.log("serviceWorker.js written");
			})
		})
	})
}

function parseHTML(html) {
	let pos = getNextChapterStart(html, 0)
	let nextPos = getNextChapterStart(html, pos + 239)
	let chapterCount = 0
	let books = []	//	each item is an object containing "name", "slug", "chapters"

	while (nextPos > 0) {
		let chapterHTML = html.substring(pos, nextPos)
		let parsed = parseTitle(chapterHTML)
		let book = parsed.book
		let chapter = parsed.chapter
		let slug = parsed.slug

		if (books.length > 0 && books[books.length - 1].slug == slug) {
			// book already exists
			books[books.length - 1].chapters++
		} else {
			// make a new book
			books.push({
				name: book,
				slug: slug,
				chapters: 1,
			})
		}

		console.log(chapterCount + ", " + pos + ", " + book + ":" + chapter)

		saveChapter(slug, chapter, chapterHTML)

		chapterCount++

		pos = nextPos
		nextPos = getNextChapterStart(html, nextPos + 239)
	}

	chapterHTML = html.substring(pos, html.indexOf("</body>", pos))
	let parsed = parseTitle(chapterHTML)
	let book = parsed.book
	let chapter = parsed.chapter
	let slug = parsed.slug

	saveChapter(slug, chapter, chapterHTML)
	books[books.length - 1].chapters++

	console.log(chapterCount + ", till the end, " + book + ":" + chapter)

	console.log(JSON.stringify(books))

	fs.writeFile("public/books.js", "var books = " + JSON.stringify(books), (err) => {
		if (err) console.log(err);
		console.log("Successfully wrote public/books.js.");
	});
}

function saveChapter(slug, chapter, chapterHTML) {
	chapterHTML = chapterHTML.replace(/.*#eeeeee.*\n/g, "")
	chapterHTML = chapterHTML.replace(/.*:\/\/biblehub\.com.*\n/g, "")
	chapterHTML = chapterHTML.replace(/.*\[Online\].*\n/g, "")
	chapterHTML = chapterHTML.replace(/ color="#001320"/g, "")
	chapterHTML = chapterHTML.replace(/face="Tahoma, serif"/g, "")

	fs.writeFile("public/chapters/" + slug + "-" + chapter + ".html", chapterHTML, (err) => {
		if (err) console.log(err);
		console.log("Successfully wrote public/chapters/" + slug + "-" + chapter + ".html");
	});

}

function parseTitle(html) {
	let fontHTML = '<font color="#001320"><font face="Tahoma, serif"><font size="5" style="font-size: 17pt"><b>'
	let start = html.indexOf(fontHTML) + fontHTML.length
	let end = html.indexOf("<", start)
	let bookName = html.substring(start, end)
	let parts = bookName.trim().split(/\s/).map(x => x.trim())

	let book, chapter

	if (parts.length == 3) {
		book = parts[0] + " " + parts[1]	// e.g. "1 John"
		chapter = parts[2]
	} else {
		book = parts[0]
		chapter = parts[1]
	}

	return {book, chapter, slug:book.replace(/\s/g, "-").toLowerCase()}
}

function getNextChapterStart(html, start) {
	let fontPos = html.indexOf('<font color="#001320"><font face="Tahoma, serif"><font size="5" style="font-size: 17pt"><b>', start)
	if (fontPos < 0) return null
	return html.lastIndexOf("<p", fontPos)
}
