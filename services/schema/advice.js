var mongoose = require("mongoose");
var config = require("../../config/config");
if(config){
	console.log("ATTEMPTING TO CONNECT TO MONGO ON: "+"mongodb://"+config.mongo_url+'/advice')
	mongoose.connect("mongodb://"+config.mongo_url+'/advice');

}

var AdviceSchema = mongoose.Schema({ tip: String });

module.exports=  mongoose.model('advice', AdviceSchema);  
