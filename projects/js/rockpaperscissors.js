'use strict';

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const playerScore = document.getElementById('score-user');
const computerScore = document.getElementById('score-computer');
const drawScore = document.getElementById('draws');
const totalWins = document.getElementById('wins');
const totalLosses = document.getElementById('gamesLost');
const stopMusic = document.getElementById('stop-music');
const playMusic = document.getElementById('play-music');

let choice
let compchoice
let results


// scores
var userScore = 0
var compScore = 0
var draws = 0
var winScore = 0
var lostScore = 0

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
  draws++;
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
 
//  insertions
 resultDisplay.innerHTML = results
 playerScore.innerHTML = userScore
 computerScore.innerHTML = compScore
 drawScore.innerHTML = draws
 totalWins.innerHTML = winScore
 totalLosses.innerHTML = lostScore
// insertions

 if(userScore == 5){
  alert('Great Game! Click Ok to play again')
  compScore = 0
  userScore = 0
  draws = 0
  winScore++
 }else if(compScore == 5){
  alert('You Lose. Game over. Click Ok to play again')
  compScore = 0
  userScore = 0
  draws = 0
  lostScore++
 }
 
}

// play song
window.addEventListener("click", () => {
  document.getElementById('song').play();
  })

// end of play song