var config = require("../config/config");
var mongoose = require('mongoose');
var mongoConnection = mongoose.createConnection(config.get('mongo_url'));

module.exports = mongoConnection;