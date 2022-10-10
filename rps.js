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


function declareWinner(playerDecision, compDecision) {
    if (playerDecision == compDecision) {
        console.log("It's a draw")
    } else if (playerDecision == "ROCK" && compDecision == "PAPER") {
        console.log("Computer Wins - Paper Beats Rock")
    } else if (playerDecision == "ROCK" && compDecision == "SCISSORS") {
        console.log("You Win! - Rock Beats Scissors")
    } else if (playerDecision == "PAPER" && compDecision == "SCISSORS") {
        console.log("Computer Wins - Scissors Beats Paper")
    } else if (playerDecision == "PAPER" && compDecision == "ROCK") {
        console.log("You Win! - Paper Beats Rock")
    } else if (playerDecision == "SCISSORS" && compDecision == "PAPER") {
        console.log("You Win! - Scissors Beats Paper")
    } else {
        console.log("Computer Wins - Rock Beats Scissors")
    }
}

