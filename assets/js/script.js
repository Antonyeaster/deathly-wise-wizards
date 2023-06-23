// Wait until DOM is completly loaded before running game
// Get button elements and add event listeners

document.addEventListener(DOMContentLoaded, function() {
    let buttons = document.getElementsByTagName("button");

    for (button of buttons) {
        button.addEventListener("click", function() {
        let playerChoice = this.getAttribue(data-type);
        runGame(playerChoice);
    })
  }
}



function runGame() {

}

function checkAnswer() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {
    
}