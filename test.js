var assert = require('assert');
var home = require('./controllers/homeController.js');

describe('findLetter testing', function(){
    it ('should pass this test', function(){
        assert.equal(home.findLetter(95), 'Final Grade: A');
    })
    it ('should return "Invalid Grade"', function(){
        assert.equal(home.findLetter(101), 'Invalid Grade')
    })
    it ('should return "Invalid Grade"', function(){
        assert.equal(home.findLetter(-1), 'Invalid Grade')
    })
    it ('should pass this test', function(){
        assert.equal(home.findLetter(0), 'Final Grade: F')
    })
});

describe('find_Average testing', function(){
    it ('should pass this test', function(){
        assert.equal(home.find_Average(100,100,100,100,100), '100')
    })
    it ('should pass this test', function(){
        assert.equal(home.find_Average(0,0,0,0,0), '0')
    })
    it ('should pass this test', function(){
        assert.equal(home.find_Average(79, 96, 90, 80, 94), '87')
    })
    it ('should fail this test', function(){
        let result = home.find_Average(87, 97, 40, 'Hello', 93)
        assert.equal(result, NaN, 'Should not take in numbers outside the range 0 - 100')
    });
    it ('should fail this test', function(){
        assert.equal(home.find_Average(-1, -1, -1, -1, -1), '-1')
    })
})