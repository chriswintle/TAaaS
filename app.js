var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require("fs");

var routes = require('./routes/index');


var AdviceService = require("./services/AdviceService")

var service = new AdviceService();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


function bootstrapData(){
  service.getAllAdvice().then(function(result){
    if(!result || result.length < 1){
      console.log("BOOSTRAPPING DATA")
      var obj = JSON.parse(fs.readFileSync('./data/advice.json', 'utf8')).advice;

      for (var i = obj.length - 1; i >= 0; i--) {
        var result = obj[i];
        console.log("ADDING ITEM");
        service.addAdvice(result.tip);
      }
    }
  })
}
bootstrapData();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}

app.listen(3001, function () {
  console.log('App Listening on port 3001!');
});


module.exports = app;
