console.log("Rock paper scissors is running...");
//Begin Game

//For loop to manage state of game

let playerScore = 0;
let computerScore = 0;
let ties = 0;
const rounds = 5;

for (let i = 0; i < rounds; i++) {

    //Initiate input validation variables
    let validInput = false;
    let playerChoice = "";



    //Send an input prompt
    let promptChoice = prompt("Enter 'Rock', 'Paper', or 'Scissors' to choose. Enter 'X' to stop the game.");
    
    //Pass to validatePrompt helper function to return true, false or exit

    //Handle "true" return. 
    if (validInput = validatePrompt(promptChoice)){ //If return is true
        console.log("Input Validation: " + validInput);
        let playerChoice = promptChoice; //
        console.log("playerChoice: " + playerChoice);
    }

    //Handle "exit" return
    if (validInput === "exit"){
        console.log("Game has been terminated");
        break;
    }
    console.log("Retrieving computer choice");

    let computerChoice = getComputerChoice(Math.random());
    console.log("Computer choice: " + computerChoice);

    console.log("Evaluating game: Win/Lose/Tie")
    let winner = (evaluateGame(playerChoice, computerChoice));
    console.log("Player chose: " + playerChoice + " Computer chose: " + computerChoice);
    //Handle return for a tie, need to test this returns to main loop correctly
    if (winner === "tie"){
        console.log("Its a tie! No points awarded.");
        ties++;
        rounds++; //add to rounds to increase iteration count
    }
    if (winner === "Player"){
        console.log("Player wins!");
        playerScore++;
        
    }
    if (winner === "Computer"){
        console.log("Computer wins!");
        computerScore++;
    }




}//End of round


function getComputerChoice(randomChoice){
    console.log("Computer random math is: " + randomChoice);
    switch (true){
        case (randomChoice >= 0 && randomChoice <= 0.33):
            return "Rock";
        case (randomChoice >= 0.33 && randomChoice <= 0.66):
            return "Paper";
        case (randomChoice >= 0.66 && randomChoice <= 1):
            return "Scissors";
        default: 
            console.log("Math Error");
            exit;
    }
}

function evaluateGame(playerChoice, computerChoice){
        if (playerChoice === computerChoice){
            return "tie";
        }
        if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            return "player";
        } else {
            return "computer";
        }


}




//Possible to make a for loop to categorise winners. supply it the two variables 
//have it designate a "winner", pull the winner (player/computer) to minimise logic
/*

List combinations

*/

//Helper Functions *   *
//Helper Functions   *
//Helper Functions *   *


function validatePrompt(promptChoice){

    //Debugging Statements
    console.log("validating response...");
    console.log("User choice was '" + promptChoice + "' .")


    switch (promptChoice) {

        case "Rock":
        case "Paper":
        case "Scissors":
            console.log("Player choice is: " + promptChoice);
            return true;

        case "X":
            console.log("Player has chosen to exit the game");
            break;

        default:
            console.log("Invalid choice. Please try again.");
            return false;

    }



}