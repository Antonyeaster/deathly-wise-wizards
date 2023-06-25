let choices = ['resurrection stone', 'elder wand', 'invisibility cloak'];
let playerImage = document.getElementById('user-side-image');
let computerImage = document.getElementById('computer-side-image');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
let result = document.getElementById('decision');
let buttons = document.getElementsByClassName('selected');

for (let button of buttons) {
    button.addEventListener('click', function() {
        let playerChoice = this.getAttribute('data-type');
        runGame(playerChoice);
    })
}

/**
 * The main function that is called when a player clicks on their choice, 
 * which then creates a random selection for the computer between 0 - 2. 
 */

function runGame(playerChoice) {
    playerImage = document.querySelector("#user-image");      
    playerImage.src = `assets/images/${choices[playerChoice].replaceAll(' ','-')}.webp`;
    playerImage.alt = choices[playerChoice]
    
    let computerChoice = Math.floor(Math.random() * 3)
    computerImage = document.querySelector("#computer-image");
    computerImage.src = `assets/images/${choices[computerChoice].replaceAll(' ','-')}.webp`;
    computerChoice.alt = choices[computerChoice];

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);
    
    updateScores(result)
}

function updateScores(result) {
    
    
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === 'resurrection stone' && computerChoice === 'elder wand'){
        result.innerHTML = 'WOW, you beat the Dark Lord';
        return 'player'
    } else if (playerChoice === 'elder wand' && computerChoice === 'resurrection stone') {
        result.innerHTML = 'The Dark Lord has outsmarted you this time, Try again!'
    }    
}