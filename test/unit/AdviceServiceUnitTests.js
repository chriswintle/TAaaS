var assert = require('chai').assert;
var mockFS = require('mock-fs');
var AdviceService = require('../../services/AdviceService');
var service = new AdviceService();


describe('AdviceService', function() {
	describe('getRandomIndex()', function() {

		it("should return a number between 0 and 3 where the array is length 4", function(){
			//given
			var array = [1,2,3,4];

			//when
			var result = service.getRandomIndex(array)

			//then
			assert(result >= 0, "result should be 0 or greater")
			assert(result < 4, "result should be less than 4")

		});


	});


	describe("getAdvice()", function(){

		it("should return a random entry from advice json", function(){
			//given

			mockFS({
			  './data/advice.json': new Buffer(
			  	JSON.stringify({"advice":
			  		[
				  		{"tip":"test1"}, 
				  		{"tip":"test2"}, 
				  		{"tip":"test3"}
			  		]
			 	 })
			  	),
			});

			service.getRandomIndex = function(){
				return 1;
			}

			//when
			var result = service.getRandomAdvice();

			//then
			assert(result.tip == "test2", "should return second entry in mocked array ")
		})
	})
});