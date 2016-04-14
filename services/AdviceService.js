var Q = require("q");

var AdviceService = function(){
	var config = require("../config/config");
	var Advice = require("./schema/advice.js")


	// this.addAdvice = function(text) {
	// 	//TODO - IMPLEMENT ME
	// }

	

	this.getAllAdvice = function(){
		var deferred = Q.defer();
		this.getAdviceFromDatabase().then(function(result){
			deferred.resolve(result);
		})
	
		return deferred.promise;
	}
	

	this.getAdviceFromDatabase = function(){
		

	}
	// this.getRandomAdvice =  function(){
	// 	//TODO IMPLEMENT ME
		
	// }


	// this.editAdvice = function(id, text){
	// 	//TODO IMPLEMENT ME
	// }
}



module.exports = AdviceService;
