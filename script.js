let userScore = 0;
let computerScore = 0;
let round = 0;

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

let roundResults = document.querySelector('#roundResults');
let userScoreDisplay = document.querySelector('#userScore');
let computerScoreDisplay = document.querySelector('#computerScore');
let winnerDisplay = document.querySelector('#winner');

rock.addEventListener('click', function () {
	if (userScore >= 5 || computerScore >= 5) return;
	round++;
  roundResults.textContent = `Round ${round}: ${playRound('rock', computerPlay())}`;
  userScoreDisplay.textContent = 'your score: ' + userScore;
  computerScoreDisplay.textContent = 'cpu score: ' + computerScore;
	checkForWinner();
});

paper.addEventListener('click', function () {
  if (userScore >= 5 || computerScore >= 5) return;
	round++;
  roundResults.textContent = `Round ${round}: ${playRound('paper', computerPlay())}`;
  userScoreDisplay.textContent = 'your score: ' + userScore;
  computerScoreDisplay.textContent = 'cpu score: ' + computerScore;
	checkForWinner();
});

scissors.addEventListener('click', function () {
  if (userScore >= 5 || computerScore >= 5) return;
	round++;
  roundResults.textContent = `Round ${round}: ${playRound('scissors', computerPlay())}`;
  userScoreDisplay.textContent = 'your score: ' + userScore;
  computerScoreDisplay.textContent = 'cpu score: ' + computerScore;
	checkForWinner();
});

function randomNumberGenerator() {
  return Math.floor(Math.random() * 3);
}

// randomly returns either rock paper or scissors
function computerPlay() {
  let computerDecision;
  let numericSelection = randomNumberGenerator();
  switch (numericSelection) {
    case 0:
      computerDecision = 'rock';
      break;
    case 1:
      computerDecision = 'paper';
      break;
    case 2:
      computerDecision = 'scissors';
      break;
  }
  return computerDecision;
}

function playRound(playerSelection, computerSelection) {
  let winnerAnnouncement;
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    winnerAnnouncement = 'You win! Rock crushes Scissors';
    userScore++;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    winnerAnnouncement = 'You lose! Paper covers Rock';
    computerScore++;
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    winnerAnnouncement = 'Its a tie! you both picked Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    winnerAnnouncement = 'You win! Paper covers Rock';
    userScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    winnerAnnouncement = 'You lose! Scissors cuts Paper';
    computerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    winnerAnnouncement = 'Its a tie! you both picked Rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    winnerAnnouncement = 'You win! Scissors cuts Paper';
    userScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    winnerAnnouncement = 'You lose! Rock crushes Scissors';
    computerScore++;
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    winnerAnnouncement = 'Its a tie! you both picked Scissors';
  } else {
    winnerAnnouncement = 'Error';
  }
  return winnerAnnouncement;
}

function checkForWinner() {
  if (userScore === 5) {
    winnerDisplay.textContent = `you won ${userScore}-${computerScore}!`
  } else if (computerScore === 5) {
    winnerDisplay.textContent = `you lost ${userScore}-${computerScore}!`
  }
}
