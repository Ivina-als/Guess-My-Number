'use strict';

let highScore = [0];
let score = 20;
let numeroSecreto = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(numeroSecreto);
  if (!guess) {
    document.querySelector('.message').textContent = 'Sem Numero!';
  } else if (guess === numeroSecreto) {
    document.querySelector('.number').textContent = numeroSecreto;
    document.querySelector('.message').textContent = '🎉 Número correto!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highScore.unshift(score);
    console.log(highScore);
    if (highScore[0] >= highScore[1]) {
      document.querySelector('.highscore').textContent = highScore[0];
    } else if (highScore[1] > highScore[0]) {
      document.querySelector('.highscore').textContent = highScore[1];
    }
  } else if (guess > numeroSecreto) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Muito alto';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 Você perdeu!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < numeroSecreto) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Muito baixo';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 Você perdeu!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  numeroSecreto = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = numeroSecreto;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  console.log(numeroSecreto);
  score = 20;
});
