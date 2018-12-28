'use strict';

let listener = require('../logger.js');
let alterFile = require('../file-to-upper');


describe('reads a file and changes it to upper case then writes it to a new file', () => {

  let errorHandlerSpy;
  let savedSpy;
  let successSpy;
  let consoleSpy;
  let errorSpy;


  
  beforeAll(() => {
    errorSpy = jest.spyOn(console, 'error');
    consoleSpy = jest.spyOn(console, 'log');
    errorHandlerSpy = jest.spyOn(listener, 'errorHandler');
    successSpy = jest.spyOn(listener, 'success');
    savedSpy = jest.spyOn(listener, 'saved');
  });

  //happy path
  it('reads a file', () => {
    listener.success(__dirname+'/test.file.txt');
    expect(successSpy).resolves;
  })

  it('calls the saved function when it successfully saves the file', () => {
    listener.saved(__dirname+'/test.file.txt');
    expect(savedSpy).toBeCalled();
  })

  it('calls the success function when it successfully reads the file', () => {
    listener.success(__dirname+'/test.file.txt');
    expect(successSpy).toBeCalled();
  })

  it('calls the errorHandler function when there is an error', () => {
    listener.errorHandler(__dirname+'/test.file.txt');
    expect(errorHandlerSpy).toBeCalled();
  })

  it('console logs success when a file is saved', () => {
    listener.success(__dirname+'/test.file.txt');
    expect(consoleSpy).resolves;
  })

  it('requires a file name to read', () => {
    expect(()=>{
      alterFile();
    }).toThrow('you must enter a file path');
  })

  afterAll(() => {
    errorHandlerSpy.mockRestore();
    successSpy.mockRestore();
    savedSpy.mockRestore();
    errorSpy.mockRestore();
    consoleSpy.mockRestore();
  });

})
