/* randomly return rock, paper or scissors for CPU decision
    0 - rock
    1 - paper
    2 - scissors
*/

function computerPlay() {
    let cpuChoice = Math.floor(Math.random() * 3);
    console.log(cpuChoice);
}

computerPlay();