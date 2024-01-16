// import GameState from './js/gameState.js';


document.getElementById("game-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    let inputElement = document.getElementById("guess-input");

    let data = {
        "guess": inputElement.value,
    }
    inputElement.value = "";
    const response = await fetch("/guess", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    let ans = await response.json();
    console.log(ans);

    let gameState = parseInt(localStorage.getItem("gameState"));
    localStorage.setItem("gameState", (gameState + 1).toString());
})

// store the current gameplay day in the user's browser
let currentDate = new Date();

if(localStorage.getItem("currentDate") != currentDate.getDate()) {
    localStorage.setItem("gameState", "0");
}

localStorage.setItem("currentDate", currentDate.getDate());


let inputElement = document.getElementById("guess-input");
inputElement.addEventListener('input', (e) => {
    e.preventDefault();
    // console.log(`value: ${inputElement.value}`);
    // inputElement.value = inputElement.value.toUpperCase();
});

function buildAutoComplete() {

}

function buildGuessRow(guess) {
    let myRow = document.createElement('div')
    myRow.className = "row";

    for(let i = 0; i < 6; i++) {
        let thisSquare = document.createElement('div');
        thisSquare.className = "box";
        myRow.appendChild(thisSquare);
    }

    document.getElementById("game-container")
}
