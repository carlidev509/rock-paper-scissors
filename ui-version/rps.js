let playerScore = 0;
let computerScore = 0;
let counter = 0; // created this variable for counting to 5, 1 will be added to it each time player clikc on either rock,paper or scissors

function computerPlay(){
    /*  
        this function is returning either rock,paper or scissors randomly
    */
   const computerChoice = ['rock','paper','scissors'];
   let random_index = Math.round(Math.random() * (computerChoice.length - 1));
   return computerChoice[random_index];
}

// console.log(computerPlay())

function playRound(playerSelection,computerSelection){

    /*
        this function is for playing each round
        and adding 1 to the winner's score
        */

       if(playerSelection.toLowerCase().trim() === computerSelection.toLowerCase().trim()){
        return `It is a tie! Both you and the computer chose ${computerSelection.toUpperCase()}`;
    }
    
    if(
        playerSelection.toLowerCase().trim() === 'rock' && computerSelection.toLowerCase().trim() === 'scissors' ||
        playerSelection.toLowerCase().trim() === 'paper' && computerSelection.toLowerCase().trim() === 'rock' ||
        playerSelection.toLowerCase().trim() === 'scissors' && computerSelection.toLowerCase().trim() === 'paper'
    ){
        playerScore++;
        return `You won this round! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    }
    else{
        computerScore++;
        return `You lost this round! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    }
}


// dom manipulation

let player_score = document.querySelector('#plScore');
let computer_score = document.querySelector('#computer_score');

// player_score.textContent += playerScore;
// computer_score.textContent += computerScore;
let player_choices = document.querySelectorAll('.player_choice');
let computer_choices = document.querySelectorAll('.computer_choice');
let msgBoard = document.querySelector('.msgboard');
// for(let i = 0; i < player_choices.length; i++)
// console.log(player_choices[i].value)


function game(){
    
    player_choices.forEach(player_choice =>{
        
        player_choice.addEventListener('click', e =>{
            counter += 1;
            /*for(let i = 0; i < computer_choices.length; i++){
                computer_choices[i].style.transform = "scale(1.2)";
            }*/
            let randomChoice = computerPlay();

            





            msgBoard.textContent = `${playRound(e.target.value,randomChoice)}`;
            player_score.textContent =`Score: ${playerScore}`;
            computer_score.textContent = `Score: ${computerScore}`;

            if(counter == 5){
                if(computerScore > playerScore){
                    msgBoard.textContent = `Oh No! The computer won ${computerScore}-${playerScore}`;
                    msgBoard.innerHTML += '<p>Please reload the page to play again</p>';
                    off_btn();
                }
                else if(playerScore > computerScore){
                    msgBoard.textContent = `Congratulations! You won ${playerScore}-${computerScore}`;
                    msgBoard.innerHTML += '<p>Please reload the page to play again</p>';
                    off_btn();
                }
                else{
                    msgBoard.textContent = `It is a tie game ${playerScore}-${computerScore}`;
                    msgBoard.innerHTML += '<p>Please reload the page to play again</p>';
                        off_btn();
                }
            }
            
        })
    });



}

function off_btn(){
    /* this function is disabling all payer buttons each time counter reach 5 */
    player_choices.forEach(plChoice =>{
        plChoice.disabled = true;
    })

    computer_choices.forEach(cpChoice =>{
        cpChoice.disabled = true;
    })
}

game()