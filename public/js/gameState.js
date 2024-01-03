class GameState {
    constructor() {
        this.num_guesses = 0;
        this.boardState= [];
    }

    toString() {
        return this.num_guesses.toString() + "\n" + this.boardState;
    }

    addGuess() {
        this.num_guesses += 1;
    }
}

export default GameState;
