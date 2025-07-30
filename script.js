'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// for any i/p value we use value instead of textcontent

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   above line get value in the input field in html.
  console.log(guess, typeof guess);

  // when no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'no number';
    displaymessage('no number');
  }
  //   when player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'correct guess';
    displaymessage('correct guess');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈too high' : '📉too low';
      displaymessage(guess > secretNumber ? '📈too high' : '📉too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game.';
      displaymessage('You lost the game.');
      document.querySelector('.score').textContent = 0;
    }
  }

  // //   when guess is more than answer
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //   when guess is less than answer
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displaymessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// to reset the page by clicking again btn we need to:
// 1. select element with again  and attach a click addEventListener
// 2. store initial values of score and secret Number
// 3. restore initial conditions of MessageChannel,score,guess input field
// 4. also restore original css


// in this project atlast we refactor the code 
// by replacing the duplicate code into 1 by using terinary operator
// and making change in message as a function so that a lot of times we write 
// code to change in message we do it by using a function 
// can do same for all tooo.