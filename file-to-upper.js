'use strict';

const fs = require('fs');
const fsPromises = fs.promises;
const events = require('./event');


const alterFile = (file) => {
  fsPromises.readFile(file)
    .then(data => {
      events.emit('success', data);
      let text = data.toString().toUpperCase();
      fsPromises.writeFile( file, Buffer.from(text))
        .then( () => events.emit('saved', file))
        .catch( (error) => events.emit('error', error));
    })
    .catch( (error => events.emit('error', error)));
};

module.exports = alterFile;