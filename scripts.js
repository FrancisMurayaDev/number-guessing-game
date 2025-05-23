`use strict`;
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let txtmessage=document.querySelector('.message');
let txtnumber=document.querySelector('.number');
let body=document.querySelector('body');
let txtguess=document.querySelector('.guess');
let txtscore=document.querySelector('.score');
let btncheck=document.querySelector('.check');
let btnagain=document.querySelector('.again');

toggleInteractivity=(element,flag=0)=>{
  if(flag===0){
//enables the element if disabled;.
  // Toggle readonly: default is false (or not present)
  element.readOnly = false;

  // Toggle tabIndex: default is 0 (if focusable) or browser default
  element.tabIndex = 0;

  // Toggle pointerEvents: default is 'auto'
  element.style.pointerEvents = 'auto';

  // Toggle userSelect: default is 'auto'
  element.style.userSelect = 'auto';
  }else{
     //dissables an element while it remains visible.
  // Toggle readonly
  element.readOnly = true;

  // Toggle tabIndex
  element.tabIndex = -1;

  // Toggle pointerEvents
  element.style.pointerEvents = 'none';

  // Toggle userSelect
  element.style.userSelect = 'none';
  }
}

txtguess.addEventListener('input', function(event) {
    const inputValue = this.value;
    const parsedValue = parseInt(inputValue);
    const isDeletion = event.inputType === 'deleteContentBackward' || event.inputType === 'deleteContentForward';

    if (isDeletion) {
      // Allow deletion
      this.dataset.previousValue = inputValue; // Update previous value on deletion
      return;
    }

    if (isNaN(parsedValue) || parsedValue < 1 || parsedValue > 20) {
      // Prevent invalid input
      this.value = this.dataset.previousValue || '';
    } else {
      // Store the current valid value
      this.dataset.previousValue = inputValue;
    }
  });
  
  

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
    toggleInteractivity(txtguess,1);
    toggleInteractivity(btncheck,1);
    toggleInteractivity(btnagain);
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

btnagain.addEventListener('click', function () {
  score = 20;
  txtscore.textContent = score;
  txtnumber.textContent = '?';
  txtmessage.textContent = 'Start guessing...';
  txtguess.value = '';
  toggleInteractivity(txtguess);
  toggleInteractivity(btncheck);
  toggleInteractivity(btnagain,1);
  body.style.backgroundColor = '#222';
  txtnumber.style.width = '15rem';
  secretNumber = Math.floor(Math.random() * 20 + 1);
});
toggleInteractivity(btnagain,1);