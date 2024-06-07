// let computerChoices = ["rock", "paper", "scissors"];

// function getComputerChoice() {
//  console.log(computerChoices[(Math.floor(Math.random() * computerChoices.length))]);
// }

// getComputerChoice()

//function playGame(playerSelection, computerSelection) {
//}

//Upper here is kinda just google and copy paste code, I don't really understand what's going on. 

function getComputerChoice() {
  let computerChoice = Math.random()

  if (computerChoice >= 0 && computerChoice <= 0.33) {
    computerChoice = "rock"
  } else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
    computerChoice = "paper"
  } else {
    computerChoice = "scissors"
  }

  console.log(`Computer choose: ${computerChoice}`);
  return computerChoice;
  //FUCK HERE I JUST NEED A RETURN, THEN NOW THE CODE WORKS... FUNCTION NEED RETURN. STUCK ON CODE NOT WORKING/RETURNING UNDEFINED FOR A LONG TIME.
}

//OMFG I FUCKING MAKE THIS HAPPEN LIAO!!! OH MY GOD!!! OFC GOT A BIT OF ACCIDENTALLY LOOK AT HOW OTHERS DO IT LAST WEEK, BUT AT LEAST THIS IS I MAKE MYSELF DE! I UNDERSTAND THE CODE WHAT'S IT DOING! 

function playRound(playerSelection, computerSelection) {

  //playGame();

  //let playerSelectionLowerCase = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    //++playerScore;
    return "You win, rock crush scissors";
  } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
    //++computerScore;
    return "You lose, paper swallow rock";
  } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
    //++computerScore;
    return "You lose, rock crush scissors";
  } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
    //++playerScore;
    return "You win, scissors cut paper";
  } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
    //++computerScore;
    return "You lose, scissors cut paper";
  } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
    //++playerScore;
    return "You win, paper swallow rock";
  } else {
    return "Try again, input wrong!";
  }
}

function oneRound() {
const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
}
//playRound(playerSelection, computerSelection);
//console.log(playRound("rock", "paper"));

let playerScore = 0;
let computerScore = 0;

function playGame() {
  oneRound();
  oneRound();
  oneRound();
  oneRound();
  oneRound();
  //const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
  //const computerSelection = getComputerChoice();
  //console.log(playRound(playerSelection, computerSelection));
  //console.log(playRound(playerSelection, computerSelection));
  //console.log(playRound(playerSelection, computerSelection));
  //console.log(playRound(playerSelection, computerSelection));
  //console.log(playRound(playerSelection, computerSelection));

  if (("You win, rock crush scissors") || ("You win, scissors cut paper") || ("You win, paper swallow rock")) {
    ++playerScore;
    //console.log(`Player score is ${playerScore}`);
  } else if (("You lose, paper swallow rock") || ("You lose, rock crush scissors") || ("You lose, scissors cut paper")) {
    ++computerScore;  
    //console.log(`PC score is ${computerScore}`); 
  }
}

/*
for (let i = 0; i < 5; i++) {
  //playRound(playerSelection, computerSelection);
  playGame();
}
*/

playGame();
console.log(`Player score is ${playerScore}`);
console.log(`PC score is ${computerScore}`); 


if (playerScore > computerScore) {
    console.log("You have won!");
} else if (computerScore > playerScore) {
    console.log("Computer has won!");
}