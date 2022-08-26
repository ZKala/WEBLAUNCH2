 
 const message = document.querySelector(".message");
 const gameboard = document.querySelector(".gameboard");
 const button = document.querySelector("button");
 const gameColors = ["red", "green", "blue", "yellow"]

 let gameClicks = [];
 let userClicks = [];
 let inPlay = false;
 let playNum = 2;
 // event listeners

 window.addEventListener("load", setup());
 button.addEventListener("click", function(){
  if(!inPlay){
   player();
  }
 })


 
 
 //functions
function messenger(mes){
 message.innerHTML = mes;
}

 function player(){
  button.disabled = true;
  button.style.opacity = 0;
  gameClicks = [];
  userClicks = [];
  messenger("In Game")
  runSequence(playNum);
}

function runSequence(){
 let squares = document.querySelectorAll(".box");
 playNum--;
 if(playNum<0){
   inPlay = true;
   return
 }
 let randomNum = Math.floor(Math.random()* gameColors.length)
 gameClicks.push(gameColors[randomNum])
 squares[randomNum].style.opacity = "1";
 setTimeout(function(){
  squares[randomNum].style.opacity = "0.5";
  setTimeout(function(){
    runSequence(playNum);
  })}, 500)
}

 function setup() {
   console.log("Page loaded")
  for(let x=0; x<gameColors.length; x++){
   let div = eleFactory("div");
   div.style.backgroundColor = gameColors[x];
   div.classList.add("box");
   div.style.opacity = "0.35";
   div.myColor = gameColors[x];
   div.addEventListener("click", checkAnswer)
   gameboard.appendChild(div);
  }
 }

 
 function checkAnswer(e){
  if(inPlay){
   let el = e.target;
   userClicks.push(el.myColor)
   el.style.opacity = "1";
   setTimeout(function(){
    el.style.opacity = "0.5";
   }, 500)
   if(userClicks.length === gameClicks.length){
    inPlay = false;
    endGame()
  }
  console.log(userClicks)
 }
}

function endGame() {
 console.log("Game Over!")
 button.disabled = false;
 button.style.opacity = 1;
 if(userClicks.toString() == gameClicks.toString()){
  playNum++
  console.log("Correct")
 }else{
  console.log("Incorrect")
 }
}

 function eleFactory(elType){
  let ele = document.createElement(elType);
  return ele;
 }
