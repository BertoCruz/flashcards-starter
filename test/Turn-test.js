const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

    let card, turn1, turn2;

    beforeEach(function() {

        card = new Card(1, 'Which would you use to return one single value?', ['filter', 'map', 'reduce'], 'reduce');
        turn1 = new Turn('map', card);
        turn2 = new Turn('reduce', card);
    });

    it('should be a function', function() {

        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {

        expect(turn1).to.be.an.instanceOf(Turn);
    });

    it('should store a user\'s guess to the question', function() {

        expect(turn1.userGuess).to.equal('map');
    });

    it('should store an instance of Card', function() {

        expect(turn1.card).to.be.an.instanceOf(Card);
    })

    it('Should return the user\'s guess', function() {

        const guess1 = turn1.returnGuess();
        const guess2 = turn2.returnGuess();

        expect(guess1).to.equal('map');
        expect(guess2).to.equal('reduce');
    })

    it('Should return the card', function() {

        const cardHolder1 = turn1.returnCard();
        const cardHolder2 = turn2.returnCard();

        expect(cardHolder1).to.equal(card);
        expect(cardHolder2).to.equal(card);
    })

    it('should evaluate guess', function() {
        
        const guess1 = turn1.evaluateGuess();
        const guess2 = turn2.evaluateGuess();

        expect(guess1).to.equal(false);
        expect(guess2).to.equal(true);
    });

    it('should give feedback based on user\'s guess', function() {
        
        const guess1 = turn1.giveFeedback();
        const guess2 = turn2.giveFeedback();

        expect(guess1).to.equal('incorrect!');
        expect(guess2).to.equal('correct!');
    });

});
