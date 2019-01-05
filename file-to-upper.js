'use strict';
const util = require('util');
const events = require('./event');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const file = module.exports = exports = {};

file.loadFile = (file) => {
  if(!file){throw 'you must enter a file path';}
  return readFile(file);
};

file.saveFile = (file, buffer) => writeFile(file, buffer);

file.convertBuffer = buffer => Buffer.from(buffer.toString().trim().toUpperCase());

file.alterFile = incomingFile => 
  file.loadFile(incomingFile)
    .then( contents => file.convertBuffer(contents))
    .then( buffer => file.saveFile(incomingFile, buffer))
    .then( () => {events.emit('file-save', incomingFile); return true;})
    .catch( error => events.emit('file-error', error));

