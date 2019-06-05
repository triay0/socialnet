'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//load routes
var user_routes = require('./routes/user');

//load middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//descriptors

//routes
app.use('/api', user_routes);

//export
module.exports = app;
