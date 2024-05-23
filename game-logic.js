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