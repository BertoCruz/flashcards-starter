class Turn {
    constructor(userGuess, cardObj) {
        this.userGuess = userGuess;
        this.card = cardObj;
    }

    returnGuess = () => {
        return this.userGuess;
    }

    returnCard = () => {
        console.log(this.card);
        return this.card;
    }

    evaluateGuess = () => {
        return this.userGuess === this.card.correctAnswer;
    }

    giveFeedback = () =>{
        if (this.evaluateGuess()) {
            return 'correct!';
        } else return 'incorrect!';
    }
}

module.exports = Turn;