var Q = require("q");

var AdviceService = function(){
	var config = require("../config/config");
	var Advice = require("./schema/advice.js")


	// this.addAdvice = function(text) {
	// 	//TODO - IMPLEMENT ME
	// }


	this.getAdviceFromDatabase = function(){
		var deferred = Q.defer();
		Advice.find({}, function(err, result){
			if(err){
				console.log("ERROR ON GET: "+ err)
				deferred.reject([]);
			}
			console.log(result)
			deferred.resolve(result);
		})
		return deferred.promise;

	}

	this.getRandomIndex = function(max){
		return Math.floor(Math.random() * max);
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
