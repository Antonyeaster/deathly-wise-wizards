const choices = ["resurrection stone", "elder wand", "invisibility cloak"];
const result = document.getElementById("decision");
const buttons = document.getElementsByClassName("selected");
const modal = document.getElementById("my-rules-modal");
const gameRuleBtn = document.getElementById("my-rules-btn");
const closeBtn = document.getElementsByClassName("close")[0];
const stone = document.getElementById("resurrection-stone-hover");
const wand = document.getElementById("elder-wand-hover");
const cloak = document.getElementById("invisibility-cloak-hover");
const choicesBtn = document.getElementById("modal-choices-btn");
const modalImage = document.getElementById("modal-images");
const playGameBtn = document.getElementById("play-game-modal-btn");
const pageLoadModal = document.getElementById("page-load-modal");
const stoneHover = document.getElementById("stone-hover");
const wandHover = document.getElementById("wand-hover");
const cloakHover = document.getElementById("cloak-hover");
const playerPreviousScore = document.getElementById("player-score");
const computerPreviousScore = document.getElementById("computer-score");
const pageLoadGameRulesBtn = document.getElementById("page-load-game-rules-btn");


document.addEventListener("DOMContentLoaded", function () {

    let playerImage = document.getElementById("user-side-image");
    let computerImage = document.getElementById("computer-side-image");

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
        let previousScore = parseInt(playerPreviousScore.innerText);
        playerPreviousScore.innerText = ++previousScore;
    
    }

    /**
     * Gets the score for the computer and increments by 1 when the computer wins.
     */
    function incrementComputerScore() {
        let previousScore = parseInt(computerPreviousScore.innerText);
        computerPreviousScore.innerText = ++previousScore;
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
     * For modal use, when game rules button is clicked 
     * inside page load modal.
     */
    pageLoadGameRulesBtn.onclick = function () {
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
            this.setAttribute('aria-hidden', true);
        }
    };

    /**
     * For page load modal to be displayed when the site is loaded
     */
    window.onload = function () {
        playGameBtn.onclick = function () {
            pageLoadModal.style.display = "none";
            this.setAttribute("aria-hidden", true);
        };
    };

    /**
     * for images inside game rules modal, will display when choices button is clicked.
     */
    choicesBtn.onclick = function () {
        modalImage.style.display = "block";
        choicesBtn.style.display = "none";
    };

    /**
     * Add hover / tap over image for Invisibility Cloak telling the user
     * what they are in the game rules modal
     */
    stone.onmouseover = function () {
        stoneHover.style.display = "block";
    };

    stone.onmouseout = function () {
        stoneHover.style.display = "none";
    };

    /**
     * Add hover / tap over image for Elder Wand telling the user
     * what they are in the game rules modal
     */
    wand.onmouseover = function () {
        wandHover.style.display = "block";
    };

    wand.onmouseout = function () {
        wandHover.style.display = "none";
    };

    /**
     * Add hover / tap over image for Invisibility Cloak telling the user
     * what they are in the game rules modal
     */
    cloak.onmouseover = function () {
        cloakHover.style.display = "block";
    };

    cloak.onmouseout = function () {
        cloakHover.style.display = "none";
    };

});