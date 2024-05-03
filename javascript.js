function getComputerChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    var randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice;

    if (human == "rock") {
        if (computer == "Rock") {
            console.log("Draw!");
            return;
        }
        if (computer == "Paper") {
            console.log("You lose, Paper beats Rock!");
            return 1;
        }
        if (computer == "Scissors") {
            console.log("You win, Rock beats Scissors!");
            return 2;
        }
    }

    if (human == "paper") {
        if (computer == "Rock") {
            console.log("You win, Paper beats Rock!");
            return 2;
        }
        if (computer == "Paper") {
            console.log("Draw!");
            return;
        }
        if (computer == "Scissors") {
            console.log("You lose, Scissors beats Paper!");
            return 1;
        }
    }
    
    if (human == "scissors") {
        if (computer == "Rock") {
            console.log("You lose, Rock beats Scissors!");
            return 1;
        }
        if (computer == "Paper") {
            console.log("You win, Scissors beats Paper!");
            return 2;
        }
        if (computer == "Scissors") {
            console.log("Draw!");
            return;
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let winner = playRound(getHumanChoice(), getComputerChoice());
        if (winner == 1) {
            computerScore++;
        }
        else if (winner == 2) {
            humanScore++;
        }
    }
    if (humanScore == computerScore) {
        return "Final score is a draw!";
    }
    else if (humanScore > computerScore) {
        return "Congrats, you won overall!";
    }
    else if (humanScore < computerScore) {
        return "You lose overall!";
    }
}


console.log(playGame());
