// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// random number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// for end the game its over
let gameOver = false;

// storage (score number)
let scoreNumber = 20;
let highScore = 0;
//  storage the (?)
let boxNumber = document.querySelector('.box-number');
// storage line
let hr = document.querySelector('.hr');
// storage the box input value from user
let boxGuess = document.querySelector('.box-guess');
//  storage queestion mark
let question = document.querySelector('.question');
//  storage audio
const winSound = new Audio('/sounds/win.mp3');
const loseSound = new Audio('/sounds/lose.mp3');
const clickSound = new Audio('/sounds/click.mp3');

// function to message win or lose
const message = msg => (document.querySelector('.p-1').textContent = msg);
// function for lose
const losingSituation = function () {
  message('You Lose 😳');
  document.querySelector('body').style.backgroundColor = 'red';
  boxNumber.style.backgroundColor = 'white';
  question.style.color = 'black';
  // for box guess style
  boxGuess.style.backgroundColor = 'white';
  boxGuess.style.color = 'black';
  loseSound.play();
  gameOver = true;
};
// function for message
const comparisonFunction = textMessage => {
  message(textMessage);
  scoreNumber--;
  // to make the score show it after --
  document.querySelector('.score-num').textContent = scoreNumber;
};
// function for (btn event)
const btnCheckEvent = function () {
  // sound effect for click on btn check
  clickSound.play();

  //  Stop game actions if the game is already over
  if (gameOver) return;

  // input user value in box
  let userValue = Number(document.querySelector('.box-guess').value);
  // user value = box(?)
  question.textContent = userValue;

  // condation for falsly value
  if (!userValue || userValue > 20 || userValue < 1) {
    return message('input is false try number from 1 to 20 pleas 🥺');
  }

  // condition for wining
  else if (randomNumber === userValue) {
    message('Correct Congratulation 😇');
    document.querySelector('body').style.backgroundColor = '#60b347';
    // for boxnumber style
    boxNumber.style.width = '100px';
    boxNumber.style.backgroundColor = 'white';
    // for question style
    question.style.fontSize = '60px';
    question.style.color = 'black';
    // for line style
    hr.style.border = '4px solid white';

    // for box guess style
    boxGuess.style.backgroundColor = 'white';
    boxGuess.style.color = 'black';

    document.querySelector('.high-score').textContent = scoreNumber;
    winSound.play();
    // if highscore higher than scorenumber save it
    if (highScore < scoreNumber) {
      highScore = scoreNumber;
      document.querySelector('.high-score').textContent = highScore;
    }
    gameOver = true;
  }

  // for value is low or high
  else if (randomNumber > userValue) {
    comparisonFunction('Too Low');
    // codition for losing the game
    if (scoreNumber == 0) {
      losingSituation();
    }
  }
  // if randomnumber is so high
  else if (randomNumber < userValue) {
    comparisonFunction('Too High');
    // codition for losing the game
    if (scoreNumber === 0) losingSituation();
  }
};
//  btn Again function event
const btnAgain = function () {
  // sound effect for click on btn Again
  clickSound.play();
  // make reset for every elments style we used  in APIs
  gameOver = false;
  // for make new random number
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  // for reset all API to first Situation
  document.querySelector('.high-score').textContent = highScore;
  message('Start guessing...');

  scoreNumber = 20;
  document.querySelector('.score-num').textContent = scoreNumber;

  // for reset background color of page
  document.querySelector('body').style.backgroundColor = 'black';
  // for reset line style
  hr.style.border = '2px solid white';
  // for reset box number style
  boxNumber.style.width = '70px';
  boxNumber.style.backgroundColor = 'black';
  // for reset question style
  question.textContent = '?';
  question.style.fontSize = '50px';
  question.style.color = 'white';
  // for reset box guess style
  boxGuess.value = '';
  boxGuess.style.backgroundColor = 'black';
  boxGuess.style.color = 'white';
};

// btn check event
document.querySelector('.check').addEventListener('click', btnCheckEvent);

// btn again
document.querySelector('.btn-again').addEventListener('click', btnAgain);
