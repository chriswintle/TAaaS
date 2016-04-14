var Q = require("q");

var AdviceService = function(){
	var config = require("../config/config");
	var Advice = require("./schema/advice.js")


	this.addAdvice = function(text) {
		//TODO - IMPLEMENT ME
	}

	this.getAllAdvice = function(){
		//TODO - IMPLEMENT ME
	}
	
	this.getRandomAdvice =  function(){
		//TODO IMPLEMENT ME
		
	}

	this.getRandomIndex = function(obj){
		//Math.floor(Math.random() * limit);
		//TODO IMPLEMENT ME

	}


	this.getAdvice = function(id){
		//TODO IMPLEMENT ME
	}

	this.editAdvice = function(id, text){
		//TODO IMPLEMENT ME
	}
}



module.exports = AdviceService;
