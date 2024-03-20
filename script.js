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

  let playerSelectionLowerCase = playerSelection.toLowerCase();

  if (playerSelectionLowerCase === computerSelection) {
    return "It's a tie!";
  } else if ((playerSelectionLowerCase === "rock") && (computerSelection === "scissors")) {
    return "You win, rock crush scissors";
  } else if ((playerSelectionLowerCase === "rock") && (computerSelection === "paper")) {
    return "You lose, paper swallow rock";
  } else if ((playerSelectionLowerCase === "scissors") && (computerSelection === "rock")) {
    return "You lose, rock crush scissors";
  } else if ((playerSelectionLowerCase === "scissors") && (computerSelection === "paper")) {
    return "You win, scissors cut paper";
  } else if ((playerSelectionLowerCase === "paper") && (computerSelection === "scissors")) {
    return "You lose, scissors cut paper";
  } else if ((playerSelectionLowerCase === "paper") && (computerSelection === "rock")) {
    return "You win, paper swallow rock";
  } else {
    return "Try again, input wrong!";
  }
}

const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
//playRound(playerSelection, computerSelection);
//console.log(playRound("rock", "paper"));