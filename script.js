class rockPaperScissors {
  getUserChoice() {
    while (true) {
      let userChoice = prompt(
        "Enter your choice (Rock/Paper/Scissors): "
      ).toLowerCase();
      return userChoice;
    }
  }
  getCPUChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  pickWinner(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
      return 0;
    } else if (
      (userChoice === "rock" && cpuChoice === "scissors") ||
      (userChoice === "paper" && cpuChoice === "rock") ||
      (userChoice === "scissors" && cpuChoice === "paper")
    ) {
      return 1;
    } else if (
      (cpuChoice === "rock" && userChoice === "scissors") ||
      (cpuChoice === "paper" && userChoice === "rock") ||
      (cpuChoice === "scissors" && userChoice === "paper")
    ) {
      return 2;
    }
  }
}

const game = new rockPaperScissors();
const userVal = game.getUserChoice();
console.log(userVal);
const cpuVal = game.getCPUChoice();
console.log(cpuVal);

let winner = game.pickWinner(userVal, cpuVal);
if (winner === 0) {
  console.log("Tie game");
} else if (winner === 1) {
  console.log("You win");
} else if (winner === 2) {
  console.log("Computer wins");
}
