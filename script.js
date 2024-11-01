console.log('Hello and welcome to the amazing Rock, Paper, and Scissors game!');

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

function playRound(humanChoice, computerChoice) {
    
    // declare round score
    let humanScoreRound = 0;
    let computerScoreRound = 0;

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        // return
    } else {
        if (humanChoice === 'rock' && computerChoice === 'scissors'){
            console.log('You win!');
            humanScoreRound += 1;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log('Computer wins!');
            computerScoreRound += 1;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log('Computer wins!');
            computerScoreRound += 1;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win!');
            humanScoreRound += 1;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log('Computer wins!');
            computerScoreRound += 1;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win!');
            humanScoreRound += 1;
        }
    }

    // console.log("Human score: ");
    // console.log(humanChoice);
    // console.log(humanScoreRound);
    // console.log("Computer score: ");
    // console.log(computerChoice);
    // console.log(computerScoreRound);

    return {humanScoreRound, computerScoreRound};
}


function playGame(){
    // declare global variables to store humanScore and computerScore
    let humanScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    let rounds = 5;
    let roundsPlayed = 0;
    // declare humanSelection and computerSelection
    let humanSelection;
    let computerSelection;

    // Run playRound 5 times within the playGame
    while (rounds > 0) {

        // get the humanSelection
        humanSelection = getHumanChoice();
        // get the computerSelection
        computerSelection = getComputerChoice();
        // Display round #
        roundsPlayed += 1;
        console.log(`Welcome to Round #${roundsPlayed}!`);

        // playRound
        let hS = 0;
        let cS = 0;
        let roundResult = playRound(humanSelection, computerSelection);
        hS = roundResult.humanScoreRound;
        cS = roundResult.computerScoreRound;

        // update scores
        humanScore += hS;
        computerScore += cS

        // decrease the number of rounds
        rounds -= 1;
    }

    // compare the results
    console.log('Here are the final results!');
    if (humanScore < computerScore) {
        console.log(`The computer won: ${computerScore} to ${humanScore}`);
    } else if (humanScore > computerScore) {
        console.log(`You won: ${humanScore} to ${computerScore}`);
    } else {
        console.log(`It's a tie! You: ${humanScore} vs computer: ${computerScore}`);
    }
}

playGame();