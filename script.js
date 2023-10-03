function getPlayerSelection() {
    return prompt("Make a choice: Rock, Paper, or Scissors");
}

function getComputerChoice() {
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

let playerWins = 0;
let computerWins = 0;
let numberTies = 0;

function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

    if (playerSelection === computerSelection) {
        numberTies += 1;
        return `Draw! You both chose ${playerSelection}`;
    }

    else if (playerSelection === "Rock") {

        if(computerSelection === "Scissors") {
            playerWins += 1;
            return "You Win! Rock beats Scissors";
        }
        else {
            computerWins += 1;
            return "You Lose! Paper beats Rock";
        }
    }

    else if (playerSelection === "Paper") {

        if (computerSelection === "Rock") {
            playerWins += 1;
            return "You Win! Paper beats Rock";
        }

        else {
            computerWins += 1;
            return "You Lose! Scissors beats Paper";
        }
        
    }

    else {

        if(computerSelection === "Paper") {
            playerWins += 1;
            return "You Win! Scissors beats Paper";
        }
        
        else {
            computerWins += 1;
            return "You Lose! Rock beats Scissors";
        }

    }
}

function whoWonMore() {
    if (playerWins === computerWins) {
        return "Tie Overall!";
    }
    else if (playerWins > computerWins) {
        return `You won overall! You won ${playerWins}/5 games and tied ${numberTies} times!`;
    }
    else {
        return `You lost overall! You won ${playerWins}/5 games though and tied ${numberTies} times!`;
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(oneRound(getPlayerSelection(), getComputerChoice()));
    }
    console.log(whoWonMore());
}