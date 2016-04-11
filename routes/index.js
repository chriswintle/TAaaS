var express = require('express');
var router = express.Router();

var AS = require("../services/AdviceService");
var adviceService = new AS();


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



module.exports = router;
