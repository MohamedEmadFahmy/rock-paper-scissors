function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
};

function playRound(playerChoice){
    let computerChoice = getComputerChoice();
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
    let computerScore = 0; 
    let playerScore = 0;
    let times = 0;
    let choices = document.querySelectorAll(".options img");
    let resultText;

    choices.forEach((choice)=> {
        choice.addEventListener("click", () => {
            
            resultText = playRound(choice.getAttribute("id"));
            let result = document.querySelector(".score-text");
            result.textContent = resultText;
            let resultSplitted = resultText.split(" ");
            if(resultSplitted[1] === "Win!"){
                playerScore++;
            }
            else if(resultSplitted[1] === "Lose!"){
                computerScore++;
            }

            let playerScoreObject = document.querySelector("#user p");
            let computerScoreObject = document.querySelector("#computer p");
            playerScoreObject.textContent = "Score: " + playerScore;
            computerScoreObject.textContent = "Score: " + computerScore;
            times++;
            console.log(times);

            if(times >= 5){
                setTimeout(()=>{
                    if(playerScore > computerScore){
                        alert("You win");
                    }
                    else if(playerScore <computerScore){
                        alert("You lose");
                    }
                    else{
                        alert("Draw");
                    }
                }, 50);
                playerScore = 0;
                computerScore = 0;
                playerScoreObject.textContent = "Score: " + playerScore;
                computerScoreObject.textContent = "Score: " + computerScore;
                times = 0;
            }
        });
    });
}

game();