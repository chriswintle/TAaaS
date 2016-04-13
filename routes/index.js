module.exports = function(config){
	var express = require('express');
	var router = express.Router();

	var AdviceService = require("../services/AdviceService");
	var adviceService = new AdviceService();


	router.get('/', function(req, res, next) {
	  var advice = adviceService.getAllAdvice(); 
	  res.send(advice);
	});

	router.get('/random', function(req, res, next) {
	  var advice = adviceService.getRandomAdvice(); 
	  res.send(advice);
	});

	router.get('/:id', function(req, res, next) {
	  var advice = adviceService.getAdvice(req.params.id); 
	  res.send(advice);
	});
	module.router = router;
}
