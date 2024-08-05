const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("player-score");

const computerScoreEl = document.getElementById("computer-score");



let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        const result = playGame(button.id, computerPlay());
        resultEl.textContent = result;
    });
});


function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playGame(userSelection , computerSelection){
    if(userSelection === computerSelection){
        return "Hey its a Tie"
    }
    else if (
        (userSelection ==="rock" && computerSelection ==="paper") || 
        (userSelection ==="paper" && computerSelection ==="scissors") ||
        (userSelection ==="scissors" && computerSelection ==="rock")) {
            playerScore++;
            playerScoreEl.textContent = playerScore;
            return "You win " + userSelection + " beats " + computerSelection;

    }
    else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You Lose " + computerSelection + "beats " + userSelection;
    }
}