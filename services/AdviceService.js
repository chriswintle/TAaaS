var fs = require('fs');

var AdviceService = function(){
	
	this.getRandomAdvice =  function(){
		console.log("Random");

		var obj;
		var obj = JSON.parse(fs.readFileSync('./data/advice.json', 'utf8')).advice;

		var result = obj[this.getRandomIndex(obj)];
		return result		
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

}



module.exports = AdviceService;
