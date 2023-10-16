let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let recent_result = document.querySelector("#recent-result");
let scorecard = document.querySelector("#scorecard");
let overall = document.querySelector("#overall");
let play_again = document.querySelector("#play-again");

let playerWins = 0;
let computerWins = 0;


rock.addEventListener('click', () => {
    
    if (playerWins < 5 && computerWins < 5) {
        recent_result.textContent = oneRound("Rock", getComputerChoice());
        scorecard.textContent = `Score --> You: ${playerWins}\u00A0\u00A0\u00A0\u00A0\u00A0Computer: ${computerWins}`;
    }
    
    if (playerWins === 5 || computerWins === 5) {
        overall.textContent = whoWonMore();
        play_again.textContent = "Reload the page to play again!";
    }
});

paper.addEventListener('click', () => {
    
    if (playerWins < 5 && computerWins < 5) {
        recent_result.textContent = oneRound("Paper", getComputerChoice());
        scorecard.textContent = `Score --> You: ${playerWins}\u00A0\u00A0\u00A0\u00A0\u00A0Computer: ${computerWins}`;
    }
    
    if (playerWins === 5 || computerWins === 5) {
        overall.textContent = whoWonMore();
        play_again.textContent = "Reload the page to play again!";
    }
});

scissors.addEventListener('click', () => {
    
    if (playerWins < 5 && computerWins < 5) {
        recent_result.textContent = oneRound("Scissors", getComputerChoice());
        scorecard.textContent = `Score --> You: ${playerWins}\u00A0\u00A0\u00A0\u00A0\u00A0Computer: ${computerWins}`;
    }
    
    if (playerWins === 5 || computerWins === 5) {
        overall.textContent = whoWonMore();
        play_again.textContent = "Reload the page to play again!";
    }
});


function getComputerChoice() {
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}


function oneRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
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
    if (playerWins === 5) {
        return "You won overall!";
    }
    else if (computerWins === 5) {
        return "You lost overall!";
    }
}
