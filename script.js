let playerScore = 0
let computerScore = 0
       
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 'Tie!';
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return 'You Lose!';
        
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        return 'You Win!';
        
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return 'You Win!';
        
    }
    else if(playerSelection ==  'scissors' && computerSelection == 'rock'){
        computerScore++;
        return 'You Lose!';
        
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return 'You win!';
        
    }
    
    else{ computerScore++;
        return 'you Lose!';}
   
}

for (let i = 0; i < 5; i++){
let playerSelection = prompt('Pick!').toLowerCase();
let computerSelection = Math.random()
if (computerSelection < 0.33){
    computerSelection = 'rock';
}
else{
    if(computerSelection < 0.66){
        computerSelection = 'paper';
    }
    else{computerSelection = 'scissors';
}
}
console.log('player selection =', playerSelection);
console.log('computer selection =', computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log('Player Score =',playerScore);
console.log('Computer Score =',computerScore);}

function score(playerScore, computerScore){
    if(playerScore == computerScore){
        return 'The game is a draw!!!';

    }
    else if(playerScore > computerScore){
        return 'You win the game!!!'
    }
    else{ return 'You lose the game!!!'}
}

console.log(score())