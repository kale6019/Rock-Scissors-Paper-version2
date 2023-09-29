const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')


let userScore = 0
let computerScore = 0 
const maxScore = 5;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    
    choice()
    playRound()
    endGame()
}));

function choice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1){
        computerChoice = 'rock'
    }

    else if(randomNumber === 2){
        computerChoice = 'scissors'
    }

    else { computerChoice = 'paper'}

    computerChoiceDisplay.innerHTML = computerChoice
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
}

function endGame(){
    if (userScore === maxScore){
        resultDisplay.innerHTML = 'You Win the Game!'
        setTimeout(window.alert(), 2000)
    }
    else if (computerScore === maxScore){
        resultDisplay.innerHTML = 'You lose the Game!'
        'Computer Wins the Game!'
        setTimeout(window.alert(), 2000)
    }}

    
