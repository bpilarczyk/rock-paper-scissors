console.log('Hello and welcome to the amazing Rock, Paper, and Scissors game!');

function getComputerChoice(){
    // Return an int in the closed range 0, 1, 2
    let randomNumber = Math.floor(Math.random() * 3);
    // Declare a variable to store computer 'choice'
    let computerChoice;
    // Assign numeric values to rock, paper, and scissors
    
    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
    } else if (randomNumber === 2) {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

let result = getComputerChoice();
console.log(result);