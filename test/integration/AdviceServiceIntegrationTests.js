var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;
var mockFS = require('mock-fs');
var AdviceService = require('../../services/AdviceService');

var Q = require("q");
var fs = require("fs");
var util = require("util");

var service = new AdviceService();
var mongoose = require("mongoose")

var Advice = require("../../services/schema/advice.js")


//process.env.NODE_ENV = 'test'

describe('Integration - AdviceService', function() {
	describe('getAdviceFromDatabase()', function() {

		beforeEach(function(done) {
        	//clear down everything in the DB

            var advice1 = new Advice({tip:"test1"});
            var advice2 = new Advice({tip:"test2"});
            var advice3 = new Advice({tip:"test3"});

            advice1.save(function(err, result){
                advice2.save(function(err, result){
                    advice3.save(function(err, result){
                        //console.log("Data Bootstrapped");
                         Advice.find({}, function(err, result){
                            expect(result.length).to.equal(3);
                            done();
                        })
                        
                    })
                })
            })
        	
    	});

        afterEach(function(done){
            mongoose.connection.db.dropCollection('advice', function(err, result) {done()});
        });

        it("should return an array of advice entries", function(){
            
            return service.getAdviceFromDatabase().then(function(result){
                expect(result.length).to.equal(3);
            })

        })


        it("should return an empty array if nothing in the DB", function(done){
            mongoose.connection.db.dropCollection('advice', function(err, result) {done()});
            return service.getAdviceFromDatabase().then(
                function(result){
                expect(util.isArray(result)).to.equal(true);
                expect(result.length).to.equal(0);
            })

        })


		
	});

    describe("getRandomAdvice()", function(){

        beforeEach(function(done) {
            //clear down everything in the DB

            var advice1 = new Advice({tip:"test1"});
            var advice2 = new Advice({tip:"test2"});
            var advice3 = new Advice({tip:"test3"});

            advice1.save(function(err, result){
                advice2.save(function(err, result){
                    advice3.save(function(err, result){
                        //console.log("Data Bootstrapped");
                         Advice.find({}, function(err, result){
                            expect(result.length).to.equal(3);
                            done();
                        })
                        
                    })
                })
            })
            
        });

        afterEach(function(done){
            mongoose.connection.db.dropCollection('advice', function(err, result) {done()});
        });


        it("Should return an object with a tip and id attribute", function(){
            return service.getRandomAdvice().then(function(result){
                expect(result._id).to.not.equal(undefined);
                expect(result.tip).to.not.equal(undefined);
            })
        })

    })
	
});


