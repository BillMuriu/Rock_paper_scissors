function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();

const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

if (playerSelection === computerSelection) {
    return "It's a tie!";
}

if (winningConditions[playerSelection] === computerSelection) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
}

return "You Lose! " + computerSelection + " beats " + playerSelection;
}
  

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice (Rock/Paper/Scissors):");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      console.log("Round " + round + ": " + result);
  
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
    }
  
    console.log("Game Over!");
  
    if (playerScore > computerScore) {
      console.log("You won the game!");
    } else if (playerScore < computerScore) {
      console.log("You lost the game!");
    } else {
      console.log("It's a tie! No one wins.");
    }
}
  