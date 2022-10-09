
function playerTurn() {
    let playerChoice = prompt("Rock, Paper or Scissors?");
   return playerChoice
}

//Computer choice here
function computerTurn() {
    let compChoice = Math.floor(Math.random() * 3);
    console.log(compChoice)
    if (compChoice == 0) {
        return "ROCK"
    } if (compChoice == 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}


let playerDecision = playerTurn()
let compDecision = computerTurn()

console.log(playerDecision)
console.log(compDecision)

