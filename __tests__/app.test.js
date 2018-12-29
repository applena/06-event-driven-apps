'use strict';

let listener = require('../logger.js');
let file = require('../file-to-upper');

jest.mock('fs');


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
    expect(consoleSpy).toHaveBeenCalledWith("successfully read");
  })

  it('requires a file name to read', () => {
    expect(()=>{
      file.alterFile();
    }).toThrow('you must enter a file path');
  })

  it('can uppercase a buffer', () => {
    const str = 'test words';
    const STR = 'TEST WORDS';
    const b = Buffer.from(str);
    const B = Buffer.from(STR);
    expect(file.convertBuffer(b)).toEqual(B);
  })

  afterAll(() => {
    errorHandlerSpy.mockRestore();
    successSpy.mockRestore();
    savedSpy.mockRestore();
    errorSpy.mockRestore();
    consoleSpy.mockRestore();
  });

})
