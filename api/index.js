'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean_social', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Conection successful.');

    //Create server
    app.listen(port,()=>{
      console.log('Server running in http://localhost:'+port);
    })
  })
  .catch(err => console.log(err));
