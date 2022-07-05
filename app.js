let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

/* 
    0 - rock
    1 - paper
    2 - scissors
*/

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        console.log("computer rock");
        return "rock";
    } else if (computerChoice === 1) {
        console.log("computer paper");
        return "paper";
    } else if (computerChoice === 2) {
        console.log("computer Scissors");
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        console.log("Round Results: Tie!");
        roundWinner = 'tie';
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log("Round Results: Player Wins! " + playerSelection + " beats " + computerSelection);
        playerScore++;
        roundWinner = 'player';
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        console.log("Round Results: Player Loses! " + computerSelection + " beats " + playerSelection);
        computerScore++;
        roundWinner = 'computer';
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function displayScore(playerScore, computerScore) {
    
    if (playerScore === 5) {
        console.log("Player wins the Rock Paper Scissors Game!")
        return;
    } else if (computerScore === 5) {
        console.log("computer wins the Rock Paper Scissors Game!")
        return;
    }
    
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    playerScoreCounter.textContent = `Player: ${playerScore}`;
    computerScoreCounter.textContent = `CPU: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        // update text to show "{player's choice} beats {computer's choice}"
        scoreMessage.textContent = `Player's ${playerSelection} beats CPU's ${computerSelection}`;
        return;
    }

    if (winner === 'computer') {
        // update text to show "{computer's choice} beats {player's choice}"
        scoreMessage.textContent = `CPU's ${computerSelection} beats Player's ${playerSelection}`;
        return;
    }

    // if tie:
    // update text to show "{player's choice} ties with {computer's choice}"
    scoreMessage.textContent = `Player's ${playerSelection} ties with CPU's ${computerSelection}`;        
}

// TODO later: modify game win to first to get 5 wins instead of Bo5
function game() {

}

game();

// UI
const scoreResults = document.querySelector('.score-results');
const scoreMessage = document.querySelector('.score-message');
const playerScoreCounter = document.querySelector('.player-score');
const computerScoreCounter = document.querySelector('.computer-score');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    playRound("rock", computerSelection);
    displayScore(playerScore, computerScore);
});

paperBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    playRound("paper", computerSelection);
    displayScore(playerScore, computerScore);
});

scissorsBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    playRound("scissors", computerSelection);
    displayScore(playerScore, computerScore);
});