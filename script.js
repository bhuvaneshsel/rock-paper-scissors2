let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.random();
    if (number >= 0 && number < 0.33) {
        return "Rock";
    }
    else if (number >=0.33 && number < 0.66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Enter a choice").toLowerCase();
        if (humanChoice === "rock") {
            return "Rock";
        }
        else if (humanChoice ==="paper") {
            return "Paper";
        }
        else if (humanChoice === "scissors") {
            return "Scissors";
        }
        else {
            alert("Invalid choice: Pick rock, paper, or scissors");
        }
    }
   
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log(`You tie! ${humanChoice} ties with ${computerChoice}`);
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log(`You tie! ${humanChoice} ties with ${computerChoice}`);
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log(`You tie! ${computerChoice} ties with ${humanChoice}`);
    }

    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
}


function playGame() {
    for (i =0; i <5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }

    if (computerScore > humanScore) {
        console.log("Computer wins the series!");
    }
    else if (computerScore < humanScore) {
        console.log("You win the series!");
    }
    else { 
        console.log("The series ends in a tie!");
    }
}

playGame();

