// import GameState from './js/gameState.js';

document.getElementById("guess-input").setAttribute("placeholder","Guess The Daily Card")
fetch("/daily", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
});
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
    buildGuessRow(ans);
    if(ans[0]==true){
        document.getElementById("guess-input").setAttribute("placeholder","Correct!")
    }
    else{
        document.getElementById("guess-input").setAttribute("placeholder","Incorrect, Guess Again.")
    }
    let gameState = parseInt(localStorage.getItem("gameState"));
    localStorage.setItem("gameState", (gameState + 1).toString());
    
})
document.getElementById("randomize").addEventListener("click", async (e) => {
    document.getElementById("game-container").innerHTML='';
    document.getElementById("guess-input").setAttribute("placeholder","Guess A Random Card")
    e.preventDefault();

     await fetch("/rand", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    });
    
    
})
document.getElementById("daily").addEventListener("click", async (e) => {
    document.getElementById("game-container").innerHTML='';
    document.getElementById("guess-input").setAttribute("placeholder","Guess The Daily Card")
    e.preventDefault();

     await fetch("/daily", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    });
    
    
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
    let myRow = document.createElement('ul')
    myRow.className = "row";

    for(let i = 1; i < 7; i++) {
        let thisSquare = document.createElement('li');
        myRow.appendChild(thisSquare);
        if(guess[i]===true){
            thisSquare.className='green'
        }
        if(guess[i]===false){
            thisSquare.className='red'
        }
        if(guess[i]===0){
            thisSquare.className='green'
        }
        if(guess[i]===-1){
            thisSquare.className='red'
            thisSquare.appendChild(document.createTextNode("More"))
        }
        if(guess[i]===1){
            thisSquare.className='red'
            thisSquare.appendChild(document.createTextNode("Less"))
        }
        
    }

    document.getElementById("game-container").appendChild(myRow);
}
