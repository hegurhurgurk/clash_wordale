const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


const cards = require("./cards.js");
app.use(express.json())

app.get('/', (req, res) => {
  if(req.ip != "::1") {
    console.dir(req.ip);
  }
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

app.post('/guess', (req, res) => {
  let playerGuess = req.body.guess;
  console.log(playerGuess);
  return res.json(guess(playerGuess));
});

// serve css files, images, js
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})


//how this works:
//you give 1 string
//player is the string for the player's guess's card name.
//you get an array back in the following format:
//response[done,rare,elix,target,type,range,aoe]
//done is a true or false telling you if you are done
//rare is -1 for less, 0 for correct, 1 for larger
//elix has same format for rare
//target is either true or false for if you are correct
//type is the same as target
//range is the same as rare
//aoe is the same as target
function guess(player){
    console.log(player);
    let pCard = cards.find((card) => card.name == player );
    let aCard = daily();

    console.log(aCard.name + "\n\n"  + pCard);

    let done = pCard.name == aCard.name;
    let rare = 0;
    if(pCard.rarity > aCard.rarity){
      rare=1
    }
    if(pCard.rarity < aCard.rarity){
      rare=-1
    }
    let elix=0;
    if(pCard.elixir > aCard.elixir){
      elix=1
    }
    if(pCard.elixir < aCard.elixir){
      elix=-1
    }
    let target = pCard.target == aCard.target;
    let type= pCard.type == aCard.type;
    let range = 0;
    if(pCard.range>aCard.range){
      range=1
    }
    if(pCard.range<aCard.range){
      range=-1
    }
    let aoe=pCard.aoe==aCard.aoe;
    return [done, rare, elix, target, type, range, aoe];

}
//gets you the daily card
//makes a "random" number each day
//randomness is basically putting the number of days since jan 1st 1970 into an equation
//%by 111(number of cards)
//get the card at that index
function daily(){
  let now = Math.round(Date.now() /(1000*60*60*24));
  let number = Math.round(((347*now)+89-23*3/11))%111;
  return cards[number];
}

//gives you a random card
//will need to save this, as each call will get you a new card
//use math.rand to get random one
function randomCard(){
return cards[Math.floor(Math.random()*111)]
}
