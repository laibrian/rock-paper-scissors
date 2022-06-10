// console.log("Welcome to the Rock Paper Scissors Game");
// console.log("You're against the CPU - What do you choose?");
// console.log("Type in your choice: ");

/* 
    0 - rock
    1 - paper
    2 - scissors
*/

function computerPlay() {
    let cpuChoice = Math.floor(Math.random() * 3);
    console.log("CPU " + cpuChoice);

    if (cpuChoice == 0) {
        return "rock";
    } else if (cpuChoice == 1) {
        return "paper";
    } else if (cpuChoice == 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "Tie game!"
    } else if 
        ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock"))
    {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

