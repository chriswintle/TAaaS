var assert = require('chai').assert;
var mockFS = require('mock-fs');
var AdviceService = require('../../services/AdviceService');
var service = new AdviceService();

var Q = require("q");

var Advice = require("../../services/schema/advice.js")


describe('AdviceService', function() {
	describe('getAdvice()', function() {

		beforeEach(function(done) {
        	//clear down everything in the DB
        	service.addAdvice("one")
        	.then(function(result){
        		return service.addAdvice("two")
        	})
        	.then(function(result){
        		done();
				return service.addAdvice("three")

        	})
    	});

		it("should return a random entry from available advice", function(done){
			//given
			
			//when
			service.getRandomAdvice().then(function(result){
				
				//then
				var possibleOptions = ["one", "two", "three"];
				assert(possibleOptions.indexOf(result.tip) > -1)
				done()
			}, function(err){
				fail("error thrown in getRandomAdvice(): "+err)
				done()
			}).catch(function(err){
				fail("Exception caught in test: " + err);
				done();
			});			

		});
	});
	
});



function addEntry(text){
	var deferred = Q.defer();

	var adviceItem = new Advice({tip:text});

	adviceItem.save(function(err, item){
		if(err){
			deferred.reject(err)
		}
		deferred.resolve(item);
	});
	return deferred.promise;
}

