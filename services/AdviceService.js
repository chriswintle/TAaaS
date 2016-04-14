var Q = require("q");

var AdviceService = function(){
	var config = require("../config/config");
	var Advice = require("./schema/advice.js")


	// this.addAdvice = function(text) {
	// 	//TODO - IMPLEMENT ME
	// }


	this.getAdviceFromDatabase = function(){

	}

	this.getRandomIndex = function(max){

	}

	

	this.getAllAdvice = function(){
		var deferred = Q.defer();
		this.getAdviceFromDatabase().then(function(result){
			if(result == null){
				console.log("Error caught retrieving data from DB")
				deferred.reject([])
			}
			else {
				deferred.resolve(result);
			}
		})
	
		return deferred.promise;
	}
	
	this.getRandomAdvice =  function(){
		var deferred = Q.defer();
		var $this = this;
		
		this.getAdviceFromDatabase().then(
			function(result){
				var index = $this.getRandomIndex(result.length -1);
				var advice = result[index];
				deferred.resolve(advice);
			})
		
		return deferred.promise;
		
	}


	// this.editAdvice = function(id, text){
	// 	//TODO IMPLEMENT ME
	// }
}



module.exports = AdviceService;
