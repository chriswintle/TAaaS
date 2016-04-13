var mongoose = require("mongoose");
var config = require("../../config/config");
if(config){
	mongoose.connect("mongodb://"+config.mongo_url+'/advice');

}

var AdviceSchema = mongoose.Schema({ tip: String });

module.exports=  mongoose.model('advice', AdviceSchema);  
