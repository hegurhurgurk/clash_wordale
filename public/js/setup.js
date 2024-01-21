// import GameState from './js/gameState.js';
let seed = Math.round(Date.now() /(1000*60*60*24));
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
    let userGuess = inputElement.value;
    let data = {
        "guess": userGuess,
        "seed": seed,
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
    buildGuessRow(userGuess, ans);
    if(ans[0]==true){
        document.getElementById("guess-input").setAttribute("placeholder","Correct!")
    }
    else{
        document.getElementById("guess-input").setAttribute("placeholder","Incorrect, Guess Again.")
    }
    let gameState = parseInt(localStorage.getItem("gameState"));
    localStorage.setItem("gameState", (gameState + 1).toString());

})
document.getElementById("randomize").addEventListener("click", () => {
    let g=document.getElementById("game-container");
    g.innerHTML='';
   let d=document.createElement("p");
    d.className='key';
    d.appendChild(document.createTextNode("card     | rarity | elixir | target | type | range | aoe"))
    g.appendChild(d);
    document.getElementById("guess-input").setAttribute("placeholder","Guess A Random Card")
    seed =Math.floor(Math.random()*32498)+34/5-82


})
document.getElementById("daily").addEventListener("click",  () => {
    let g=document.getElementById("game-container");
    g.innerHTML=''
   let  d=document.createElement("p");
    d.className='key'
    d.appendChild(document.createTextNode("card     | rarity | elixir | target | type | range | aoe"))
    g.appendChild(d)
    document.getElementById("guess-input").setAttribute("placeholder","Guess The Daily Card")
    seed = Math.round(Date.now() /(1000*60*60*24));


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
    buildAutoComplete();
});

function buildAutoComplete() {
    const MAX_AUTOCOMPLETE_ELEMENTS = 5;

    let autcomepleteContainer = document.getElementById("autocomplete-container");

    // clear all child nodes
    while (autcomepleteContainer.firstElementChild) {
        autcomepleteContainer.removeChild(autcomepleteContainer.firstElementChild);
    }

    for(var i = 0; i < MAX_AUTOCOMPLETE_ELEMENTS; i++) {
        let autcompleteCard = document.createElement('div');
        autcompleteCard.setAttribute('class','autocomplete-card');
        autcomepleteContainer.appendChild(autcompleteCard);
    }
}

function buildGuessRow(input, guess) {
    let myRow = document.createElement('ul')
    myRow.className = "row";

    let cardIcon = document.createElement('img');
    cardIcon.className = "card-image";
    let formattedCardName = input.toLowerCase();
    formattedCardName = formattedCardName.replaceAll(/\s+/g,"-");

    let url = "https://cdn.royaleapi.com/static/img/cards-150/".concat(formattedCardName).concat(".png");
    cardIcon.src = url;

    myRow.appendChild(cardIcon);

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
            thisSquare.appendChild(buildUpArrowIconElement());
        }
        if(guess[i]===1){
            thisSquare.className='red';
            thisSquare.appendChild(buildDownArrowIconElement());
        }

    }

    document.getElementById("game-container").appendChild(myRow);
}

function buildUpArrowIconElement() {
    let icon = document.createElement('img');
    icon.className = "icon";
    icon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABX0lEQVR4nO2XMW6DMBhGPwspR2jvgrhH1YWFwgBCHVrlCO150iPAPWBpOnSCoUoW7MrUSBnaBnDwb1o/yQpJJPu9/CgSgONvcgvgHQBXS17fYCU8ABByeZ7Xr+G9+s5q7gfZMAxF27aiaZr+Wn7GGJOvj7CUTN0uIooi0XWdGOCcizRNrY7IfpJfQ0R2Tt7miGysvI0R+VT5XyK2xuUZY7Pkv4vA19quRp4yIr+UPEVEfml5kxGLyZuIWFx+yYhk2CxJkv6ApeGc92ed/MXe6QR8yI3iODYiPyDPkmeqH086zKbfpK5rYZqqqk5vJb2AcysIgsmCvu+P2ls34DD2kKlMkD/oBOwsCNjpBFwDeAFwJAg4KvkrLIxuADkugBo3AWrcBKhxE6DGTYAaNwFq3ASocROwYgJlWY5+mCmKwr4HGsxf5LxpyO9hAc8aAU+wgI2K2E8Qf1XyG2p5x7/nE+AwPrdwDPHzAAAAAElFTkSuQmCC";
    return icon;
}

function buildDownArrowIconElement() {
    let icon = document.createElement('img');
    icon.className = "icon";
    icon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQElEQVR4nO2YzWqEMBRGP9+nTJftQjftc7hRdOHjdZ6hLfQhdNkf0M3QTcGbkuCAlKaoMbmZcg8EBCE5hzuLiYAgsPMEQG1cj4gA5bjYMSJrkYAdkQlwIxPgRibAjUyAG5kANzIBbmQC3MgEuJEJ+OQA4GPJ5dzhTqz+WO8ArlwC3pYclGXZ6oA0TZdGvLoEmE26rlOhadt2ly8XZoOqqhQRBZMnInPmHgFf503qug4SQUTmLH1mkiRqctjMy/z3WJalGsfRq3zTNHN5vZ5dAm4BfIaIoN/l9dk3cCQDcPIZQXb5e1d57xEUQN5bBAWUt0YURbEpgkN+twhOeeeIGOQ3R8QkvzoiRvnFETHLWyPyPFfDMKi+781zzPLWCC08k45a3hpxSfJn7n7+AZzJ63cXwTWAI4B+Wg/T/Vr4d3wDfyc9KaOsuJkAAAAASUVORK5CYII=";
    return icon;
}

document.getElementById("help-icon").addEventListener('click', (e) => {
    e.preventDefault();
    toggleRules();
})

function toggleRules() {
    if(document.getElementById("rules-title").style.visibility == 'hidden') {
        document.getElementById("rules-title").style.visibility = 'visible';
        document.getElementById("rules-content").style.visibility = 'visible';
    } else {
        document.getElementById("rules-title").style.visibility = 'hidden';
        document.getElementById("rules-content").style.visibility = 'hidden';
    }
}
