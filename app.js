let playerScore = 0;
let cpuScore = 0;

/* 
    0 - rock
    1 - paper
    2 - scissors
*/

function computerPlay() {
    let cpuChoice = Math.floor(Math.random() * 3);

    if (cpuChoice == 0) {
        console.log("CPU rock");
        return "rock";
    } else if (cpuChoice == 1) {
        console.log("CPU paper");
        return "paper";
    } else if (cpuChoice == 2) {
        console.log("CPU Scissors");
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        console.log("Round Results: Tie!");
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        console.log("Round Results: Player Wins! " + playerSelection + " beats " + computerSelection);
        playerScore++;
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        console.log("Round Results: Player Loses! " + computerSelection + " beats " + playerSelection);
        cpuScore++;
    }
}

function displayScore(playerScore, cpuScore) {
    
    if (playerScore == 5) {
        console.log("Player wins the Rock Paper Scissors Game!")
        return;
    } else if (cpuScore == 5) {
        console.log("CPU wins the Rock Paper Scissors Game!")
        return;
    }
    
    console.log("Player Score: " + playerScore);
    console.log("CPU Score: " + cpuScore);
}

// TODO later: modify game win to first to get 5 wins instead of Bo5
function game() {

}

game();

// UI

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    playRound("rock", computerSelection);
    displayScore(playerScore, cpuScore);
});

paperBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    playRound("paper", computerSelection);
    displayScore(playerScore, cpuScore);
});

scissorsBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    playRound("scissors", computerSelection);
    displayScore(playerScore, cpuScore);
});