import cardNames from "./cardNames.js";
// const aliases = {
//     "P.E.K.K.A.": ["Pekka"],
//     "Mini P.E.K.K.A": ["Mini PEKKA"],
//     "X-Bow": ["Xbow"],
//     "Royal Hogs": ["Pigs"],
//     "Skeleton Army": ["Skarmy"],
//     "Goblin Barrel": ["Gob Barrel"],
//     "Battle Ram": ["Ram"],
// }

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
    if(ans != "invalid guess") {
        buildGuessRow(userGuess, ans);
        if(ans[0]==true){
            document.getElementById("guess-input").setAttribute("placeholder","Correct!")
        }
        else{
            document.getElementById("guess-input").setAttribute("placeholder","Incorrect, Guess Again.")
        }
        // let gameState = parseInt(localStorage.getItem("gameState"));
        // localStorage.setItem("gameState", (gameState + 1).toString());
    }
})
document.getElementById("randomize").addEventListener("click", () => {
    let g=document.getElementById("game-container");
    g.innerHTML='';
    let options=["Card","Rarity","Elixir","Target","Type","Range","AOE"]
    for(let i=0;i<options.length;i++){
        let l=document.createElement("li");
        l.className="guessColumn";
        g.appendChild(l);
   let  d=document.createElement("p");
    d.className='key'
    d.appendChild(document.createTextNode(options[i]));
    g.children[i].appendChild(d);
    }
    document.getElementById("guess-input").setAttribute("placeholder","Guess A Random Card")
    seed =Math.floor(Math.random()*32498)+34/5-82


})
document.getElementById("daily").addEventListener("click",  () => {
    let g=document.getElementById("game-container");
    g.innerHTML=''
    let options=["Card","Rarity","Elixir","Target","Type","Range","AOE"]
    for(let i=0;i<options.length;i++){
        let l=document.createElement("li");
        l.className="guessColumn";
        g.appendChild(l);
   let  d=document.createElement("p");
    d.className='key'
    d.appendChild(document.createTextNode(options[i]));
    g.children[i].appendChild(d);
    }
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
    buildAutoComplete(inputElement);
});

/**
 * This method will construct an autocomplete pop-down menu under the provided Input Element
 * @param {HTMLElement} inputElement This is a <input> element with type:text
 */
function buildAutoComplete(inputElement) {
    const MAX_AUTOCOMPLETE_ELEMENTS = 5;

    let autcomepleteContainer = document.getElementById("autocomplete-container");

    // clear existing autocomplete
    closeAutocomplete(inputElement);

    if(inputElement.value != "") {
        // list of possible cards given what the user has typed
        let possibilities = [];

        // loop through every existing card
        cardNames.forEach((cardName) => {
            let validity = true;
            // loop through each character in the input. if it matches each char of the current card, then add it to the possibilities list.
            for(var i = 0; i < inputElement.value.length; i++) {
                if(cardName.toLocaleLowerCase().charAt(i) !== inputElement.value.toLocaleLowerCase().charAt(i)) {
                    validity = false;
                }
            }
            if(validity) {
                possibilities.push(cardName);
            }
        });

        // create autocomplete card for each possibility, and attach it to the autocomplete container.
        possibilities.forEach((possibility, index) => {
            if(index < MAX_AUTOCOMPLETE_ELEMENTS) {
                autcomepleteContainer.appendChild(buildAutoCompleteCard(possibility, inputElement));
            }
        });

        // create event handlers that will close the autocomplete if the user clicks off or presses escape
        let clickHandler = createCloseAutocompleteFunction(inputElement);
        let escapeHandler = createEscapeAutocompleteFunction(inputElement);
        document.addEventListener('click', clickHandler);
        inputElement.addEventListener('keydown', escapeHandler);
    }
}

/**
 * Returns a <div></div> element that will display the card's name, and will fill the input field when clicked.
 * @param {string} cardName name of the card to be displayed
 * @param {HTMLElement} inputElement inputElement that is being autofilled
 * @returns {HTMLElement}
 */
function buildAutoCompleteCard(cardName, inputElement) {

    let autocompleteCard = document.createElement('div');
    autocompleteCard.setAttribute('class','autocomplete-card');

    let autocompleteText = document.createElement('p');
    autocompleteText.innerText = cardName;
    autocompleteText.className = "autocomplete-text";

    autocompleteCard.appendChild(autocompleteText);

    autocompleteCard.addEventListener('click', (e) => {
        e.preventDefault();
        inputElement.value = cardName;
        closeAutocomplete(inputElement);
    });

    return autocompleteCard;
}

/**
 * This method will close the autocomplete of the inputElement
 * @param {HTMLElement} inputElement
 */
function closeAutocomplete(inputElement) {
    let autocompleteContainer = document.getElementById("autocomplete-container");
    while (autocompleteContainer.firstElementChild) {
        autocompleteContainer.removeChild(autocompleteContainer.firstElementChild);
    }

    let clickHandler = createCloseAutocompleteFunction(inputElement);
    let escapeHandler = createEscapeAutocompleteFunction(inputElement);
    document.removeEventListener('click',  clickHandler);
    inputElement.removeEventListener('keydown', escapeHandler);
}

function createCloseAutocompleteFunction(inputElement) {
    return function() {
        closeAutocomplete(inputElement);
    }
}

function escapeAutocomplete(event, inputElement) {
    if (event.code === "Escape") {
        closeAutocomplete(inputElement);
    }
}

function createEscapeAutocompleteFunction(event) {
    return function(event) {
        escapeAutocomplete(event, inputElement);
    }
}

function buildGuessRow(input, guess) {
    let g=document.getElementById("game-container");
    let cardIcon = document.createElement('img');
    cardIcon.className = "card-image";
    let formattedCardName = input.toLowerCase();
    formattedCardName = formattedCardName.replaceAll(/\s+/g,"-");
    let url = "https://cdn.royaleapi.com/static/img/cards-150/".concat(formattedCardName).concat(".png");
    cardIcon.src = url;

    g.children[0].appendChild(cardIcon);

    for(let i = 1; i < 7; i++) {
        let thisSquare = document.createElement('li');
        g.children[i].appendChild(thisSquare);
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

    //document.getElementById("game-container").appendChild(myRow);
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
