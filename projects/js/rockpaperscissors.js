'use strict';

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const playerScore = document.getElementById('score-user');
const computerScore = document.getElementById('score-computer');

let choice
let compchoice
let results


// scores
var userScore = 0
var compScore = 0


// scores

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

 choice = e.target.id;
 userChoiceDisplay.innerHTML = choice;
 generatecompchoice()

 getResults()
}))

function generatecompchoice(){
 const randomNumber = Math.floor(Math.random() * 3) // or use Math.floor(possibleChoice.length)

 if(randomNumber === 1){
  compchoice = 'rock'
 }else if(randomNumber === 2){
  compchoice = 'paper'
}else{
 compchoice = 'scissors'
}
computerChoiceDisplay.innerHTML = compchoice;
}

function getResults(){
 if(compchoice === choice){
  results = 'Draw'
 }
 else if(compchoice === 'rock' && choice === 'paper'){
  results = 'you win'
  userScore++;
 }
 else if(compchoice === 'rock'  && choice === 'scissors'){
  results = 'you lost' 
  compScore++;
 }
 else if(compchoice === 'paper'  && choice === 'scissors'){
  results = 'you win' 
  userScore++;
 }
 else if(compchoice === 'paper' && choice === 'rock'){
  results = 'you lose' 
  compScore++;
 }
 else if(compchoice === 'scissors' && choice === 'rock'){
  results = 'you win' 
  userScore++;
 }
 else if(compchoice === 'scissors' && choice === 'paper'){
  results = 'you lose'
  compScore++;
 }
 
 
 resultDisplay.innerHTML = results
 playerScore.innerHTML = userScore
 computerScore.innerHTML = compScore

 if(compScore == 5 || userScore == 5){
  alert('Great Game! Click Ok to play again')
  compScore = 0
  userScore = 0
 }
}
