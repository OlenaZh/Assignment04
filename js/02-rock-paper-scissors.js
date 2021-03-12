/*eslint-env browser*/
var userChoise = prompt("Please enter rock, paper or scissors");
var compChoise = Math.floor(Math.random() * 3);
var compChoiseString;
if (compChoise === 0) {
    compChoiseString = "rock";
} if (compChoise === 1) {
    compChoiseString = "paper";
} if (compChoise === 2) {
    compChoiseString = "scissors";
}
if (compChoiseString === "rock") {
    if (userChoise === "rock") {
        alert("Tie");
    }
    if (userChoise === "paper") {
        alert("You win!");
    }
    if (userChoise === "scissors") {
        alert("You lose!");
    }
} if (compChoiseString === "paper") {
    if (userChoise === "rock") {
        alert("You lose!");
    }
    if (userChoise === "paper") {
        alert("Tie");
    }
    if (userChoise === "scissors") {
        alert("You win!");
    }
} if (compChoiseString === "scissors") {
    if (userChoise === "rock") {
        alert("You win!");
    }
    if (userChoise === "paper") {
        alert("You lose!");
    }
    if (userChoise === "scissors") {
        alert("Tie");
    }
}