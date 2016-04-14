var chai = require('chai')
var spies = require('chai-spies');
chai.use(spies);
var assert = chai.assert;
var expect = chai.except;


var fs = require("fs");
var AdviceService = require('../../services/AdviceService');
var service = new AdviceService();
var Q = require("q");


describe('Unit - AdviceService', function() {
	describe('addAdvice()', function() {

		it("should do something", function(){
			//given

			//when

			//then

		});


	});
});
