const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')
let computerChoiceSymbol 
let userChoiceSymbol
let playAgainButton = document.getElementById('play-again')

const removeRock = document.getElementById('rock')
const removePaper = document.getElementById('paper')
const removeScissors = document.getElementById('scissors')

let userScore = 0
let computerScore = 0 
const maxScore = 5;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    if(userChoice === 'rock'){
        userChoiceSymbol = '✊'
    }

    else if(userChoice === 'scissors'){
        userChoiceSymbol = '✌️'
    }

    else {userChoice === 'paper'
        userChoiceSymbol = '✋'
}
userChoiceDisplay.innerHTML = userChoiceSymbol
    userChoiceDisplay.style.fontSize = '40px'
    choice()
    playRound()
}));

playAgainButton.addEventListener('click', resetGame);

function choice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1){
        computerChoice = 'rock'
        computerChoiceSymbol = '✊'
    }

    else if(randomNumber === 2){
        computerChoice = 'scissors'
        computerChoiceSymbol = '✌️'
    }

    else { computerChoice = 'paper'
           computerChoiceSymbol = '✋'
}

    computerChoiceDisplay.innerHTML = computerChoiceSymbol
    computerChoiceDisplay.style.fontSize = '40px'
}

function playRound(){
    if(userChoice == computerChoice){

        result = 'Tie!';
    }
    else if(userChoice == 'rock' && computerChoice == 'paper'){
        computerScore++;
        result = 'You Lose!';
        
    }
    else if (userChoice == 'rock' && computerChoice == 'scissors'){
        userScore++;
        result = 'You Win!';
        
    }
    else if(userChoice == 'scissors' && computerChoice == 'paper'){
        userScore++;
        result = 'You Win!';
        
    }
    else if(userChoice ==  'scissors' && computerChoice == 'rock'){
        computerScore++;
        result = 'You Lose!';
        
    }
    else if(userChoice == 'paper' && computerChoice == 'rock'){
        userScore++;
        result = 'You win!';
        
    }
    
    else{ computerScore++;
        result = 'you Lose!';}
    
   resultDisplay.innerHTML = result
   userScoreDisplay.innerHTML = userScore
   computerScoreDisplay.innerHTML = computerScore

   if (userScore === maxScore) {
    resultDisplay.innerHTML = 'You Win the Game!';
    removePaper.style.display = 'none'
    removeRock.style.display = 'none'
    removeScissors.style.display = 'none'
    playAgainButton.style.display = 'block';

    
} else if (computerScore === maxScore) {
    resultDisplay.innerHTML = 'Computer Wins the Game!';
    playAgainButton.style.display = 'block';
    removePaper.style.display = 'none'
    removeRock.style.display = 'none'
    removeScissors.style.display = 'none'

}
}

function resetGame(){
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.innerHTML = 0;
    computerScoreDisplay.innerHTML = 0;
    resultDisplay.innerHTML = 0;
    userChoiceDisplay.innerHTML = ''
    computerChoiceDisplay.innerHTML = ''
    removePaper.style.display = 'block'
    removeRock.style.display = 'block'
    removeScissors.style.display = 'block'
    playAgainButton.style.display = 'none';
}
