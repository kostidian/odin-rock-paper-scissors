// Player choice function here
function playerTurn() {
    let playerChoice = prompt("ROCK, PAPER or SCISSORS?").toUpperCase();
    if (playerChoice == "ROCK") {
        return "ROCK";
    } else if (playerChoice == "PAPER") {
        return "PAPER";
    } else if (playerChoice == "SCISSORS") {
        return "SCISSORS";
    } else {
        console.log("Not a valid choice - try again")
        playerTurn()
    }
}

//Computer choice function here
function computerTurn() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        return "ROCK"
    } if (compChoice == 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

//Plays a single round returning player and computer choice
function playRound() {
    let playerDecision = playerTurn()
    let compDecision = computerTurn()
    console.log("Your choice was " + playerDecision)
    console.log("Computer's choice was " + compDecision)
    declareWinner(playerDecision, compDecision)
}

let playerScore = 0
let compScore = 0

function declareWinner(playerDecision, compDecision) {
    
    if (playerDecision == compDecision) {
        console.log("It's a draw")
    } else if (playerDecision == "ROCK" && compDecision == "PAPER") {
        console.log("Computer Wins - Paper Beats Rock")
        compScore += 1
    } else if (playerDecision == "ROCK" && compDecision == "SCISSORS") {
        console.log("You Win! - Rock Beats Scissors")
        playerScore += 1
    } else if (playerDecision == "PAPER" && compDecision == "SCISSORS") {
        console.log("Computer Wins - Scissors Beats Paper")
        compScore += 1
    } else if (playerDecision == "PAPER" && compDecision == "ROCK") {
        console.log("You Win! - Paper Beats Rock")
        playerScore += 1
    } else if (playerDecision == "SCISSORS" && compDecision == "PAPER") {
        console.log("You Win! - Scissors Beats Paper")
        playerScore += 1
    } else {
        console.log("Computer Wins - Rock Beats Scissors")
        compScore += 1
    }
}

