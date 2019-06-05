'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = Schema({
  text: String,
  created_at: String,
  receiver: {
    type: Schema.ObjectId,
    ref 'User'
  },
  emmitter: {
    type: Schema.ObjectId,
    ref 'User'
  },

});

module.exports = mongoose.model('Message', MessageSchema);
