function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
};

function playRound(){
    let playerChoice = prompt("Choose rock or paper or scissors");
    let computerChoice = getComputerChoice();
    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    if(computerChoice === playerChoice){
        return `Draw! Both ${computerChoice}`;
    }
    if(computerChoice === "rock"){
        if(playerChoice === "paper"){
            return "You win! Paper beats Rock";
        }
        return "You Lose! Rock beats Scissors";
    }
    else if(computerChoice === "paper"){
        if(playerChoice === "scissors"){
            return "You Win! Scissors beats Paper";
        }
        return "You Lose! Paper beats Rock";
    }
    else if(computerChoice === "scissors"){
        if(playerChoice === "rock"){
            return "You Win! Rock beats Scissors";
        }
        return "You Lose! Scissors beats Paper";
    }
}
function game(){
    let times = prompt("How many times do you want to play?");
    let computerScore = 0; 
    let playerScore = 0; 
    for(let i = 0; i < times; i++){
        let result = playRound();
        let resultSplitted = result.split(" ");
        if(resultSplitted[1] === "Win!"){
            playerScore++;
        }
        else if(resultSplitted[1] === "Lose!"){
            computerScore++;
        }
        console.log(result);
        console.log(`You: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }
}
game();
// let playerChoice = "rock";
// let computerChoice = getComputerChoice();
// console.log("Player: " + playerChoice);
// console.log("Computer: " + computerChoice);
// console.log(playRound(playerChoice, computerChoice));