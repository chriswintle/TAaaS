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

		service.getAdviceFromDatabase = function(){
			var deferred = Q.defer();
			var mockedAdvice = [{tip:"test1"}, {tip:"test2"}, {tip:"test3"}]
			deferred.resolve(mockedAdvice);
			return deferred;
		}


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
			});
		});

		it("should call 'getAdviceFromDatabase'", function(){
			var spy = chai.spy.on(service, 'getAdviceFromDatabase');

			return service.getAllAdvice().then(function(result){
				expect(spy).to.have.been.called();
			})
		})

	});
});


function addAdviceToDatabase(text){
	var deferred = Q.defer();


}
