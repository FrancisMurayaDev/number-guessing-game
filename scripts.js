`use strict`;
// document.querySelector('.message').textContent = '🎊Correct Number!';
// document.querySelector('.number').textContent = 17;
// document.querySelector('.guess').value = 19;
// document.querySelector('.score').textContent = 7;

const secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no number
  if (!guess) {
    document.querySelector('.message').textContent = '⚠️No Number!';

    // When the guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 Correct Number';

    // When Guess is greater than Secret Number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lost!';
      document.querySelector('.score').textContent = 0;
    }

    // When the guess is less than Secret Number.
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
