let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        playerScore++
        computerScore++
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

function game (playerScore, computerScore){
    if (playerScore > computerScore){
        return 'Player wins!!';
    }
    else if (playerScore < computerScore){
        return 'Player Loses!!';
    }
    
    else {return 'Its a tie!!';
    }
    }

for (let i = 0; i < 5; i++){
    let playerSelection = prompt('Pick!').toLowerCase();
    let computerSelection = Math.floor(Math.random()*3)
    function choice(){
        if (computerSelection === 0){
            computerSelection = 'rock';
        }
    
        else if(computerSelection === 1){
            computerSelection = 'paper';
        }
    
        else {computerSelection = 'scissors';
    }}
    choice();
    console.log (playerSelection)
    console.log (computerSelection)
    console.log (playRound(playerSelection, computerSelection))
    console.log (playerScore)
    console.log (computerScore)
}
console.log(game(playerScore, computerScore))
