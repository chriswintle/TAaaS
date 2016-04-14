var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;
var mockFS = require('mock-fs');
var AdviceService = require('../../services/AdviceService');

var Q = require("q");
var fs = require("fs");

var service = new AdviceService();
var mongoose = require("mongoose")

var Advice = require("../../services/schema/advice.js")


//process.env.NODE_ENV = 'test'

describe('Integration - AdviceService', function() {
	describe('getRandomAdvice()', function() {

		// beforeEach(function(done) {
  //       	//clear down everything in the DB

  //           var advice1 = new Advice({tip:"test1"});
  //           var advice2 = new Advice({tip:"test2"});
  //           var advice3 = new Advice({tip:"test3"});

  //           advice1.save(function(err, result){
  //               advice2.save(function(err, result){
  //                   advice3.save(function(err, result){
  //                       //console.log("Data Bootstrapped");
  //                        Advice.find({}, function(err, result){
  //                           expect(result.length).to.equal(3);
  //                           done();
  //                       })
                        
  //                   })
  //               })
  //           })
        	
  //   	});

  //       afterEach(function(done){
  //           mongoose.connection.db.dropCollection('advice', function(err, result) {done()});
  //       });

        // it("should do a thing", function(){
        //     assert(1 == 2, "testing stuff!")
            

        // })

		
	});
	
});


