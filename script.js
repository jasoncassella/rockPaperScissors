let userScore = 0;
let computerScore = 0;
console.log("fake change");

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
	if (playerSelection === "rock" && computerSelection === "scissors") {
		winnerAnnouncement = "You win! Rock crushes Scissors";
		userScore++;
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		winnerAnnouncement = "You lose! Paper covers Rock";
		computerScore++;
	} else if (playerSelection === "rock" && computerSelection === "rock") {
		winnerAnnouncement = "Its a tie! you both picked Rock"
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		winnerAnnouncement = "You win! Paper covers Rock";
		userScore++;
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		winnerAnnouncement = "You lose! Scissors cuts Paper";
		computerScore++;
	} else if (playerSelection === "paper" && computerSelection === "paper") {
		winnerAnnouncement = "Its a tie! you both picked Rock"
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		winnerAnnouncement = "You win! Scissors cuts Paper";
		userScore++;
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		winnerAnnouncement = "You lose! Rock crushes Scissors";
		computerScore++;
	} else if (playerSelection === "scissors" && computerSelection === "scissors") {
		winnerAnnouncement = "Its a tie! you both picked Scissors"
	} else {
		winnerAnnouncement = "Error"
	}
	return winnerAnnouncement;
}

function game() {
	let choice1 = prompt("Rock Paper or Scissors?")
	console.log(playRound(choice1.toLowerCase(), computerPlay()));
	let choice2 = prompt('Rock Paper or Scissors?');
	console.log(playRound(choice2.toLowerCase(), computerPlay()));
	let choice3 = prompt('Rock Paper or Scissors?');
	console.log(playRound(choice3.toLowerCase(), computerPlay()));
	let choice4 = prompt("Rock Paper or Scissors?")
	console.log(playRound(choice4.toLowerCase(), computerPlay()));
	let choice5 = prompt("Rock Paper or Scissors?")
	console.log(playRound(choice5.toLowerCase(), computerPlay()));

	if (userScore > computerScore) {
		console.log("you won :)");
	} else if (userScore < computerScore) {
		console.log("you lost :(");
	} else {
		console.error("error");
	}
}

game();