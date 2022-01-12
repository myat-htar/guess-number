"use strict";
let correctNumber = Math.trunc(Math.random() * 30) + 1;
let score = 20;
let highscore = 0;
let again = document.querySelector("#again");
let check = document.querySelector("#check");
let input = document.querySelector("input[type='number']");
let beforePseudo = document.querySelector(".line");
let displayMessage = function (text) {
  document.querySelector(".start-guessing").textContent = text;
};

check.addEventListener("click", function () {
  let numInput = Number(input.value);
  if (!numInput) displayMessage("Please enter number");
  else if (numInput !== correctNumber) {
    if (score > 1) {
      numInput > correctNumber
        ? displayMessage("Number is Too High")
        : displayMessage("Number is Too Low");
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      displayMessage("Guess limit out.");
      input.disabled = true;
      document.querySelector("#score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF0000";
      beforePseudo.style.setProperty("--before-content", "'You Lost!'");
      beforePseudo.style.setProperty("--before-padding", "0.4em 0.8em");
    }
  } else {
    displayMessage("Correct!");
    document.querySelector("body").style.backgroundColor = "#00a000";
    beforePseudo.style.setProperty("--before-content", "'You Won!'");
    beforePseudo.style.setProperty("--before-padding", "0.4em 0.8em");
    input.disabled = true;
    if (score > highscore) {
      highscore = score;
      document.querySelector("#highscore").textContent = highscore;
    }
  }
});

again.addEventListener("click", function () {
  score = 20;
  correctNumber = Math.trunc(Math.random() * 30) + 1;
  input.disabled = false;
  input.value = "";
  displayMessage("Start guessing...");
  document.querySelector("#score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#000000";
  beforePseudo.style.setProperty("--before-content", "'?'");
  beforePseudo.style.setProperty("--before-padding", "0.3em 0.6em");
});
