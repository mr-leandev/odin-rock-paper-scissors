console.log("Rock, paper, scissors is running...")
console.log("Hello and welcome to my rock paper scissors console game");
console.log("To play, enter 'y' - any other key will exit");
//Initiate playGame as variable for while container managing runtime
//Purpose: Manage sessions, avoid unwanted console prompts.
const playGame = prompt("To play, enter 'y' - any other key will exit");

    //If input != y , then Game exits to avoid repeated pop-ups

    if (playGame != "y"){
        alert("No worries. Reload the page if you would like to play.")
    }

//Initialise Variables for main game runtime

//Track the number of "5 game rounds" that have been played
let roundsPlayed = 0;
// Count the number of full 5 game rounds won for player/computer
let playerRoundsWon = 0;
let computerRoundsWon = 0;
//Per round score tracking
let playerCurrentScore = 0;
let computerCurrentScore= 0;
//Per round game tracking
let gameNumber = 0; // Current game number 0 - 5
let choiceMade = false; //Track successful choice is made
let playRound = true; //State controller for rounds

    //Main runtime container
    
    while (playGame === "y") {

        //Show initial scoreboard

        printScoreboard();
        
            //Create a game loop
            while (playRound === true){

                //Setup conditions for exiting the game loop when game count is 5
                //Evaluate winner and increment variables

                console.log(gameNumber);

            if (gameNumber >= 5){
                console.log("Game number equal to 5")
                //Pseucode
                //if game number is above 5, means the round is complete
                //evaluate the scores and assign a winner
                //increment win count according to winner
                //reset runtime to print scoreboard, add a "would you like to play a round?" prompt
            //Neither player has a score of 3, automatically a draw
                if (playerCurrentScore <= 2 && computerCurrentScore <=2){
                    console.log("Round tied");
                    roundsPlayed++;
                    console.log("Rounds played " + roundsPlayed);
                    gameNumber = 0;
                    break;
                }
                if (playerCurrentScore >= 3){
                    console.log("Player won!");
                    roundsPlayed++;
                    playerRoundsWon++;
                    gameNumber = 0;
                    console.log("Rounds played " + roundsPlayed);
                    break;
                }
                if (computerCurrentScore >= 3){
                    console.log("Computer won!");
                    computerRoundsWon++;
                    roundsPlayed++;
                    gameNumber = 0;
                    console.log("Rounds played " + roundsPlayed);
                    break;
                }
                


            }

                while (choiceMade === false) {

                    //Send a prompt requesting an input
                    //Enable short-hand entry ["r","p","s"] by parsing prompt response.
                    let promptChoice = prompt("Rock, Paper, or Scissors? Enter r, p, s as your choice. 'x' to terminate.");
                
                    //console.log("promptChoice is: " + promptChoice);

                    //Parse the input to check it is valid, mark as choice made
                    let playerChoice = parsePlayerChoice(promptChoice);

                    //console.log("player choice: " + playerChoice);
                    
                    //Check the choice is a valid choice
                    if (playerChoice === "Rock" || "Paper" || "Scissors"){choiceMade=true;}
                    console.log("choiceMade variable is:" + choiceMade);
                    

                }
                

                    //User choice is valid, calculate the result
                    if (choiceMade === true) {

                        let computerChoice = getComputerChoice();
                        //Evaluate winner and update score variables
                        evaluateChoice(playerChoice, computerChoice);

                        
                        //Increment variables switch case statement
                    }//End of game evaluation
                

    }//Play-round Exit
}//Main Exit

//
//Called helper functions
//

function printScoreboard() {
    console.log("You have played " + roundsPlayed + " Rounds.");
    console.log("You have won " + playerRoundsWon + " of " + roundsPlayed + ".");
    console.log("The computer has won " + computerRoundsWon + " of " + roundsPlayed + ".");
    console.log("Player Current Score: " + playerCurrentScore);
    console.log("Computer Current Score : " + computerCurrentScore);
}


//Parse player choice
function parsePlayerChoice(promptChoice) {

    switch (promptChoice) {
        case "r":
            choiceMade = true;
            return "Rock";
        case "p":
            choiceMade = true;
            return "Paper";
        case "s":
            choiceMade = true;
            return "Scissors";
        case "x":
            playGame = "n";
        default:
            return "Invalid choice";
    }
}


