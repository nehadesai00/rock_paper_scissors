function getComputerChoice() {
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

    if (playerSelection === computerSelection) {
        return `Draw! You both chose ${playerSelection}`;
    }
    else if (playerSelection === "Rock") {
        return (computerSelection === "Scissors") ? "You Win! Rock beats Scissors" : "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "Paper") {
        return (computerSelection === "Rock") ? "You Win! Paper beats Rock" : "You Lose! Scissors beats Paper";
    }
    else {
        return (computerSelection === "Paper") ? "You Win! Scissors beats Paper" : "You Lose! Rock beats Scissors";
    }
}