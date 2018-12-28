'use strict';

const events = require('./event.js');
const listeners = {
  saved:function(file){
    console.log(`${file} saved`);
  },

  errorHandler: function(error){
    console.log(error);
  },

  success: function (data){
    console.log('successfully read ', data);
  }
}

events.on('error', listeners.errorHandler);
events.on('saved', listeners.saved);
events.on('success', listeners.success);


module.exports = listeners;