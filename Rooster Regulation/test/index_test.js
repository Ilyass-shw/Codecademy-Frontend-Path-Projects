const assert = require('assert');
let Rooster = require('../index.js');

describe('Rooster', ()=>{
    describe('.annouceDawn', ()=>{
        it('returns a rooster call', ()=>{
            // Define expected output
            const expected = 'cock-a-doodle-doo!';
            
 
            // Call Rooster.announceDawn and store result in variable
            const actualCall = Rooster.announceDawn();
 
            // Use an assert method to compare actual and expected result
            assert.equal(actualCall, expected);

        })
    })
        
    describe('.timeAtDawn', ()=>{
        it('returns its argument as a string', ()=>{
            // Define expected output
            const expected = '20';
            
 
            // Call Rooster.announceDawn and store result in variable
            const actualCall = Rooster.timeAtDawn(20);
 
            // Use an assert method to compare actual and expected result
            assert.strictEqual(actualCall, expected);

        })
    })


})