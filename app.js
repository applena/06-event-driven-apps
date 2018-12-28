'use strict';

require('./logger');
let alterFile = require('./file-to-upper');

let file = process.argv.slice(2).shift();
alterFile(file);
