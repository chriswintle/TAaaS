var assert = require('chai').assert;
var mockFS = require('mock-fs');
var AdviceService = require('../../services/AdviceService');

var Q = require("q");
var fs = require("fs");

var service = new AdviceService();

//process.env.NODE_ENV = 'test'

describe('Integration - AdviceService', function() {
	describe('getRandomAdvice()', function() {

		beforeEach(function(done) {
        	//clear down everything in the DB
        	service.addAdvice("one")
        	.then(function(result){
        		return service.addAdvice("two")
        		
        	})
     		.then(function(result){

     			return service.addAdvice("three")

         	}).then(function(result){
         		done();
         	})
        	.catch(function(err){
        		console.log("ERROR: ", err);
        		done()
        	})
    	});

		
	});
	
});


