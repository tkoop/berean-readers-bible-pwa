// https://www.emanuelefornasier.it/pwa/serviceWorker.js

/**
 * Cache version, change name to force reload
 */
var CACHE_VERSION = 'v1';


/**
 * Stuff to put in the cache at install
 */
var CACHE_FILES = [
	'books.js',
	'chapters/1-chronicles-10.html',
	'chapters/1-chronicles-11.html',
	'chapters/1-chronicles-12.html',
	'chapters/1-chronicles-13.html',
	'chapters/1-chronicles-14.html',
	'chapters/1-chronicles-15.html',
	'chapters/1-chronicles-16.html',
	'chapters/1-chronicles-17.html',
	'chapters/1-chronicles-18.html',
	'chapters/1-chronicles-19.html',
	'chapters/1-chronicles-1.html',
	'chapters/1-chronicles-20.html',
	'chapters/1-chronicles-21.html',
	'chapters/1-chronicles-22.html',
	'chapters/1-chronicles-23.html',
	'chapters/1-chronicles-24.html',
	'chapters/1-chronicles-25.html',
	'chapters/1-chronicles-26.html',
	'chapters/1-chronicles-27.html',
	'chapters/1-chronicles-28.html',
	'chapters/1-chronicles-29.html',
	'chapters/1-chronicles-2.html',
	'chapters/1-chronicles-3.html',
	'chapters/1-chronicles-4.html',
	'chapters/1-chronicles-5.html',
	'chapters/1-chronicles-6.html',
	'chapters/1-chronicles-7.html',
	'chapters/1-chronicles-8.html',
	'chapters/1-chronicles-9.html',
	'chapters/1-corinthians-10.html',
	'chapters/1-corinthians-11.html',
	'chapters/1-corinthians-12.html',
	'chapters/1-corinthians-13.html',
	'chapters/1-corinthians-14.html',
	'chapters/1-corinthians-15.html',
	'chapters/1-corinthians-16.html',
	'chapters/1-corinthians-1.html',
	'chapters/1-corinthians-2.html',
	'chapters/1-corinthians-3.html',
	'chapters/1-corinthians-4.html',
	'chapters/1-corinthians-5.html',
	'chapters/1-corinthians-6.html',
	'chapters/1-corinthians-7.html',
	'chapters/1-corinthians-8.html',
	'chapters/1-corinthians-9.html',
	'chapters/1-john-1.html',
	'chapters/1-john-2.html',
	'chapters/1-john-3.html',
	'chapters/1-john-4.html',
	'chapters/1-john-5.html',
	'chapters/1-kings-10.html',
	'chapters/1-kings-11.html',
	'chapters/1-kings-12.html',
	'chapters/1-kings-13.html',
	'chapters/1-kings-14.html',
	'chapters/1-kings-15.html',
	'chapters/1-kings-16.html',
	'chapters/1-kings-17.html',
	'chapters/1-kings-18.html',
	'chapters/1-kings-19.html',
	'chapters/1-kings-1.html',
	'chapters/1-kings-20.html',
	'chapters/1-kings-21.html',
	'chapters/1-kings-22.html',
	'chapters/1-kings-2.html',
	'chapters/1-kings-3.html',
	'chapters/1-kings-4.html',
	'chapters/1-kings-5.html',
	'chapters/1-kings-6.html',
	'chapters/1-kings-7.html',
	'chapters/1-kings-8.html',
	'chapters/1-kings-9.html',
	'chapters/1-peter-1.html',
	'chapters/1-peter-2.html',
	'chapters/1-peter-3.html',
	'chapters/1-peter-4.html',
	'chapters/1-peter-5.html',
	'chapters/1-samuel-10.html',
	'chapters/1-samuel-11.html',
	'chapters/1-samuel-12.html',
	'chapters/1-samuel-13.html',
	'chapters/1-samuel-14.html',
	'chapters/1-samuel-15.html',
	'chapters/1-samuel-16.html',
	'chapters/1-samuel-17.html',
	'chapters/1-samuel-18.html',
	'chapters/1-samuel-19.html',
	'chapters/1-samuel-1.html',
	'chapters/1-samuel-20.html',
	'chapters/1-samuel-21.html',
	'chapters/1-samuel-22.html',
	'chapters/1-samuel-23.html',
	'chapters/1-samuel-24.html',
	'chapters/1-samuel-25.html',
	'chapters/1-samuel-26.html',
	'chapters/1-samuel-27.html',
	'chapters/1-samuel-28.html',
	'chapters/1-samuel-29.html',
	'chapters/1-samuel-2.html',
	'chapters/1-samuel-30.html',
	'chapters/1-samuel-31.html',
	'chapters/1-samuel-3.html',
	'chapters/1-samuel-4.html',
	'chapters/1-samuel-5.html',
	'chapters/1-samuel-6.html',
	'chapters/1-samuel-7.html',
	'chapters/1-samuel-8.html',
	'chapters/1-samuel-9.html',
	'chapters/1-thessalonians-1.html',
	'chapters/1-thessalonians-2.html',
	'chapters/1-thessalonians-3.html',
	'chapters/1-thessalonians-4.html',
	'chapters/1-thessalonians-5.html',
	'chapters/1-timothy-1.html',
	'chapters/1-timothy-2.html',
	'chapters/1-timothy-3.html',
	'chapters/1-timothy-4.html',
	'chapters/1-timothy-5.html',
	'chapters/1-timothy-6.html',
	'chapters/2-chronicles-10.html',
	'chapters/2-chronicles-11.html',
	'chapters/2-chronicles-12.html',
	'chapters/2-chronicles-13.html',
	'chapters/2-chronicles-14.html',
	'chapters/2-chronicles-15.html',
	'chapters/2-chronicles-16.html',
	'chapters/2-chronicles-17.html',
	'chapters/2-chronicles-18.html',
	'chapters/2-chronicles-19.html',
	'chapters/2-chronicles-1.html',
	'chapters/2-chronicles-20.html',
	'chapters/2-chronicles-21.html',
	'chapters/2-chronicles-22.html',
	'chapters/2-chronicles-23.html',
	'chapters/2-chronicles-24.html',
	'chapters/2-chronicles-25.html',
	'chapters/2-chronicles-26.html',
	'chapters/2-chronicles-27.html',
	'chapters/2-chronicles-28.html',
	'chapters/2-chronicles-29.html',
	'chapters/2-chronicles-2.html',
	'chapters/2-chronicles-30.html',
	'chapters/2-chronicles-31.html',
	'chapters/2-chronicles-32.html',
	'chapters/2-chronicles-33.html',
	'chapters/2-chronicles-34.html',
	'chapters/2-chronicles-35.html',
	'chapters/2-chronicles-36.html',
	'chapters/2-chronicles-3.html',
	'chapters/2-chronicles-4.html',
	'chapters/2-chronicles-5.html',
	'chapters/2-chronicles-6.html',
	'chapters/2-chronicles-7.html',
	'chapters/2-chronicles-8.html',
	'chapters/2-chronicles-9.html',
	'chapters/2-corinthians-10.html',
	'chapters/2-corinthians-11.html',
	'chapters/2-corinthians-12.html',
	'chapters/2-corinthians-13.html',
	'chapters/2-corinthians-1.html',
	'chapters/2-corinthians-2.html',
	'chapters/2-corinthians-3.html',
	'chapters/2-corinthians-4.html',
	'chapters/2-corinthians-5.html',
	'chapters/2-corinthians-6.html',
	'chapters/2-corinthians-7.html',
	'chapters/2-corinthians-8.html',
	'chapters/2-corinthians-9.html',
	'chapters/2-john-1.html',
	'chapters/2-kings-10.html',
	'chapters/2-kings-11.html',
	'chapters/2-kings-12.html',
	'chapters/2-kings-13.html',
	'chapters/2-kings-14.html',
	'chapters/2-kings-15.html',
	'chapters/2-kings-16.html',
	'chapters/2-kings-17.html',
	'chapters/2-kings-18.html',
	'chapters/2-kings-19.html',
	'chapters/2-kings-1.html',
	'chapters/2-kings-20.html',
	'chapters/2-kings-21.html',
	'chapters/2-kings-22.html',
	'chapters/2-kings-23.html',
	'chapters/2-kings-24.html',
	'chapters/2-kings-25.html',
	'chapters/2-kings-2.html',
	'chapters/2-kings-3.html',
	'chapters/2-kings-4.html',
	'chapters/2-kings-5.html',
	'chapters/2-kings-6.html',
	'chapters/2-kings-7.html',
	'chapters/2-kings-8.html',
	'chapters/2-kings-9.html',
	'chapters/2-peter-1.html',
	'chapters/2-peter-2.html',
	'chapters/2-peter-3.html',
	'chapters/2-samuel-10.html',
	'chapters/2-samuel-11.html',
	'chapters/2-samuel-12.html',
	'chapters/2-samuel-13.html',
	'chapters/2-samuel-14.html',
	'chapters/2-samuel-15.html',
	'chapters/2-samuel-16.html',
	'chapters/2-samuel-17.html',
	'chapters/2-samuel-18.html',
	'chapters/2-samuel-19.html',
	'chapters/2-samuel-1.html',
	'chapters/2-samuel-20.html',
	'chapters/2-samuel-21.html',
	'chapters/2-samuel-22.html',
	'chapters/2-samuel-23.html',
	'chapters/2-samuel-24.html',
	'chapters/2-samuel-2.html',
	'chapters/2-samuel-3.html',
	'chapters/2-samuel-4.html',
	'chapters/2-samuel-5.html',
	'chapters/2-samuel-6.html',
	'chapters/2-samuel-7.html',
	'chapters/2-samuel-8.html',
	'chapters/2-samuel-9.html',
	'chapters/2-thessalonians-1.html',
	'chapters/2-thessalonians-2.html',
	'chapters/2-thessalonians-3.html',
	'chapters/2-timothy-1.html',
	'chapters/2-timothy-2.html',
	'chapters/2-timothy-3.html',
	'chapters/2-timothy-4.html',
	'chapters/3-john-1.html',
	'chapters/acts-10.html',
	'chapters/acts-11.html',
	'chapters/acts-12.html',
	'chapters/acts-13.html',
	'chapters/acts-14.html',
	'chapters/acts-15.html',
	'chapters/acts-16.html',
	'chapters/acts-17.html',
	'chapters/acts-18.html',
	'chapters/acts-19.html',
	'chapters/acts-1.html',
	'chapters/acts-20.html',
	'chapters/acts-21.html',
	'chapters/acts-22.html',
	'chapters/acts-23.html',
	'chapters/acts-24.html',
	'chapters/acts-25.html',
	'chapters/acts-26.html',
	'chapters/acts-27.html',
	'chapters/acts-28.html',
	'chapters/acts-2.html',
	'chapters/acts-3.html',
	'chapters/acts-4.html',
	'chapters/acts-5.html',
	'chapters/acts-6.html',
	'chapters/acts-7.html',
	'chapters/acts-8.html',
	'chapters/acts-9.html',
	'chapters/amos-1.html',
	'chapters/amos-2.html',
	'chapters/amos-3.html',
	'chapters/amos-4.html',
	'chapters/amos-5.html',
	'chapters/amos-6.html',
	'chapters/amos-7.html',
	'chapters/amos-8.html',
	'chapters/amos-9.html',
	'chapters/colossians-1.html',
	'chapters/colossians-2.html',
	'chapters/colossians-3.html',
	'chapters/colossians-4.html',
	'chapters/daniel-10.html',
	'chapters/daniel-11.html',
	'chapters/daniel-12.html',
	'chapters/daniel-1.html',
	'chapters/daniel-2.html',
	'chapters/daniel-3.html',
	'chapters/daniel-4.html',
	'chapters/daniel-5.html',
	'chapters/daniel-6.html',
	'chapters/daniel-7.html',
	'chapters/daniel-8.html',
	'chapters/daniel-9.html',
	'chapters/deuteronomy-10.html',
	'chapters/deuteronomy-11.html',
	'chapters/deuteronomy-12.html',
	'chapters/deuteronomy-13.html',
	'chapters/deuteronomy-14.html',
	'chapters/deuteronomy-15.html',
	'chapters/deuteronomy-16.html',
	'chapters/deuteronomy-17.html',
	'chapters/deuteronomy-18.html',
	'chapters/deuteronomy-19.html',
	'chapters/deuteronomy-1.html',
	'chapters/deuteronomy-20.html',
	'chapters/deuteronomy-21.html',
	'chapters/deuteronomy-22.html',
	'chapters/deuteronomy-23.html',
	'chapters/deuteronomy-24.html',
	'chapters/deuteronomy-25.html',
	'chapters/deuteronomy-26.html',
	'chapters/deuteronomy-27.html',
	'chapters/deuteronomy-28.html',
	'chapters/deuteronomy-29.html',
	'chapters/deuteronomy-2.html',
	'chapters/deuteronomy-30.html',
	'chapters/deuteronomy-31.html',
	'chapters/deuteronomy-32.html',
	'chapters/deuteronomy-33.html',
	'chapters/deuteronomy-34.html',
	'chapters/deuteronomy-3.html',
	'chapters/deuteronomy-4.html',
	'chapters/deuteronomy-5.html',
	'chapters/deuteronomy-6.html',
	'chapters/deuteronomy-7.html',
	'chapters/deuteronomy-8.html',
	'chapters/deuteronomy-9.html',
	'chapters/ecclesiastes-10.html',
	'chapters/ecclesiastes-11.html',
	'chapters/ecclesiastes-12.html',
	'chapters/ecclesiastes-1.html',
	'chapters/ecclesiastes-2.html',
	'chapters/ecclesiastes-3.html',
	'chapters/ecclesiastes-4.html',
	'chapters/ecclesiastes-5.html',
	'chapters/ecclesiastes-6.html',
	'chapters/ecclesiastes-7.html',
	'chapters/ecclesiastes-8.html',
	'chapters/ecclesiastes-9.html',
	'chapters/ephesians-1.html',
	'chapters/ephesians-2.html',
	'chapters/ephesians-3.html',
	'chapters/ephesians-4.html',
	'chapters/ephesians-5.html',
	'chapters/ephesians-6.html',
	'chapters/esther-10.html',
	'chapters/esther-1.html',
	'chapters/esther-2.html',
	'chapters/esther-3.html',
	'chapters/esther-4.html',
	'chapters/esther-5.html',
	'chapters/esther-6.html',
	'chapters/esther-7.html',
	'chapters/esther-8.html',
	'chapters/esther-9.html',
	'chapters/exodus-10.html',
	'chapters/exodus-11.html',
	'chapters/exodus-12.html',
	'chapters/exodus-13.html',
	'chapters/exodus-14.html',
	'chapters/exodus-15.html',
	'chapters/exodus-16.html',
	'chapters/exodus-17.html',
	'chapters/exodus-18.html',
	'chapters/exodus-19.html',
	'chapters/exodus-1.html',
	'chapters/exodus-20.html',
	'chapters/exodus-21.html',
	'chapters/exodus-22.html',
	'chapters/exodus-23.html',
	'chapters/exodus-24.html',
	'chapters/exodus-25.html',
	'chapters/exodus-26.html',
	'chapters/exodus-27.html',
	'chapters/exodus-28.html',
	'chapters/exodus-29.html',
	'chapters/exodus-2.html',
	'chapters/exodus-30.html',
	'chapters/exodus-31.html',
	'chapters/exodus-32.html',
	'chapters/exodus-33.html',
	'chapters/exodus-34.html',
	'chapters/exodus-35.html',
	'chapters/exodus-36.html',
	'chapters/exodus-37.html',
	'chapters/exodus-38.html',
	'chapters/exodus-39.html',
	'chapters/exodus-3.html',
	'chapters/exodus-40.html',
	'chapters/exodus-4.html',
	'chapters/exodus-5.html',
	'chapters/exodus-6.html',
	'chapters/exodus-7.html',
	'chapters/exodus-8.html',
	'chapters/exodus-9.html',
	'chapters/ezekiel-10.html',
	'chapters/ezekiel-11.html',
	'chapters/ezekiel-12.html',
	'chapters/ezekiel-13.html',
	'chapters/ezekiel-14.html',
	'chapters/ezekiel-15.html',
	'chapters/ezekiel-16.html',
	'chapters/ezekiel-17.html',
	'chapters/ezekiel-18.html',
	'chapters/ezekiel-19.html',
	'chapters/ezekiel-1.html',
	'chapters/ezekiel-20.html',
	'chapters/ezekiel-21.html',
	'chapters/ezekiel-22.html',
	'chapters/ezekiel-23.html',
	'chapters/ezekiel-24.html',
	'chapters/ezekiel-25.html',
	'chapters/ezekiel-26.html',
	'chapters/ezekiel-27.html',
	'chapters/ezekiel-28.html',
	'chapters/ezekiel-29.html',
	'chapters/ezekiel-2.html',
	'chapters/ezekiel-30.html',
	'chapters/ezekiel-31.html',
	'chapters/ezekiel-32.html',
	'chapters/ezekiel-33.html',
	'chapters/ezekiel-34.html',
	'chapters/ezekiel-35.html',
	'chapters/ezekiel-36.html',
	'chapters/ezekiel-37.html',
	'chapters/ezekiel-38.html',
	'chapters/ezekiel-39.html',
	'chapters/ezekiel-3.html',
	'chapters/ezekiel-40.html',
	'chapters/ezekiel-41.html',
	'chapters/ezekiel-42.html',
	'chapters/ezekiel-43.html',
	'chapters/ezekiel-44.html',
	'chapters/ezekiel-45.html',
	'chapters/ezekiel-46.html',
	'chapters/ezekiel-47.html',
	'chapters/ezekiel-48.html',
	'chapters/ezekiel-4.html',
	'chapters/ezekiel-5.html',
	'chapters/ezekiel-6.html',
	'chapters/ezekiel-7.html',
	'chapters/ezekiel-8.html',
	'chapters/ezekiel-9.html',
	'chapters/ezra-10.html',
	'chapters/ezra-1.html',
	'chapters/ezra-2.html',
	'chapters/ezra-3.html',
	'chapters/ezra-4.html',
	'chapters/ezra-5.html',
	'chapters/ezra-6.html',
	'chapters/ezra-7.html',
	'chapters/ezra-8.html',
	'chapters/ezra-9.html',
	'chapters/galatians-1.html',
	'chapters/galatians-2.html',
	'chapters/galatians-3.html',
	'chapters/galatians-4.html',
	'chapters/galatians-5.html',
	'chapters/galatians-6.html',
	'chapters/genesis-10.html',
	'chapters/genesis-11.html',
	'chapters/genesis-12.html',
	'chapters/genesis-13.html',
	'chapters/genesis-14.html',
	'chapters/genesis-15.html',
	'chapters/genesis-16.html',
	'chapters/genesis-17.html',
	'chapters/genesis-18.html',
	'chapters/genesis-19.html',
	'chapters/genesis-1.html',
	'chapters/genesis-20.html',
	'chapters/genesis-21.html',
	'chapters/genesis-22.html',
	'chapters/genesis-23.html',
	'chapters/genesis-24.html',
	'chapters/genesis-25.html',
	'chapters/genesis-26.html',
	'chapters/genesis-27.html',
	'chapters/genesis-28.html',
	'chapters/genesis-29.html',
	'chapters/genesis-2.html',
	'chapters/genesis-30.html',
	'chapters/genesis-31.html',
	'chapters/genesis-32.html',
	'chapters/genesis-33.html',
	'chapters/genesis-34.html',
	'chapters/genesis-35.html',
	'chapters/genesis-36.html',
	'chapters/genesis-37.html',
	'chapters/genesis-38.html',
	'chapters/genesis-39.html',
	'chapters/genesis-3.html',
	'chapters/genesis-40.html',
	'chapters/genesis-41.html',
	'chapters/genesis-42.html',
	'chapters/genesis-43.html',
	'chapters/genesis-44.html',
	'chapters/genesis-45.html',
	'chapters/genesis-46.html',
	'chapters/genesis-47.html',
	'chapters/genesis-48.html',
	'chapters/genesis-49.html',
	'chapters/genesis-4.html',
	'chapters/genesis-50.html',
	'chapters/genesis-5.html',
	'chapters/genesis-6.html',
	'chapters/genesis-7.html',
	'chapters/genesis-8.html',
	'chapters/genesis-9.html',
	'chapters/habakkuk-1.html',
	'chapters/habakkuk-2.html',
	'chapters/habakkuk-3.html',
	'chapters/haggai-1.html',
	'chapters/haggai-2.html',
	'chapters/hebrews-10.html',
	'chapters/hebrews-11.html',
	'chapters/hebrews-12.html',
	'chapters/hebrews-13.html',
	'chapters/hebrews-1.html',
	'chapters/hebrews-2.html',
	'chapters/hebrews-3.html',
	'chapters/hebrews-4.html',
	'chapters/hebrews-5.html',
	'chapters/hebrews-6.html',
	'chapters/hebrews-7.html',
	'chapters/hebrews-8.html',
	'chapters/hebrews-9.html',
	'chapters/hosea-10.html',
	'chapters/hosea-11.html',
	'chapters/hosea-12.html',
	'chapters/hosea-13.html',
	'chapters/hosea-14.html',
	'chapters/hosea-1.html',
	'chapters/hosea-2.html',
	'chapters/hosea-3.html',
	'chapters/hosea-4.html',
	'chapters/hosea-5.html',
	'chapters/hosea-6.html',
	'chapters/hosea-7.html',
	'chapters/hosea-8.html',
	'chapters/hosea-9.html',
	'chapters/isaiah-10.html',
	'chapters/isaiah-11.html',
	'chapters/isaiah-12.html',
	'chapters/isaiah-13.html',
	'chapters/isaiah-14.html',
	'chapters/isaiah-15.html',
	'chapters/isaiah-16.html',
	'chapters/isaiah-17.html',
	'chapters/isaiah-18.html',
	'chapters/isaiah-19.html',
	'chapters/isaiah-1.html',
	'chapters/isaiah-20.html',
	'chapters/isaiah-21.html',
	'chapters/isaiah-22.html',
	'chapters/isaiah-23.html',
	'chapters/isaiah-24.html',
	'chapters/isaiah-25.html',
	'chapters/isaiah-26.html',
	'chapters/isaiah-27.html',
	'chapters/isaiah-28.html',
	'chapters/isaiah-29.html',
	'chapters/isaiah-2.html',
	'chapters/isaiah-30.html',
	'chapters/isaiah-31.html',
	'chapters/isaiah-32.html',
	'chapters/isaiah-33.html',
	'chapters/isaiah-34.html',
	'chapters/isaiah-35.html',
	'chapters/isaiah-36.html',
	'chapters/isaiah-37.html',
	'chapters/isaiah-38.html',
	'chapters/isaiah-39.html',
	'chapters/isaiah-3.html',
	'chapters/isaiah-40.html',
	'chapters/isaiah-41.html',
	'chapters/isaiah-42.html',
	'chapters/isaiah-43.html',
	'chapters/isaiah-44.html',
	'chapters/isaiah-45.html',
	'chapters/isaiah-46.html',
	'chapters/isaiah-47.html',
	'chapters/isaiah-48.html',
	'chapters/isaiah-49.html',
	'chapters/isaiah-4.html',
	'chapters/isaiah-50.html',
	'chapters/isaiah-51.html',
	'chapters/isaiah-52.html',
	'chapters/isaiah-53.html',
	'chapters/isaiah-54.html',
	'chapters/isaiah-55.html',
	'chapters/isaiah-56.html',
	'chapters/isaiah-57.html',
	'chapters/isaiah-58.html',
	'chapters/isaiah-59.html',
	'chapters/isaiah-5.html',
	'chapters/isaiah-60.html',
	'chapters/isaiah-61.html',
	'chapters/isaiah-62.html',
	'chapters/isaiah-63.html',
	'chapters/isaiah-64.html',
	'chapters/isaiah-65.html',
	'chapters/isaiah-66.html',
	'chapters/isaiah-6.html',
	'chapters/isaiah-7.html',
	'chapters/isaiah-8.html',
	'chapters/isaiah-9.html',
	'chapters/james-1.html',
	'chapters/james-2.html',
	'chapters/james-3.html',
	'chapters/james-4.html',
	'chapters/james-5.html',
	'chapters/jeremiah-10.html',
	'chapters/jeremiah-11.html',
	'chapters/jeremiah-12.html',
	'chapters/jeremiah-13.html',
	'chapters/jeremiah-14.html',
	'chapters/jeremiah-15.html',
	'chapters/jeremiah-16.html',
	'chapters/jeremiah-17.html',
	'chapters/jeremiah-18.html',
	'chapters/jeremiah-19.html',
	'chapters/jeremiah-1.html',
	'chapters/jeremiah-20.html',
	'chapters/jeremiah-21.html',
	'chapters/jeremiah-22.html',
	'chapters/jeremiah-23.html',
	'chapters/jeremiah-24.html',
	'chapters/jeremiah-25.html',
	'chapters/jeremiah-26.html',
	'chapters/jeremiah-27.html',
	'chapters/jeremiah-28.html',
	'chapters/jeremiah-29.html',
	'chapters/jeremiah-2.html',
	'chapters/jeremiah-30.html',
	'chapters/jeremiah-31.html',
	'chapters/jeremiah-32.html',
	'chapters/jeremiah-33.html',
	'chapters/jeremiah-34.html',
	'chapters/jeremiah-35.html',
	'chapters/jeremiah-36.html',
	'chapters/jeremiah-37.html',
	'chapters/jeremiah-38.html',
	'chapters/jeremiah-39.html',
	'chapters/jeremiah-3.html',
	'chapters/jeremiah-40.html',
	'chapters/jeremiah-41.html',
	'chapters/jeremiah-42.html',
	'chapters/jeremiah-43.html',
	'chapters/jeremiah-44.html',
	'chapters/jeremiah-45.html',
	'chapters/jeremiah-46.html',
	'chapters/jeremiah-47.html',
	'chapters/jeremiah-48.html',
	'chapters/jeremiah-49.html',
	'chapters/jeremiah-4.html',
	'chapters/jeremiah-50.html',
	'chapters/jeremiah-51.html',
	'chapters/jeremiah-52.html',
	'chapters/jeremiah-5.html',
	'chapters/jeremiah-6.html',
	'chapters/jeremiah-7.html',
	'chapters/jeremiah-8.html',
	'chapters/jeremiah-9.html',
	'chapters/job-10.html',
	'chapters/job-11.html',
	'chapters/job-12.html',
	'chapters/job-13.html',
	'chapters/job-14.html',
	'chapters/job-15.html',
	'chapters/job-16.html',
	'chapters/job-17.html',
	'chapters/job-18.html',
	'chapters/job-19.html',
	'chapters/job-1.html',
	'chapters/job-20.html',
	'chapters/job-21.html',
	'chapters/job-22.html',
	'chapters/job-23.html',
	'chapters/job-24.html',
	'chapters/job-25.html',
	'chapters/job-26.html',
	'chapters/job-27.html',
	'chapters/job-28.html',
	'chapters/job-29.html',
	'chapters/job-2.html',
	'chapters/job-30.html',
	'chapters/job-31.html',
	'chapters/job-32.html',
	'chapters/job-33.html',
	'chapters/job-34.html',
	'chapters/job-35.html',
	'chapters/job-36.html',
	'chapters/job-37.html',
	'chapters/job-38.html',
	'chapters/job-39.html',
	'chapters/job-3.html',
	'chapters/job-40.html',
	'chapters/job-41.html',
	'chapters/job-42.html',
	'chapters/job-4.html',
	'chapters/job-5.html',
	'chapters/job-6.html',
	'chapters/job-7.html',
	'chapters/job-8.html',
	'chapters/job-9.html',
	'chapters/joel-1.html',
	'chapters/joel-2.html',
	'chapters/joel-3.html',
	'chapters/john-10.html',
	'chapters/john-11.html',
	'chapters/john-12.html',
	'chapters/john-13.html',
	'chapters/john-14.html',
	'chapters/john-15.html',
	'chapters/john-16.html',
	'chapters/john-17.html',
	'chapters/john-18.html',
	'chapters/john-19.html',
	'chapters/john-1.html',
	'chapters/john-20.html',
	'chapters/john-21.html',
	'chapters/john-2.html',
	'chapters/john-3.html',
	'chapters/john-4.html',
	'chapters/john-5.html',
	'chapters/john-6.html',
	'chapters/john-7.html',
	'chapters/john-8.html',
	'chapters/john-9.html',
	'chapters/jonah-1.html',
	'chapters/jonah-2.html',
	'chapters/jonah-3.html',
	'chapters/jonah-4.html',
	'chapters/joshua-10.html',
	'chapters/joshua-11.html',
	'chapters/joshua-12.html',
	'chapters/joshua-13.html',
	'chapters/joshua-14.html',
	'chapters/joshua-15.html',
	'chapters/joshua-16.html',
	'chapters/joshua-17.html',
	'chapters/joshua-18.html',
	'chapters/joshua-19.html',
	'chapters/joshua-1.html',
	'chapters/joshua-20.html',
	'chapters/joshua-21.html',
	'chapters/joshua-22.html',
	'chapters/joshua-23.html',
	'chapters/joshua-24.html',
	'chapters/joshua-2.html',
	'chapters/joshua-3.html',
	'chapters/joshua-4.html',
	'chapters/joshua-5.html',
	'chapters/joshua-6.html',
	'chapters/joshua-7.html',
	'chapters/joshua-8.html',
	'chapters/joshua-9.html',
	'chapters/jude-1.html',
	'chapters/judges-10.html',
	'chapters/judges-11.html',
	'chapters/judges-12.html',
	'chapters/judges-13.html',
	'chapters/judges-14.html',
	'chapters/judges-15.html',
	'chapters/judges-16.html',
	'chapters/judges-17.html',
	'chapters/judges-18.html',
	'chapters/judges-19.html',
	'chapters/judges-1.html',
	'chapters/judges-20.html',
	'chapters/judges-21.html',
	'chapters/judges-2.html',
	'chapters/judges-3.html',
	'chapters/judges-4.html',
	'chapters/judges-5.html',
	'chapters/judges-6.html',
	'chapters/judges-7.html',
	'chapters/judges-8.html',
	'chapters/judges-9.html',
	'chapters/lamentations-1.html',
	'chapters/lamentations-2.html',
	'chapters/lamentations-3.html',
	'chapters/lamentations-4.html',
	'chapters/lamentations-5.html',
	'chapters/leviticus-10.html',
	'chapters/leviticus-11.html',
	'chapters/leviticus-12.html',
	'chapters/leviticus-13.html',
	'chapters/leviticus-14.html',
	'chapters/leviticus-15.html',
	'chapters/leviticus-16.html',
	'chapters/leviticus-17.html',
	'chapters/leviticus-18.html',
	'chapters/leviticus-19.html',
	'chapters/leviticus-1.html',
	'chapters/leviticus-20.html',
	'chapters/leviticus-21.html',
	'chapters/leviticus-22.html',
	'chapters/leviticus-23.html',
	'chapters/leviticus-24.html',
	'chapters/leviticus-25.html',
	'chapters/leviticus-26.html',
	'chapters/leviticus-27.html',
	'chapters/leviticus-2.html',
	'chapters/leviticus-3.html',
	'chapters/leviticus-4.html',
	'chapters/leviticus-5.html',
	'chapters/leviticus-6.html',
	'chapters/leviticus-7.html',
	'chapters/leviticus-8.html',
	'chapters/leviticus-9.html',
	'chapters/luke-10.html',
	'chapters/luke-11.html',
	'chapters/luke-12.html',
	'chapters/luke-13.html',
	'chapters/luke-14.html',
	'chapters/luke-15.html',
	'chapters/luke-16.html',
	'chapters/luke-17.html',
	'chapters/luke-18.html',
	'chapters/luke-19.html',
	'chapters/luke-1.html',
	'chapters/luke-20.html',
	'chapters/luke-21.html',
	'chapters/luke-22.html',
	'chapters/luke-23.html',
	'chapters/luke-24.html',
	'chapters/luke-2.html',
	'chapters/luke-3.html',
	'chapters/luke-4.html',
	'chapters/luke-5.html',
	'chapters/luke-6.html',
	'chapters/luke-7.html',
	'chapters/luke-8.html',
	'chapters/luke-9.html',
	'chapters/malachi-1.html',
	'chapters/malachi-2.html',
	'chapters/malachi-3.html',
	'chapters/malachi-4.html',
	'chapters/mark-10.html',
	'chapters/mark-11.html',
	'chapters/mark-12.html',
	'chapters/mark-13.html',
	'chapters/mark-14.html',
	'chapters/mark-15.html',
	'chapters/mark-16.html',
	'chapters/mark-1.html',
	'chapters/mark-2.html',
	'chapters/mark-3.html',
	'chapters/mark-4.html',
	'chapters/mark-5.html',
	'chapters/mark-6.html',
	'chapters/mark-7.html',
	'chapters/mark-8.html',
	'chapters/mark-9.html',
	'chapters/matthew-10.html',
	'chapters/matthew-11.html',
	'chapters/matthew-12.html',
	'chapters/matthew-13.html',
	'chapters/matthew-14.html',
	'chapters/matthew-15.html',
	'chapters/matthew-16.html',
	'chapters/matthew-17.html',
	'chapters/matthew-18.html',
	'chapters/matthew-19.html',
	'chapters/matthew-1.html',
	'chapters/matthew-20.html',
	'chapters/matthew-21.html',
	'chapters/matthew-22.html',
	'chapters/matthew-23.html',
	'chapters/matthew-24.html',
	'chapters/matthew-25.html',
	'chapters/matthew-26.html',
	'chapters/matthew-27.html',
	'chapters/matthew-28.html',
	'chapters/matthew-2.html',
	'chapters/matthew-3.html',
	'chapters/matthew-4.html',
	'chapters/matthew-5.html',
	'chapters/matthew-6.html',
	'chapters/matthew-7.html',
	'chapters/matthew-8.html',
	'chapters/matthew-9.html',
	'chapters/micah-1.html',
	'chapters/micah-2.html',
	'chapters/micah-3.html',
	'chapters/micah-4.html',
	'chapters/micah-5.html',
	'chapters/micah-6.html',
	'chapters/micah-7.html',
	'chapters/nahum-1.html',
	'chapters/nahum-2.html',
	'chapters/nahum-3.html',
	'chapters/nehemiah-10.html',
	'chapters/nehemiah-11.html',
	'chapters/nehemiah-12.html',
	'chapters/nehemiah-13.html',
	'chapters/nehemiah-1.html',
	'chapters/nehemiah-2.html',
	'chapters/nehemiah-3.html',
	'chapters/nehemiah-4.html',
	'chapters/nehemiah-5.html',
	'chapters/nehemiah-6.html',
	'chapters/nehemiah-7.html',
	'chapters/nehemiah-8.html',
	'chapters/nehemiah-9.html',
	'chapters/numbers-10.html',
	'chapters/numbers-11.html',
	'chapters/numbers-12.html',
	'chapters/numbers-13.html',
	'chapters/numbers-14.html',
	'chapters/numbers-15.html',
	'chapters/numbers-16.html',
	'chapters/numbers-17.html',
	'chapters/numbers-18.html',
	'chapters/numbers-19.html',
	'chapters/numbers-1.html',
	'chapters/numbers-20.html',
	'chapters/numbers-21.html',
	'chapters/numbers-22.html',
	'chapters/numbers-23.html',
	'chapters/numbers-24.html',
	'chapters/numbers-25.html',
	'chapters/numbers-26.html',
	'chapters/numbers-27.html',
	'chapters/numbers-28.html',
	'chapters/numbers-29.html',
	'chapters/numbers-2.html',
	'chapters/numbers-30.html',
	'chapters/numbers-31.html',
	'chapters/numbers-32.html',
	'chapters/numbers-33.html',
	'chapters/numbers-34.html',
	'chapters/numbers-35.html',
	'chapters/numbers-36.html',
	'chapters/numbers-3.html',
	'chapters/numbers-4.html',
	'chapters/numbers-5.html',
	'chapters/numbers-6.html',
	'chapters/numbers-7.html',
	'chapters/numbers-8.html',
	'chapters/numbers-9.html',
	'chapters/obadiah-1.html',
	'chapters/philemon-1.html',
	'chapters/philippians-1.html',
	'chapters/philippians-2.html',
	'chapters/philippians-3.html',
	'chapters/philippians-4.html',
	'chapters/proverbs-10.html',
	'chapters/proverbs-11.html',
	'chapters/proverbs-12.html',
	'chapters/proverbs-13.html',
	'chapters/proverbs-14.html',
	'chapters/proverbs-15.html',
	'chapters/proverbs-16.html',
	'chapters/proverbs-17.html',
	'chapters/proverbs-18.html',
	'chapters/proverbs-19.html',
	'chapters/proverbs-1.html',
	'chapters/proverbs-20.html',
	'chapters/proverbs-21.html',
	'chapters/proverbs-22.html',
	'chapters/proverbs-23.html',
	'chapters/proverbs-24.html',
	'chapters/proverbs-25.html',
	'chapters/proverbs-26.html',
	'chapters/proverbs-27.html',
	'chapters/proverbs-28.html',
	'chapters/proverbs-29.html',
	'chapters/proverbs-2.html',
	'chapters/proverbs-30.html',
	'chapters/proverbs-31.html',
	'chapters/proverbs-3.html',
	'chapters/proverbs-4.html',
	'chapters/proverbs-5.html',
	'chapters/proverbs-6.html',
	'chapters/proverbs-7.html',
	'chapters/proverbs-8.html',
	'chapters/proverbs-9.html',
	'chapters/psalm-100.html',
	'chapters/psalm-101.html',
	'chapters/psalm-102.html',
	'chapters/psalm-103.html',
	'chapters/psalm-104.html',
	'chapters/psalm-105.html',
	'chapters/psalm-106.html',
	'chapters/psalm-107.html',
	'chapters/psalm-108.html',
	'chapters/psalm-109.html',
	'chapters/psalm-10.html',
	'chapters/psalm-110.html',
	'chapters/psalm-111.html',
	'chapters/psalm-112.html',
	'chapters/psalm-113.html',
	'chapters/psalm-114.html',
	'chapters/psalm-115.html',
	'chapters/psalm-116.html',
	'chapters/psalm-117.html',
	'chapters/psalm-118.html',
	'chapters/psalm-119.html',
	'chapters/psalm-11.html',
	'chapters/psalm-120.html',
	'chapters/psalm-121.html',
	'chapters/psalm-122.html',
	'chapters/psalm-123.html',
	'chapters/psalm-124.html',
	'chapters/psalm-125.html',
	'chapters/psalm-126.html',
	'chapters/psalm-127.html',
	'chapters/psalm-128.html',
	'chapters/psalm-129.html',
	'chapters/psalm-12.html',
	'chapters/psalm-130.html',
	'chapters/psalm-131.html',
	'chapters/psalm-132.html',
	'chapters/psalm-133.html',
	'chapters/psalm-134.html',
	'chapters/psalm-135.html',
	'chapters/psalm-136.html',
	'chapters/psalm-137.html',
	'chapters/psalm-138.html',
	'chapters/psalm-139.html',
	'chapters/psalm-13.html',
	'chapters/psalm-140.html',
	'chapters/psalm-141.html',
	'chapters/psalm-142.html',
	'chapters/psalm-143.html',
	'chapters/psalm-144.html',
	'chapters/psalm-145.html',
	'chapters/psalm-146.html',
	'chapters/psalm-147.html',
	'chapters/psalm-148.html',
	'chapters/psalm-149.html',
	'chapters/psalm-14.html',
	'chapters/psalm-150.html',
	'chapters/psalm-15.html',
	'chapters/psalm-16.html',
	'chapters/psalm-17.html',
	'chapters/psalm-18.html',
	'chapters/psalm-19.html',
	'chapters/psalm-1.html',
	'chapters/psalm-20.html',
	'chapters/psalm-21.html',
	'chapters/psalm-22.html',
	'chapters/psalm-23.html',
	'chapters/psalm-24.html',
	'chapters/psalm-25.html',
	'chapters/psalm-26.html',
	'chapters/psalm-27.html',
	'chapters/psalm-28.html',
	'chapters/psalm-29.html',
	'chapters/psalm-2.html',
	'chapters/psalm-30.html',
	'chapters/psalm-31.html',
	'chapters/psalm-32.html',
	'chapters/psalm-33.html',
	'chapters/psalm-34.html',
	'chapters/psalm-35.html',
	'chapters/psalm-36.html',
	'chapters/psalm-37.html',
	'chapters/psalm-38.html',
	'chapters/psalm-39.html',
	'chapters/psalm-3.html',
	'chapters/psalm-40.html',
	'chapters/psalm-41.html',
	'chapters/psalm-42.html',
	'chapters/psalm-43.html',
	'chapters/psalm-44.html',
	'chapters/psalm-45.html',
	'chapters/psalm-46.html',
	'chapters/psalm-47.html',
	'chapters/psalm-48.html',
	'chapters/psalm-49.html',
	'chapters/psalm-4.html',
	'chapters/psalm-50.html',
	'chapters/psalm-51.html',
	'chapters/psalm-52.html',
	'chapters/psalm-53.html',
	'chapters/psalm-54.html',
	'chapters/psalm-55.html',
	'chapters/psalm-56.html',
	'chapters/psalm-57.html',
	'chapters/psalm-58.html',
	'chapters/psalm-59.html',
	'chapters/psalm-5.html',
	'chapters/psalm-60.html',
	'chapters/psalm-61.html',
	'chapters/psalm-62.html',
	'chapters/psalm-63.html',
	'chapters/psalm-64.html',
	'chapters/psalm-65.html',
	'chapters/psalm-66.html',
	'chapters/psalm-67.html',
	'chapters/psalm-68.html',
	'chapters/psalm-69.html',
	'chapters/psalm-6.html',
	'chapters/psalm-70.html',
	'chapters/psalm-71.html',
	'chapters/psalm-72.html',
	'chapters/psalm-73.html',
	'chapters/psalm-74.html',
	'chapters/psalm-75.html',
	'chapters/psalm-76.html',
	'chapters/psalm-77.html',
	'chapters/psalm-78.html',
	'chapters/psalm-79.html',
	'chapters/psalm-7.html',
	'chapters/psalm-80.html',
	'chapters/psalm-81.html',
	'chapters/psalm-82.html',
	'chapters/psalm-83.html',
	'chapters/psalm-84.html',
	'chapters/psalm-85.html',
	'chapters/psalm-86.html',
	'chapters/psalm-87.html',
	'chapters/psalm-88.html',
	'chapters/psalm-89.html',
	'chapters/psalm-8.html',
	'chapters/psalm-90.html',
	'chapters/psalm-91.html',
	'chapters/psalm-92.html',
	'chapters/psalm-93.html',
	'chapters/psalm-94.html',
	'chapters/psalm-95.html',
	'chapters/psalm-96.html',
	'chapters/psalm-97.html',
	'chapters/psalm-98.html',
	'chapters/psalm-99.html',
	'chapters/psalm-9.html',
	'chapters/revelation-10.html',
	'chapters/revelation-11.html',
	'chapters/revelation-12.html',
	'chapters/revelation-13.html',
	'chapters/revelation-14.html',
	'chapters/revelation-15.html',
	'chapters/revelation-16.html',
	'chapters/revelation-17.html',
	'chapters/revelation-18.html',
	'chapters/revelation-19.html',
	'chapters/revelation-1.html',
	'chapters/revelation-20.html',
	'chapters/revelation-21.html',
	'chapters/revelation-22.html',
	'chapters/revelation-2.html',
	'chapters/revelation-3.html',
	'chapters/revelation-4.html',
	'chapters/revelation-5.html',
	'chapters/revelation-6.html',
	'chapters/revelation-7.html',
	'chapters/revelation-8.html',
	'chapters/revelation-9.html',
	'chapters/romans-10.html',
	'chapters/romans-11.html',
	'chapters/romans-12.html',
	'chapters/romans-13.html',
	'chapters/romans-14.html',
	'chapters/romans-15.html',
	'chapters/romans-16.html',
	'chapters/romans-1.html',
	'chapters/romans-2.html',
	'chapters/romans-3.html',
	'chapters/romans-4.html',
	'chapters/romans-5.html',
	'chapters/romans-6.html',
	'chapters/romans-7.html',
	'chapters/romans-8.html',
	'chapters/romans-9.html',
	'chapters/ruth-1.html',
	'chapters/ruth-2.html',
	'chapters/ruth-3.html',
	'chapters/ruth-4.html',
	'chapters/song-of.html',
	'chapters/titus-1.html',
	'chapters/titus-2.html',
	'chapters/titus-3.html',
	'chapters/zechariah-10.html',
	'chapters/zechariah-11.html',
	'chapters/zechariah-12.html',
	'chapters/zechariah-13.html',
	'chapters/zechariah-14.html',
	'chapters/zechariah-1.html',
	'chapters/zechariah-2.html',
	'chapters/zechariah-3.html',
	'chapters/zechariah-4.html',
	'chapters/zechariah-5.html',
	'chapters/zechariah-6.html',
	'chapters/zechariah-7.html',
	'chapters/zechariah-8.html',
	'chapters/zechariah-9.html',
	'chapters/zephaniah-1.html',
	'chapters/zephaniah-2.html',
	'chapters/zephaniah-3.html',
	'fonts/SourceSansPro-Bold.ttf',
	'fonts/SourceSansPro-Italic.ttf',
	'fonts/SourceSansPro-Regular.ttf',
	'image/logo_192.png',
	'image/logo_234.png',
	'image/logo_32.png',
	'image/logo_702.png',
	'index.html',
	'style.css'
];


