console.log("Hello, World");

function getComputerChoice(){
    // create logic for computer to select rock, paper or scissors
    // 1) generate a random number between 0-2 and store that number in a variable
    // 0 = rock | 1 = paper | 2 = scissors
    // 3) create an if-else branch to return the selection of the computer

    // step 1:
    let rng = Math.floor(Math.random() * 3);
    
    // step 2:
    if (rng == 0){
        return "rock";
    }
    else if (rng == 1){
        return "paper";
    }
    else if (rng == 2){
        return "scissors";
    }

}

function getHumanChoice(){
    // create logic to get the user input
    // 1) prompt user to input their choice
    // 2) return the input in lowercase
    
    // step 1:
    let input = prompt("Choose: Rock, Paper, or Scissors");

    // step 2:
    return input.toLowerCase();

}

let humanScore = 0;
let computerScore = 0;

let computerSelection;
let humanSelection;

function playRound(computerSelection, humanSelection){
    // create logic to compute the wonner between computer and human selection
    // 1) create an if-else branch comparing the 2 choices and return proper message 
    // cases: rock-rock, rock-paper, rock-scissors | paper-paper, paper-rock, paper-scissors | scissors-scissors, scissors-rock, scissors-paper
    const R = "rock";
    const P = "paper";
    const S = "scissors";

    console.log(`You: ${humanSelection.toUpperCase()}\nvs.\nComputer: ${computerSelection.toUpperCase()}`);

    // step 1:
    if (humanSelection === R && computerSelection === R){
        console.log("TIE! Rock matches Rock");
    }
    else if (humanSelection === R && computerSelection === P){
        console.log("You LOSE! Rock loses to Paper");
        computerScore++;
    }
    else if (humanSelection === R && computerSelection === S){
        console.log("You WIN! Rock beats Scissors");
        humanScore++;
    }

    if (humanSelection === P && computerSelection === P){
        console.log("TIE! Paper matches Paper");
    }
    else if (humanSelection === P && computerSelection === R){
        console.log("You WIN! Paper beats Rock");
        humanScore++;
    }
    else if (humanSelection === P && computerSelection === S){
        console.log("You LOSE! Paper loses to scissors");
        computerScore++;
    }

    if (humanSelection === S && computerSelection === S){
        console.log("TIE! Scissors match Scissors");
    }
    else if (humanSelection === S && computerSelection === R){
        console.log("You LOSE! Scissors lose to Rock");
        computerScore++;
    }
    else if (humanSelection === S && computerSelection === P){
        console.log("You WIN! Scissors beat Paper");
        humanScore++;
    }

}

function playGame(){

    for (i=0; i<5; i++){
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
    }
    console.log(`RESULTS: ${humanScore} | ${computerScore}`);

    if (humanScore > computerScore){
        console.log("YOU WIN!");
    }
    else if (computerScore > humanScore){
        console.log("YOU LOSE!");
    }
    else {
        console.log("MATCH TIED!");
    }

}

playGame();