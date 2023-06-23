let choices = ['resurrection stone', 'elder wand', 'invisibility cloak'];
let playerImage = document.getElementById('user-side-image');
let computerImage = document.getElementById('computer-side-image');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
let result = document.getElementById('decision');
let buttons = document.getElementsByTagName('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        let playerChoice = this.getAttribute('data-type');
        runGame(playerChoice);
    })
}

function runGame(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.webp`;
    playerImage,alt = choices[playerChoice]
    
    let computerChoice = Math.floor(Math.random() * 3)
    computerChoice.src = `assets/images/${choices[computerChoice]}.webp`;
    computerChoice.alt = choices[computerChoice];

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);
    
    updateScores(result)
}

function checkWinner() {

}