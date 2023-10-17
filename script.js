


let playerRockIcon = document.querySelector('#rock-player-selection');

let playerPaperIcon = document.querySelector('#paper-player-selection');
let playerScissorsIcon = document.querySelector('#scissors-player-selection');

let outputText = document.querySelector('#output-text')

let computerRockIcon = document.querySelector('#rock-computer-selection');
let computerPaperIcon = document.querySelector('#paper-computer-selection');
let computerScissorsIcon = document.querySelector('#scissors-computer-selection')


let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score')
let computerScoreValue= 0;
let playerScoreValue= 0;


let img = document.createElement('img');
img.className = "icon";




let resetButton = document.createElement('button');
resetButton.textContent= "PLAY AGAIN";
resetButton.className = " reset-button";


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

resetButton.addEventListener('click', function(){
    reset();
});

playerRockIcon.addEventListener('click', function () {

    resetBorderColorGreen(playerPaperIcon);
    resetBorderColorGreen(playerScissorsIcon);
    computerSelection = getComputerChoice();
    playRound("rock",computerSelection);
    console.log(computerSelection);
    changeComputerIcon();
    changeBorderColorGreen(playerRockIcon);
    check();

});

playerPaperIcon.addEventListener('click',function(){
    resetBorderColorGreen(playerRockIcon);
    resetBorderColorGreen(playerScissorsIcon);
    computerSelection = getComputerChoice();
    playRound("paper",computerSelection);
    console.log(computerSelection);
    changeComputerIcon()
    changeBorderColorGreen(playerPaperIcon);
    check();
});

playerScissorsIcon.addEventListener('click',function(){

    resetBorderColorGreen(playerRockIcon);
    resetBorderColorGreen(playerPaperIcon);
    computerSelection = getComputerChoice();
    playRound("scissors",computerSelection);
    console.log(computerSelection);
    changeComputerIcon()
    changeBorderColorGreen(playerScissorsIcon);
    check();
});

function playRound(playerSelection,computerSelection){
   
   

    if (playerSelection == "rock" && computerSelection == "rock") {
        outputText.textContent ="Rock and Rock! It's a tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {

        outputText.textContent = "You lose! Paper beats Rock";
        computerScoreValue= computerScoreValue + 1;
        console.log(computerScoreValue);
        computerScore.textContent=" PC :" + computerScoreValue;

    } else if (playerSelection == "rock" && computerSelection == "scissors") {

        outputText.textContent = "You win! Rock beats Scissors";
        playerScoreValue = playerScoreValue +1;
        playerScore.textContent = " YOU : " + playerScoreValue;

    } else if (playerSelection == "paper" && computerSelection == "rock") {

        outputText.textContent = "You win! Paper beats Rock";
        playerScoreValue = playerScoreValue +1;
        playerScore.textContent = " YOU : " + playerScoreValue;

    } else if (playerSelection == "paper" && computerSelection == "paper") {
        outputText.textContent = "Paper and Paper!It's a tie";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {

        outputText.textContent = "You lose! Scissors beats Paper";
        computerScoreValue= computerScoreValue + 1;
        console.log(computerScoreValue);
        computerScore.textContent=" PC :" + computerScoreValue;

    } else if (playerSelection == "scissors" && computerSelection == "rock") {

        outputText.textContent = "You lose! Rock beats scissors!";
        computerScoreValue= computerScoreValue + 1;
        console.log(computerScoreValue);
        computerScore.textContent=" PC :" + computerScoreValue;

    } else if (playerSelection == "scissors" && computerSelection == "paper") {

        outputText.textContent = "You Win! Scissors beats Paper";
        playerScoreValue = playerScoreValue +1;
        playerScore.textContent = " YOU : " + playerScoreValue;

    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        outputText.textContent = "Scissors and Scissors!It's a tie";
    }


}

function check(){
    if(computerScoreValue==5){
        outputText.textContent = "Round finished!You lose!"
        outputText.appendChild(resetButton);
    }else if(playerScoreValue==5){
        outputText.textContent = "Round finished!You won!"
        outputText.appendChild(resetButton);
    }

    
}

function reset(){
    outputText.textContent="Let's start the game!"
     computerScoreValue= 0;
     playerScoreValue= 0;
     computerScore.textContent = " PC : "
     playerScore.textContent = " YOU : "
     
     computerPaperIcon.innerHTML = ' ';
     computerRockIcon.innerHTML = ' ';
     computerScissorsIcon.innerHTML = ' ';
     
     resetBorderColorRed(computerPaperIcon);
     resetBorderColorRed(computerScissorsIcon);
     resetBorderColorRed(computerRockIcon);

     resetBorderColorGreen(playerRockIcon);
     resetBorderColorGreen(playerPaperIcon);
     resetBorderColorGreen(playerScissorsIcon);
   

}


function changeComputerIcon(){
    if(computerSelection == "rock"){
        resetBorderColorRed(computerPaperIcon);
        resetBorderColorRed(computerScissorsIcon);
        img.src= 'images/rock.png';
        computerRockIcon.appendChild(img);
        changeBorderColorRed(computerRockIcon);
    }else if(computerSelection =="paper"){
        resetBorderColorRed(computerRockIcon);
        resetBorderColorRed(computerScissorsIcon);
        img.src='images/paper.png';
        computerPaperIcon.appendChild(img);
        changeBorderColorRed(computerPaperIcon);
    }else if(computerSelection =="scissors"){
        resetBorderColorRed(computerPaperIcon);
        resetBorderColorRed(computerRockIcon);
        img.src='images/scissors.png';
        computerScissorsIcon.appendChild(img);
        changeBorderColorRed(computerScissorsIcon);
    }
}

function changeBorderColorGreen(playerIcon){
    playerIcon.style.border = '4px solid #7bff2f';
}

function changeBorderColorRed(computerIcon){
    computerIcon.style.border ='4px solid #ff8ba7';
}

function resetBorderColorGreen(playerIcon){
    playerIcon.style.border = '4px solid #9cd3d3';
}

function resetBorderColorRed(computerIcon){
    computerIcon.style.border = '4px solid #9cd3d3';
}