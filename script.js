// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
//getElementByID retrives the HTML element with the ID playerDisplay and assigns it to the variable "playerDisplay."
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
//The code above initializes variables to store elements from the index.html and keeps track of player and computer scores. 

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
//The function playGame randomly selects a choice for the computer and initializes a vairable to store the result of the game. 
    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    ////The if statement checks if the player's choice matches the computer's choice and sets the reesult to "IT'S A TIE " if they match. 
    }else {
        if (playerChoice === "rock") {
            result = (computerChoice === "scissor") ? "YOU WIN!" : "YOU LOSE";
        } else if (playerChoice === "paper") {
            result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        } else if (playerChoice === "scissor") {
            result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        }
    }
    //Otherwise, the winner is determined based on the player's or computer's choice. 
    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    //.textContent updates the text content of HTML elements with their values stored in variables.
    resultDisplay.classList.remove("greenText", "redText");

    if (result === "YOU WIN!") {
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "YOU LOSE!") {
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } 
}