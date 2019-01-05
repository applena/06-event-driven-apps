'use strict';

require('./logger');
let file = require('./file-to-upper');

let userFile = process.argv.slice(2).shift();
file.alterFile(userFile);
