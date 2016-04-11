var assert = require('chai').assert;
var mockFS = require('mock-fs');
var AdviceService = require('../../services/AdviceService');
var service = new AdviceService();


describe('AdviceService', function() {
	describe('getAdvice()', function() {

		it("should return a random entry from available advice", function(){
			//given
			
			//when
			var result = service.getAdvice();

			//then
			assert(result.tip != undefined)

		});
	});
	
});
