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
  let seed= req.body.seed;
  return res.json(guess(playerGuess,seed));
});
app.post('/giveUp', (req, res) => {
  let seed= req.body.seed;
  let aCard =  cards[Math.round(((347*seed)+89-23*3/11))%111];
  console.log('Gave Up')
  return res.json(aCard.name);
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
function guess(player, seed){
    let pCard = cards.find((card) => card.name == player );
    if(pCard != null) {
      let aCard =  cards[Math.round(((347*seed)+89-23*3/11))%111];

      let mapping = ['Common','Rare','Epic','Legendary','Champion'];
      let done = pCard.name == aCard.name;
      let rare = 0;
      if(mapping.indexOf(pCard.rarity) > mapping.indexOf(aCard.rarity)){
        rare=1
      }
      if(mapping.indexOf(pCard.rarity) < mapping.indexOf(aCard.rarity)){
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
    } else {
      return "invalid guess";
    }

}

