// let computerChoices = ["rock", "paper", "scissors"];

// function getComputerChoice() {
//  console.log(computerChoices[(Math.floor(Math.random() * computerChoices.length))]);
// }

// getComputerChoice()

//function playGame(playerSelection, computerSelection) {
//}

//Upper here is kinda just google and copy paste code, I don't really understand what's going on. 

function getComputerChoice() {
  //  getRandom();  
  
  let computerChoice = Math.random()

  if (computerChoice >= 0 && computerChoice <= 0.33) {
    computerChoice = "rock"
  } else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
    computerChoice = "paper"
  } else {
    computerChoice = "scissors"
  }

  console.log(computerChoice)
}

//OMFG I FUCKING MAKE THIS HAPPEN LIAO!!! OH MY GOD!!! OFC GOT A BIT OF ACCIDENTALLY LOOK AT HOW OTHERS DO IT LAST WEEK, BUT AT LEAST THIS IS I MAKE MYSELF DE! I UNDERSTAND THE CODE WHAT'S IT DOING! 