console.log("Welcome to the Rock Paper Scissors Game");
console.log("You're against the CPU - What do you choose?");
console.log("Type in your choice: ");

/* 
    0 - rock
    1 - paper
    2 - scissors
*/

function computerPlay() {
    let cpuChoice = Math.floor(Math.random() * 3);

    if (cpuChoice === 0) {
        return "rock";
    } else if (cpuChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(computerPlay());

// function playRound(playerSelection, computerSelection) {

// }
// const playerSelection = "rock";
// const computerSelection = computerPlay();

