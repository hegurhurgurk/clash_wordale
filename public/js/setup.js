import GameState from './js/gameState.js';


document.getElementById("game-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    let inputElement = document.getElementById("guess-input");

    inputElement.value = "";
    data = {
        "guess": inputElement.value
    }
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

// store the current day in the user's browser
let currentDate = new Date();

if(localStorage.getItem("currentDate") != currentDate.getDate()) {
    localStorage.setItem("gameState", "0");
}

localStorage.setItem("currentDate", currentDate.getDate());
