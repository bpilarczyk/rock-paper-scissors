console.log('Hello and welcome to the amazing Rock, Paper, and Scissors game!');

// declare global variables to store humanScore and computerScore
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    // Declare a variable to store computer 'choice'
    let computerChoice;

    // Return an int in the closed range 0, 1, 2
    let randomNumber = Math.floor(Math.random() * 3);
    
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

function getHumanChoice(){
    // let input = prompt("What's your choice?");
    let input;
    let humanChoice;
    
    while (true) {
        input = prompt("What's your choice?");
        humanChoice = input.toLowerCase();

        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
            break;
        }

    }
    
    return humanChoice;
}

let computerResult = getComputerChoice();
console.log("Computer's choice: ");
console.log(computerResult);

let humanResult = getHumanChoice();
console.log("Human's choice: ");
console.log(humanResult);