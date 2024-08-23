console.log("Rock paper scissors is running...");
//Begin Game

//For loop to manage state of game

let playerScore = 0;
let computerScore = 0;
let ties = 0;
let successfulRounds = 0;
const totalRounds = 5;

for (let i = 0; successfulRounds < totalRounds; i++) {

    //Initiate input validation variables
    let validInput = false;



    //Send an input prompt
    let promptChoice = prompt("Enter 'Rock', 'Paper', or 'Scissors' to choose. Enter 'X' to stop the game.");
    
    //Pass to validatePrompt helper function to return true, false or exit

    //Handle "true" return. 
    if (validInput = validatePrompt(promptChoice)){ //If return is true
        console.log("Input Validation: " + validInput);
        playerChoice = promptChoice; //
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
    console.log("Winner is " + winner + "Player chose: " + playerChoice + " Computer chose: " + computerChoice);
    //Handle return for a tie, need to test this returns to main loop correctly
    if (winner === "Tie"){
        console.log("Its a tie! No points awarded.");
        ties++;
        continue; //Skip the increment of successful rounds
    }
    if (winner === "Player"){
        console.log("Player wins!");
        playerScore++;
        successfulRounds++;
        
    }
    if (winner === "Computer"){
        console.log("Computer wins!");
        computerScore++;
        successfulRounds++;
    }




} //End of for loop

console.log("Game concluded - Final Scores");
console.log(`Player: ${playerScore}, Computer: ${computerScore}, Ties: ${ties}`);

if (playerScore > computerScore) {
    console.log("Player wins the game!");
} else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
} else {
    console.log("The game is a draw!");
}

//End of round
//Can package above as a called function with arguments 
//Can be executed and track wins/losses over rounds 
//Requires basic state management



//Helper Functions *   *
//Helper Functions   *
//Helper Functions *   *

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
            return "Tie";
        }
        if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            return "Player";
        } else {
            return "Computer";
        }


}



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