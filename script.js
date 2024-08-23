console.log("hello world")

//Define State controller
function playGame() {
//Pseudocode**
//Track player Choice
//When player choice is selected, generate computer choice. 
//math random, divide into 3rds with each section representing a choice
//evaluate which choice wins
//need to add evaluation, probably neater using a called helper function
//track score, break limit of 5 rounds, or first to 3. 





    let playerChoice = getPlayerChoice();

    let computerChoice = Math.random();





    
}
//Execute State Controller
playGame();
//



function getPlayerChoice(){
    let playerChoice = prompt("Rock, Paper, Scissors? Enter R, P, S");
    if (playerChoice === "R"){
        return "Rock"
    }
    else if (playerChoice === "P") {
        return "Paper"
    }
    else if (playerChoice === "S") {
        return "Scissors"
    }
}

function getComputerChoice(){
    let randomChoice = Math.random();

    //Evaluate if or switch statements. if 
}



function evaluateChoice(playerChoice, computerChoice) {
    let winner = "";
    return 
}

