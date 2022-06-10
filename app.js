// console.log("Welcome to the Rock Paper Scissors Game");
// console.log("You're against the CPU - What do you choose?");
// console.log("Type in your choice: ");

/* 
    0 - rock
    1 - paper
    2 - scissors
*/
let playerScore = 0;
let cpuScore = 0;

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

function game() {
    let playerSelection = prompt("What's your choice? (Type rock, paper or scissors)");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    displayScore(playerScore, cpuScore);
}

game();