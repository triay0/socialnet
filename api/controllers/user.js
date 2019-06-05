'use strict'

var User = require('../models/user');

function home(req, res){
  res.status(200).send({message: 'asfdgg'});
}

module.exports = {
  home
}
