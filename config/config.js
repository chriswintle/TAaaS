var url = require('url');
var config = {};
var mongo_url;

if (typeof(process.env.DATABASE_URL) !== 'undefined') {
    mongo_url = process.env.DATABASE_URL;
}
else if (process.env.TEST === 'true') {
    mongo_url = "192.168.99.100:32771";
}
else {
    mongo_url = "192.168.99.100:32770";
}
config.mongo_url = mongo_url;

module.exports = config;