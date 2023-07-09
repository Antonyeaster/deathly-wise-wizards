let choices = ["resurrection stone", "elder wand", "invisibility cloak"];
let playerImage = document.getElementById("user-side-image");
let computerImage = document.getElementById("computer-side-image");
let result = document.getElementById("decision");
let buttons = document.getElementsByClassName("selected");
let modal = document.getElementById("my-rules-modal");
let gameRuleBtn = document.getElementById("my-rules-btn");
let closeBtn = document.getElementsByClassName("close")[0];
let stone = document.getElementById("resurrection-stone-hover");
let wand = document.getElementById("elder-wand-hover");
let cloak = document.getElementById("invisibility-cloak-hover");
let choicesBtn = document.getElementById("modal-choices-btn");
let modalImage = document.getElementById("modal-images");

/**
 * To add event listener to game choice buttons 
 * and run player choice.
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-type");
        runGame(playerChoice);
    });
}

/**
 * The main function that is called when a player clicks on their choice, 
 * which then creates a random selection for the computer between 0 - 2. 
 */
function runGame(playerChoice) {
    playerImage = document.querySelector("#user-image");
    playerImage.src = `assets/images/${choices[playerChoice].replaceAll(' ', '-')}.webp`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);
    computerImage = document.querySelector("#computer-image");
    computerImage.src = `assets/images/${choices[computerChoice].replaceAll(' ', '-')}.webp`;
    computerChoice.alt = choices[computerChoice];

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);

    updateScores(result);
}
/**
 * To check who won the game and use the increment score function.
 */
function updateScores(result) {
    if (result === "user") {
        incrementUserScore();
    } else if (result === "computer") {
        incrementComputerScore();
    }
}

/**
 * To check who is the winner with the possible 
 * outcomes listed individually.
 */
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === "resurrection stone" && computerChoice === "elder wand") {
        result.innerHTML = "WOW, you beat the Dark Lord";
        return "user";
    } else if (playerChoice === "elder wand" && computerChoice === "resurrection stone") {
        result.innerHTML = "The Dark Lord has outsmarted you this time, try again!";
        return "computer";
    } else if (playerChoice === "resurrection stone" && computerChoice === "invisibility cloak") {
        result.innerHTML = "The Dark Lord is wise! Try harder next time!";
        return "computer";
    } else if (playerChoice === "invisibility cloak" && computerChoice === "resurrection stone") {
        result.innerHTML = "That's totally barbaric! Well done, You win.";
        return "user";
    } else if (playerChoice === "elder wand" && computerChoice === "invisibility cloak") {
        result.innerHTML = "Now that's how you swish and flick! Great work, you win!";
        return "user";
    } else if (playerChoice === "invisibility cloak" && computerChoice === "elder wand") {
        result.innerHTML = "The Dark Lord rises again! Try again";
        return "computer";
    } else if (playerChoice === computerChoice)
    result.innerHTML = "I guess a Draw is ok..... FOR A MUGGLE! Let's beat the Dark lord";
}

/**
 * Gets the score for the user and increments by 1 when the user wins.
 */
function incrementUserScore() {
    let previousScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++previousScore;
}

/**
 * Gets the score for the computer and increments by 1 when the computer wins.
 */
function incrementComputerScore() {
    let previousScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++previousScore;
}

/**
 * For modal use, when the game rules button is clicked 
 * the display of the modal is then visable.
 */
gameRuleBtn.onclick = function () {
    modal.style.display = "block";
    this.setAttribute('aria-hidden', false);
};

/**
 * For modal use, when the X button is clicked 
 * the display of the modal is then closed and display goes back to none.
 */
closeBtn.onclick = function () {
    modal.style.display = "none";
    this.removeAttribute('aria-hidden', true);
};

/**
 * To allow the user to click anywhere outside the modal to close
 * it and revert the display back to none.
 */
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        setAttribute('aria-hidden', true)
    }
};

/**
 * For page load modal to be displayed when the site is loaded
 */
window.onload = function () {
    document.getElementById("play-game-modal-btn").onclick = function () {
    document.getElementById("page-load-modal").style.display = "none";
    };
};

/**
 * for images inside game rules modal, will display when choices button is clicked.
 */
choicesBtn.onclick = function() {
    modalImage.style.display = "block";
    choicesBtn.style.display = "none";
};

/**
 * Add hover / tap over image for Invisibility Cloak telling the user
 * what they are in the game rules modal
 */
stone.onmouseover = function () {
    document.getElementById("stone-hover").style.display = "block";
};

stone.onmouseout = function () {
    document.getElementById("stone-hover").style.display = "none";
};

/**
 * Add hover / tap over image for Elder Wand telling the user
 * what they are in the game rules modal
 */
wand.onmouseover = function () {
    document.getElementById("wand-hover").style.display = "block";
};

wand.onmouseout = function () {
    document.getElementById("wand-hover").style.display = "none";
};

/**
 * Add hover / tap over image for Invisibility Cloak telling the user
 * what they are in the game rules modal
 */
cloak.onmouseover = function () {
    document.getElementById("cloak-hover").style.display = "block";
};

cloak.onmouseout = function () {
    document.getElementById("cloak-hover").style.display = "none";
};
