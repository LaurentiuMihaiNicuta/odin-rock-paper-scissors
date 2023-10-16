


let playerRockIcon = document.querySelector('#rock-player-selection');
let playerPaperIcon = document.querySelector('#paper-player-selection');
let playerScissorsIcon = document.querySelector('#scissors-player-selection');

let computerRockIcon = document.querySelector('#rock-computer-selection');

function getRandom(){
    return Math.floor(Math.random() * 3 );
} 

function getComputerChoice(){
    let symbolChoice;
    switch(getRandom()){
        case 0: symbolChoice ="rock";break;
        case 1: symbolChoice ="paper";break;
        case 2: symbolChoice ="scissors";break;
    }
    return symbolChoice;
}


playerRockIcon.addEventListener('click', function () {

    computerSelection = getComputerChoice();
    playRound("rock",computerSelection);
    console.log(computerSelection);

});

playerPaperIcon.addEventListener('click',function(){
    selectSelection("paper");
    computerSelection = getComputerChoice();


    console.log(playerSelection);
    console.log(computerSelection);
});

playerScissorsIcon.addEventListener('click',function(){
    selectSelection("scissors");
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    console.log(computerSelection);
});

function playRound(playerSelection,computerSelection){
   
    let result;

    if (playerSelection == "rock" && computerSelection == "rock") {
        result ="Rock and Rock! It's a tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        result = "Paper and Paper!It's a tie";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "You lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You lose! Rock beats scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You Win! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        result = "Scissors and Scissors!It's a tie";
    }
    console.log(result)
}








