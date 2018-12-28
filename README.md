![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Event Driven App

### Author: Lena eivy

### Links and Resources
* [repo](https://github.com/applena/06-event-driven-apps)
* [travis](https://travis-ci.com/applena/06-event-driven-apps.svg?branch=master)

### Modules
#### `event.js`
##### Exported Values and Methods

###### `events -> new instance of an eventEmiter`

#### `file-to-upper.js`
##### Exported Values and Methods

###### `alterFile(file) -> file path`
function that returns takes in a file path, reads the file, uppercases the content and saves it back to the same file name.

#### `logger.js`
##### Exported Values and Methods

###### `listeners -> object`
Listeners is an object that holds three methods. 
* saved - takes in a file and console.log the file name and saved
* success - takes in the data from the file that has been transformed to upper case and console.log that it was successfully read.
* errorHandler - takes in an error and sends that error to the console.

### Setup

#### Running the app
* `npm i`
* `node file-path`

#### Tests
* `npm run test` will run the unit tests
* I'm asserting the following:
  * that a valid file path was entered by the user
  * that a saved console message will appear in the console when the file is successfully saved
  * that a successfully read message will appear in the console when the file has been read

