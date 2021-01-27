var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
      it('will test if the output of 5! is equal to 120',()=>{
          // setup
          const expectedValue = 120;
          const inputValue = 5;

          //exercice
          const result = Calculate.factorial(inputValue);

          //verification
          assert.equal(result, expectedValue);
      })
        it('will test if the output of 3! is equal to 6',()=>{
          // setup
          const expectedValue = 6;
          const inputValue = 3;

          //exercice
          const result = Calculate.factorial(inputValue);

          //verification
          assert.equal(result, expectedValue);
      })
        it('will test if the output of 0! is equal to 1',()=>{
          // setup
          const expectedValue = 1;
          const inputValue = 0;

          //exercice
          const result = Calculate.factorial(inputValue);

          //verification
          assert.equal(result, expectedValue);
      })
  });
});