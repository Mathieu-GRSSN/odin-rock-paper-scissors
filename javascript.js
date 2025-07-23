function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3) // generate a random number between 0 and 2

    // assign a string result for each possibility
    if (computerChoice === 0){
        return "rock"
    } else if (computerChoice === 1){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    return prompt("Choice between 'rock', 'paper' or 'scissors'")
}

function playRound(humanChoice,computerChoice){
    if ( (humanChoice === "rock" & computerChoice === "scissors") | (humanChoice === "scissors" & computerChoice === "paper") | (humanChoice === "paper" & computerChoice === "rock")){
        console.log("You win ! "+humanChoice+" beats "+computerChoice)
        return 1
    } else {
        console.log("You lose ! "+computerChoice+" beats "+humanChoice)
        return 0
    }
}
function playGame(numberGame){
    let humanScore = 0
    let computerScore = 0
    for (let i = 0; i <numberGame; i++){
        humanSelection = getHumanChoice().toLowerCase()
        computerSelection = getComputerChoice()

        if (playRound(humanSelection,computerSelection)===1){
            humanScore++
        } else {
            computerScore++
        }
    }

    if (humanScore>computerScore){
        console.log("Well played ! You win this game !")
    } else {
        console.log("Nice try but you lose this game ! Next time you'll win !")
    }
}


playGame(5)
