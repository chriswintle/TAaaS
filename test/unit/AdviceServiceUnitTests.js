var Q = require("q");

var chai = require('chai')
var spies = require('chai-spies');
chai.use(spies);
var assert = chai.assert;
var expect = chai.expect;

var AdviceService = require('../../services/AdviceService');
var service = new AdviceService();

var mongoose = require("mongoose");
var util = require("util");


describe('Unit - AdviceService', function() {
		
		

	describe('getAllAdvice()', function() {

		beforeEach(function(){
			service.getAdviceFromDatabase = function(){
				var deferred = Q.defer();
				var mockedAdvice = [{tip:"test1"}, {tip:"test2"}, {tip:"test3"}]
				deferred.resolve(mockedAdvice);
				return deferred.promise;
			}
		})


		it("should exist", function(){
			var result = service.getAllAdvice();
			assert(result != undefined);
		});

		it("should be an array", function(){
			return service.getAllAdvice().then(function(result){
				expect(util.isArray(result)).to.equal(true);
			})
		});

		it("should return some data in the array", function(){
			return service.getAllAdvice().then(function(result){
				expect(result.length).to.equal(3);
			})
		});
		it("should return an array of objects with 'tip' attributes", function(){
			return service.getAllAdvice().then(function(result){
				expect(result[0].tip, "tip should exist").to.not.equal(undefined);
			});
		});
		it("should return an array of objects with 'tip' attributes", function(){
			return service.getAllAdvice().then(function(result){
				expect(result[0].tip, "tip should exist").to.equal("test1");
				expect(result[1].tip, "tip should exist").to.equal("test2");
				expect(result[2].tip, "tip should exist").to.equal("test3");
			});
		});

		it("should call 'getAdviceFromDatabase'", function(){
			var spy = chai.spy.on(service, 'getAdviceFromDatabase');

			return service.getAllAdvice().then(function(result){
				expect(spy).to.have.been.called();
			})
		});

		it("should return an empty array when DB call fails", function(){

			service.getAdviceFromDatabase = function(){
				var deferred = Q.defer();
				var mockedAdvice = []
				deferred.resolve(null);
				return deferred.promise;
			}	


			return service.getAllAdvice().then(
				function(result){
					expect(result).to.equal(null);
				},
				function(errorResult){
					expect(util.isArray(errorResult)).to.equal(true);
					expect(errorResult.length).to.equal(0);
				}
			);
		});

	});

	describe("getRandomAdvice()", function(){

		beforeEach(function(){
			service.getAdviceFromDatabase = function(){
				var deferred = Q.defer();
				var mockedAdvice = [{tip:"test1"}, {tip:"test2"}, {tip:"test3"}]
				deferred.resolve(mockedAdvice);
				return deferred.promise;
			}

			service.getRandomIndex = function(max){
				return 2;
			}
		})
		
		it("should return something", function(){
			var result = service.getRandomAdvice();
			assert(result != undefined);
		})
		it("should return a promise", function(){
			return service.getRandomAdvice().then(function(result){
				expect(result).to.not.equal(undefined);
			});
		});

		it("should return an Object", function(){
			return service.getRandomAdvice().then(function(result){
				expect(util.isArray(result)).to.equal(false);
			})
		})

		it("should return an Object with a 'tip' attribute", function(){
			return service.getRandomAdvice().then(function(result){
				expect(result.tip).to.not.equal(undefined);
			})
		});

		// it("should call 'getAdviceFromDatabase'", function(){
		// 	var spy = chai.spy.on(service, 'getA345dviceFromDatabase');

		// 	return service.getRandomAdvice().then(function(result){
		// 		expect(spy).to.have.been.called();
		// 	})
		// });

		// it("should call 'getRandomIndex'", function(){
		// 	var spy = chai.spy.on(service, 'getRandomIndex');

		// 	return service.getRandomAdvice().then(function(result){
		// 		expect(spy).to.have.been.called();
		// 	})
		// });


		it("should return an object with a 'tip' attribute", function(){
			return service.getRandomAdvice().then(function(result){
				expect(result.tip).to.equal("test3")
			})
		})


	});

	describe("getRandomIndex", function(){
		var newService = new AdviceService();

		it("should return a number between 0 and a max", function(){
			var result = newService.getRandomIndex(1);
			assert(result >=0 );
			assert(result < 1 );
		});

	});
});


