
var express = require('express');
var router = express.Router();

var AdviceService = require("../services/AdviceService");
var adviceService = new AdviceService();




router.get('/random', function(req, res, next) {
	console.log("RANDOM")
  adviceService.getRandomAdvice().then(function(result){
  	console.log("SENDING ")
  		res.send(result);
  })
  
});

router.get('/:id', function(req, res, next) {
	console.log("GET ID")
  adviceService.getAdvice(req.params.id).then(function(result){
  	console.log("SENING")
  	res.send(result);
  }); 
  
});

router.get('/', function(req, res, next) {
	console.log("INDEX")
  adviceService.getAllAdvice().then(function(result){
  		res.send(result);
  },
  function(err){
  	console.log("ERR: " + err)
  })
  .catch(function(err){
  	console.log("ERROR CAUGHT: ", err)
  }); 
  
});

module.exports = router;
