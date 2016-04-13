var fs = require('fs');
var config = require('config');

var Advice = require("./schema/advice.js");
var Q = require("q");

var AdviceService = function(){

	this.addAdvice = function(text) {
		var deferred = Q.defer();

		var advice = new Advice({ tip: text });
		advice.save(function (err) {
		  if (err) {
		    deferred.reject(err);
		  } else {
		    deferred.resolve();
		  }
		});

		return deferred.promise;
	}

	this.getAllData = function(){
		var deferred = Q.defer();

		Advice.find(
			{},
			function(err, result){
				if(err){
					deferred.reject(err);
				}
				
				deferred.resolve(result) 
			}
		)

		return deferred.promise;
	}
	
	this.getRandomAdvice =  function(){
		var deferred = Q.defer();
		var service = this;
		
		this.getAllData().then(function(result){			
			var randomResult = result[service.getRandomIndex(result)];
			deferred.resolve(randomResult);		
		}).catch(function(err){
			deferred.reject("error")
		});
		return deferred.promise;
		
	}

	this.getRandomIndex = function(obj){
		var length = obj.length;
		var index = Math.floor(Math.random() * length);
		return index;

	}


	this.getAdvice = function(id){
		//TODO IMPLEMENT ME
	}

	this.editAdvice = function(id, text){
		//TODO IMPLEMENT ME
	}

}



module.exports = AdviceService;
