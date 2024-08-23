console.log("hello world,")

//Define State controller

//Pseudocode**
//Track player Choice
//When player choice is selected, generate computer choice. 
//math random, divide into 3rds with each section representing a choice
//evaluate which choice wins
//need to add evaluation, probably neater using a called helper function
//track score, break limit of 5 rounds, or first to 3. 


    
    console.log("welcome to my rock paper scissors console game");
    console.log("To play, enter 'y' - any other key will exit");
    //If you want to play, (to avoid unwanted console popups)
    //Toggle variable to manage runtime, if playGame return is no, terminate function
    //May need to introduce while statements to handle this
    const playGame = prompt("To play, enter 'y' - any other key will exit");
    console.log("playGame is: " + playGame);
    while (playGame === "y") {

//If game is not being played, print console message
        if (playGame != "y"){
            console.log("No worries. Reload the page if you would like to play.")
        }

        //Initialise Variables
        //Track the number of "5 game rounds" that have been played
        let roundsPlayed = 0;
        //
        let playerRoundsWon = 0;
        let computerRoundsWon = 0;
        //Track the win 
        let playerGamesWon = 0;
        let computerGamesWon = 0;

        printScoreboard();

//Game is being played
//score must be initialised
//rounds can be incremented at the end of game loop

        
        //Create a game loop
        while (playRound === TRUE){

 


    

    //Enable short-hand entry ["r","p","s"] by parsing prompt response.
    let promptChoice = prompt("Rock, Paper, or Scissors? Enter r, p, s as your choice");
    let choiceMade = ""; //Required for state management
    let invalidChoice = "" //Required to handle invalid choices
   
    let playerChoice = parsePlayerChoice(promptChoice);
    let computerChoice = Math.random();
    evaluateChoice(playerChoice, computerChoice);





    

//Execute State Controller

//
        }
    }


    



//Called helper functions


function printScoreboard() {
    console.log("Rounds Played: " + roundsPlayed);
    console.log("Player Won: " + playerRoundsWon);
    console.log("Computer Won: " + computerRoundsWon);
    console.log("Player Current Score: " + playerGamesWon);
    console.log("Computer Current Score : " + computerGamesWon);
}

//Parse player choice
function parsePlayerChoice() {
    let playerChoice = prompt("Choose Rock, Paper or Scissors: r, p, s. 'x' to exit.");
    switch (playerChoice) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
        case "x":
            playGame = "n";
        default:
            return "Invalid choice";
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

