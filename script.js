"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

function setNumber(number) {
    document.querySelector(".number").textContent = number;
}

function setScore(score) {
    document.querySelector(".score").textContent = score;
}

function setHighScore(highScore) {
    document.querySelector(".highscore").textContent = highScore;
}

//while clicking
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    //if no number is entered
    if (!guess) {
        displayMessage("No number Entered!");
    }

    //if the correct number is entered
    else if (guess === secretNumber) {
        displayMessage("Correct number!");

        if (score > highScore) {
            highScore = score;

            setHighScore(highScore);
        }
        setNumber(secretNumber);

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";
    }

    //if guess is not secret number (refactored)
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "Too high..." : "Too low...");

            score--;
            setScore(score);
        } else {
            displayMessage("You lost the game");

            setScore(0);
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing...");
    setScore(score);
    setNumber("?");

    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