/**
 * Service worker 'install' event.
 * If all the files are successfully cached, then the service worker will be installed.
 * If any of the files fail to download, then the install step will fail.
 */
this.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_VERSION).then(function (cache) {
			console.log('Installing...');
			return cache.addAll(CACHE_FILES);
		}).catch(function (a) {
			console.log(a);
		})
	); // waitUntil
});


/**
 * After a service worker is installed and the user navigates to a different page or refreshes,
 * the service worker will begin to receive fetch events.
 *
 * Network-first approach: if online, request is fetched from network and not from cache
 */
this.addEventListener('fetch', function (event) {
	event.respondWith(function () {

		var res = returnFromServer(event);
		if (res) { return res; }

		caches.match(event.request).then(function (res) {
			// Cache hit - return response
			if (res) {
				return res;
			}

			// no response
			return null;
		})

	}());
});


/**
 * If we don't have a matching response, we return the result of a call to fetch,
 * which will make a network request and return the data if anything can be retrieved from the network.
 */
function returnFromServer(event) {

	// IMPORTANT: Clone the request. A request is a stream and
	// can only be consumed once. Since we are consuming this
	// once by cache and once by the browser for fetch, we need
	// to clone the response.
	var fetchRequest = event.request.clone();

	var url = event.request.clone();

	return fetch(fetchRequest).then(
		function (response) {

			// Check if we received a valid response
			if (!response || response.status !== 200 || response.type !== 'basic') {
				return null;
			}

			// IMPORTANT: Clone the response. A response is a stream
			// and because we want the browser to consume the response
			// as well as the cache consuming the response, we need
			// to clone it so we have two streams.
			var responseToCache = response.clone();

			caches.open(CACHE_VERSION)
				.then(function (cache) {
					cache.put(event.request, responseToCache);
				});

			return response;
		}
	); // return.fetch().then()

}