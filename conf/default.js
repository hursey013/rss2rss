module.exports = {
	port: process.env.PORT,
	base: '/rss',
	feeds: [{
		url: '/howtogeek',
		source: 'https://www.howtogeek.com/feed/',
		filters: [{
			key: 'link',
			regex: /^http[s]?:\/\/(www\.)?howtogeek.com/i,
		}]
	}]
};
