`use strict`;
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let txtmessage=document.querySelector('.message');
let txtnumber=document.querySelector('.number');
let body=document.querySelector('body');
console.info(txtnumber);
let txtguess=document.querySelector('.guess');
let txtscore=document.querySelector('.score');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(txtguess.value);

  if (!guess) {
    txtmessage.textContent = '⚠️No Number!';
  } else if (guess >= 21) {
    txtmessage.textContent = '🥲 Between 1-20';
  } else if (guess === secretNumber) {
    txtmessage.textContent = '🎊 Correct Number';
    
    txtnumber.textContent = secretNumber;
    txtnumber.style.width = '30rem';
    body.style.backgroundColor = '#60b347';
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      txtmessage.textContent = '📈 Too High';
      score--;
      txtscore.textContent = score;
    } else {
      txtmessage.textContent = '💥You Lost!';
      txtscore.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      txtmessage.textContent = '📉 Too Low';
      score--;
      txtscore.textContent = score;
    } else {
      txtmessage.textContent = '💥You Lost!';
      txtscore.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  txtscore.textContent = score;
  txtnumber.textContent = '?';
  txtmessage.textContent = 'Start guessing...';
  txtguess.value = '';
  body.style.backgroundColor = '#222';
  txtnumber.style.width = '15rem';
  secretNumber = Math.floor(Math.random() * 20 + 1);
});
