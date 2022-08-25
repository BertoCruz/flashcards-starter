const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

    it.skip('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it.skip('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should store a user\'s guess to the question', function() {
        const card = new Card(1, 'Which would you use to return one single value?', ['filter', 'map', 'reduce'], 'reduce');
        const turn = new Turn('map', card);

        expect(turn).to.be.
    });

});
