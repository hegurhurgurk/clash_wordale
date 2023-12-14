import { cards } from "./cards.js"

// welcome to sort.js!
// here's how to use this:
// 1. open a terminal in the project directory
// 2. run this command: 'node sort.js'

// this is a classic atkinson quicksort implemented in js >:)
function quicksort(cardsArray) {
    if(cardsArray.length === 0) return [];

    var above = quicksort(cardsArray.filter((card) => { return card.name < cardsArray[0].name}));
    var below = quicksort(cardsArray.filter((card) => { return card.name > cardsArray[0].name}));

    return above.concat([cardsArray[0]]).concat(below);
}

// rn this prints out the sorted list to the terminal.
// one time i ran 'node sort.js > cards.txt' to put the output into a text file.
console.log(quicksort(cards));

