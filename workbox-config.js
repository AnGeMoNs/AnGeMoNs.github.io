module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,js,jpg,html,json,mp3}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};