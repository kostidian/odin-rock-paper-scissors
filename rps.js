let playerScore = 0
let compScore = 0

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
        return
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

// Function with the logic for determining a winner using all possible combinations
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
    } else if (playerDecision == "SCISSORS" && compDecision == "ROCK") {
        console.log("Computer Wins - Rock Beats Scissors")
        compScore += 1
    }  else {
        console.log("Computer Wins - you failed to enter a valid choice")
        compScore += 1
    }
}
    
// Function for a 5 round game (for loop) with scoring
function game() {
    playerScore = 0
    compScore = 0
    for (let i = 0; i < 5; i++) {
        playRound()
        printScore()
    }
    printFinalScore()
}

// This function simply prints the score to the console
function printScore() {
    console.log("The score is: Player " + playerScore + " Computer " + compScore)
}

// This function declares the winner of the 5 round match
function printFinalScore() {
    console.log("The 5 rounds are over")
    if (playerScore > compScore) {
        console.log("Player wins the match! Congratulations!")
    } else if (compScore > playerScore) {
        console.log("Computer wins the match! Better luck next time")
    } else {
        console.log("It's a draw, no winner. Try again!")
    }
}

game()