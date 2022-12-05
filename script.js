'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').textContent;
  //The guess should be a number

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉crroct number!');
    document.querySelector('.number').textContent=secretNumber;

    document.querySelector('body').style.backgroundColor='coral';
    document.querySelector('.number').style.width='#35rem';
  }
  else if (guess !== secretNumber){
    if (score>1){
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
        displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});


document.querySelector('.again').addEventListener('click',function{
    score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

});