function getComputerChoice(){
    let randomChoice = Math.random();
    console.log("Computer random math is: " + randomChoice);
    switch (true) {
        case randomChoice >= 0 && randomChoice < 0.33:
            return "Rock";
        case randomChoice >= 0.33 && randomChoice < 0.66:
            return "Paper";
        case randomChoice >= 0.66 && randomChoice <= 1:
            return "Scissors";
        default:
            console.log("math error");
            return "Invalid choice";
    }
}

function evaluateChoice(playerChoice, computerChoice) {
    
    //Evaluation for ties
    console.log("evaluating choice");
    console.log("player choice is" + playerChoice);
    console.log("computer choice is" + computerChoice);
    if (playerChoice === computerChoice){ 
        console.log("Player chooses " + playerChoice);
        console.log("Computer chooses " + computerChoice);
        console.log("Tie!!! Choose again!");
        console.log("Your score: " + playerCurrentScore + ". Computer score: " + computerCurrentScore + ".");
        return
    }

    // Evaluation logic for human wins


    //Scissors beat paper (player)
    if (playerChoice === "Scissors" && computerChoice === "Paper"){
        playerCurrentScore++; 
        gameNumber++;
        console.log("Player chooses " + playerChoice);
        console.log("Computer chooses " + computerChoice);
        console.log(playerChoice + " Beats " + computerChoice + "!" + " You win!!! :-)");
        console.log("Your score is: " + playerCurrentScore + ". Computer score is: " + computerCurrentScore + ".");
        
    }   
    //Paper beats rock (player)
    if (playerChoice === "Paper" && computerChoice === "Rock"){
        playerCurrentScore++; 
        gameNumber++;
        console.log("Player chooses " + playerChoice);
        console.log("Computer chooses " + computerChoice);
        console.log(playerChoice + " Beats " + computerChoice + "!" + " You win!!! :-)");
        console.log("Your score is: " + playerCurrentScore + ". Computer score is: " + computerCurrentScore + ".");
        
    }
    //Rock beats scissors (player)
    if (playerChoice === "Rock" && computerChoice === "Scissors"){
        playerCurrentScore++; 
        gameNumber++;
        console.log("Player chooses " + playerChoice);
        console.log("Computer chooses " + computerChoice);
        console.log(playerChoice + " Beats " + computerChoice + "!" + " You win!!! :-)");
        console.log("Your score is: " + playerCurrentScore + ". Computer score is: " + computerCurrentScore + ".");
        
    }

    //Evaluation logic for computer wins

    //Scissors beat paper (player)
    if (computerChoice === "Scissors" && playerChoice === "Paper"){
        computerCurrentScore++; 
        gameNumber++;
        console.log("Player chooses " + playerChoice);
        console.log("Computer chooses " + computerChoice);
        console.log(computerChoice + " Beats " + playerChoice + "!" + " Computer wins!!! :-(");
        console.log("Your score is: " + playerCurrentScore + ". Computer score is: " + computerCurrentScore + ".");
        
    }   
    //Paper beats rock (player)
    if (computerChoice === "Paper" && playerChoice === "Rock"){
        computerCurrentScore++; 
        gameNumber++;
        console.log("Player chooses " + playerChoice);
        console.log("Computer chooses " + computerChoice);
        console.log(computerChoice + " Beats " + playerChoice + "!" + " Computer wins!!! :-(");
        console.log("Your score is: " + playerCurrentScore + ". Computer score is: " + computerCurrentScore + ".");
        
    }
    //Rock beats scissors (player)
    if (computerChoice === "Rock" && playerChoice === "Scissors"){
        computerCurrentScore++; 
        gameNumber++;
        console.log("Player chooses " + playerChoice);
        console.log("Computer chooses " + computerChoice);
        console.log(computerChoice + " Beats " + playerChoice + "!" + " Computer wins!!! :-(");
        console.log("Your score is: " + playerCurrentScore + ". Computer score is: " + computerCurrentScore + ".");
        
    }

    //(Remaining cases to handle)
    //Scissors loses to rock
    //Scissors loses to paper
    //Rock loses to paper

    return

}
    
