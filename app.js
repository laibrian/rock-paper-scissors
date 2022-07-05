let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            console.log("CPU rock");
            return "rock";
        case 1:
            console.log("CPU paper");
            return "paper";
        case 2:
            console.log("CPU scissors");
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        console.log("Round Results: Tie!");
        roundWinner = "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log("Round Results: Player Wins! " + playerSelection + " beats " + computerSelection);
        playerScore++;
        roundWinner = "player";
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        console.log("Round Results: Player Loses! " + computerSelection + " beats " + playerSelection);
        computerScore++;
        roundWinner = "computer";
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function resetGame(lastWinner) {
    alert(`GAME OVER! ${lastWinner} won!`);
    playerScore = 0;
    computerScore = 0;
    scoreResults.textContent = "First to 5 points wins";
    scoreMessage.textContent = "What's your choice?";
    playerScoreCounter.textContent = "Player: 0";
    computerScoreCounter.textContent = "CPU: 0";
}

function updateScoreResults() {
    if (roundWinner === "tie") {
        scoreResults.textContent = "Tie!";
    } else if (roundWinner === "player") {
        scoreResults.textContent = "You won!";
    } else if (roundWinner === "computer") {
        scoreResults.textContent = "You lost!"
    }

    playerScoreCounter.textContent = `Player: ${playerScore}`;
    computerScoreCounter.textContent = `CPU: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `Player's ${playerSelection} beats CPU's ${computerSelection}`;
        return;
    } else if (winner === 'computer') {
        scoreMessage.textContent = `CPU's ${computerSelection} beats Player's ${playerSelection}`;
        return;
    }
    scoreMessage.textContent = `Player's ${playerSelection} ties with CPU's ${computerSelection}`;        
}

// UI
const scoreResults = document.querySelector('.score-results');
const scoreMessage = document.querySelector('.score-message');
const playerScoreCounter = document.querySelector('.player-score');
const computerScoreCounter = document.querySelector('.computer-score');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => {
    playGame("rock");
});

paperBtn.addEventListener('click', () => {
    playGame("paper");
});

scissorsBtn.addEventListener('click', () => {
    playGame("scissors");
});

// game starts when player clicks on an option
function playGame(playerSelection) {
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScoreResults();

    if (playerScore === 5) {
        resetGame("Player");
    }

    if (computerScore === 5) {
        resetGame("Computer");
    }
}