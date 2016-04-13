var fs = require('fs');
var config = require('config');

var Advice = require("./schema/advice.js");
var Q = require("q");

var AdviceService = function(){

	this.addData = function(text) {
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

	this.getData = function(){
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

		//return JSON.parse(fs.readFileSync('./data/advice.json', 'utf8')).advice;
	}
	
	this.getRandomAdvice =  function(){
		var deferred = Q.defer();
		var service = this;
		
		this.getData().then(function(result){			
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

	this.getAllAdvice = function(){
		//TODO IMPLEMENT ME
	}

	this.getAdvice = function(index){
		//TODO IMPLEMENT ME
	}

	this.addAdvice = function(text){

	}

}



module.exports = AdviceService;
