var url = require('url');
var config = {};
var mongo_url;

if (typeof(process.env.DATABASE_URL) !== 'undefined') {
    mongo_url = process.env.DATABASE_URL;
}
else if (process.env.NODE_ENV === 'test') {
    mongo_url = "192.168.99.100:32771";
}
else {
	console.log("NOT TEST MODE")
    mongo_url = "192.168.99.100:32772";
}
config.mongo_url = mongo_url;

console


module.exports = config;