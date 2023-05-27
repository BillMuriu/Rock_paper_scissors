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
  