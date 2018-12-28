'use strict';

let logger = require('../logger.js');
let alterFile = require('../file-to-upper');


describe('reads a file and changes it to upper case then writes it to a new file', () => {

  let errorHandlerSpy;
  let savedSpy;
  let successSpy;

  beforeAll(() => {
    errorHandlerSpy = jest.spyOn(logger, 'errorHandler');
    successSpy = jest.spyOn(logger, 'success');
    savedSpy = jest.spyOn(logger, 'saved');
  });

  //happy path
  it('reads a file', () => {
    alterFile(__dirname+'/test.file.txt');
    expect(successSpy).toHaveBeenCalled();
  })

  it('changes a file to upper case', () => {
    
  })

  it('writes a file', () => {
    
  })

  it('requires a file name to read', () => {
    
  })

  afterAll(() => {
    errorHandlerSpy.mockRestore();
    successSpy.mockRestore();
    savedSpy.mockRestore();
  });

})

// describe('foobar', () => {
//   let fooSpy;
//   let barSpy;

//   beforeAll(() => {
//     // main.foo === foo
//     // main.bar === bar
//     fooSpy = jest.spyOn(main, 'foo');
//     barSpy = jest.spyOn(main, 'bar');
//   });

//   it('calls `foo` and `bar`', () => {
//     expect(fooSpy).toHaveBeenCalled();
//     expect(barSpy).toHaveBeenCalled();
//   });

//   afterAll(() => {
//     // fooSpy.mockReset();
//     // barSpy.mockReset();
//     fooSpy.mockRestore();
//     barSpy.mockRestore();
//   });
// });