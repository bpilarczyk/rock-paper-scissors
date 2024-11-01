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
    // Declare variable to store input
    let input;
    // Declare variable to store the result
    let humanChoice;
    
    while (true) {
        input = prompt("What's your choice?", "rock, paper, or scissors");
        humanChoice = input.toLowerCase();

        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
            break;
        }

    }
    
    return humanChoice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return
    } else {
        if (humanChoice === 'rock' && computerChoice === 'scissors'){
            console.log('You win!');
            humanScore += 1;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log('Computer wins!');
            computerScore += 1;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log('Computer wins!');
            computerScore += 1;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win!');
            humanScore += 1;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log('Computer wins!');
            computerScore += 1;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win!');
            humanScore += 1;
        }
    }

    console.log("Human score: ");
    console.log(humanChoice);
    console.log(humanScore);
    console.log("Computer score: ");
    console.log(computerChoice);
    console.log(computerScore);
}