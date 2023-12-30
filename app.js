const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
import { cards } from "./cards.js";

app.get('/', (req, res) => {
  if(req.ip != "::1") {
    console.dir(req.ip);
  }
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

app.post('/guess', (req, res) => {

});

// serve css files, images, js
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
//how this works:
//you give 2 strings 
//player is the string for the player's guess's card name. 
//answer is the string for the name of the answer card.
//you get an array back in the following format:
//response[done,rare,elix,target,type,range,aoe]
//done is a true or false telling you if you are done
//rare is -1 for less, 0 for correct, 1 for larger
//elix has same format for rare
//target is either true or false for if you are correct
//type is the same as target
//range is the same as rare
//aoe is the same as target
function guess(player, answer){
    let pCard=cards.find((card)=>card.name==player);
    let aCard=cards.find((card)=>card.name==answer);
    let done=pCard.name==aCard.name;
    let rare=0;
    if(pCard.rarity>aCard.rarity){
      rare=1
    }
    if(pCard.rarity<aCard.rarity){
      rare=-1
    }
    let elix=0;
    if(pCard.elixir>aCard.elixir){
      elix=1
    }
    if(pCard.elixir<aCard.elixir){
      elix=-1
    }
    let target=pCard.target==aCard.target;
    let type=pCard.type==aCard.type;
    let range=0;
    if(pCard.range>aCard.range){
      range=1
    }
    if(pCard.range<aCard.range){
      range=-1
    }
    let aoe=pCard.aoe==aCard.aoe;
    return [done, rare, elix, target, type, range, aoe];

}
