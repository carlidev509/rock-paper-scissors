// global variables
let computerScore = 0;
let playerScore = 0;


function computerPlay(){
    /*
        this function is returning either rock,paper or scissors randomly
     */
    const computerChoice = ['rock','paper','scissors'];
    let random_index = Math.round(Math.random() * (computerChoice.length - 1));

    return computerChoice[random_index];
}


function playRound(playerSelection,computerSelection){
    if(playerSelection.toLowerCase().trim() === computerSelection){
        console.log(`This round is a tie`);
        console.log(`Player: ${playerScore}- Computer: ${computerScore}`);
    }
    else if(
        playerSelection.toLowerCase().trim() === 'rock' && computerSelection === 'scissors' ||
        playerSelection.toLowerCase().trim() === 'paper' && computerSelection === 'rock' ||
        playerSelection.toLowerCase().trim() === 'scissors' && computerSelection === 'paper'
    ){
        playerScore++;
        console.log(`You won this round`);
        console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
    }
    else{
        computerScore++;
        console.log(`You lost this round`);
        console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
    }
}


function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Make a choice between 'rock','paper','scissors'").trim();
        playRound(playerSelection,computerPlay());

    }

    if(playerScore > computerScore){
        console.log(`Congratulations! You have won the game`);
        console.log(`\nThe final score is ${playerScore}-${computerScore}`);
    }
    else if(playerScore < computerScore){
        console.log(`Oh no! You have lost the game`);
        console.log(`\nThe finale score is ${playerScore}-${computerScore}`);
    }
    else{
        console.log(`This was a tie game`);
        console.log(`\nThe final score is ${playerScore}-${computerScore}`);
    }
}
game()