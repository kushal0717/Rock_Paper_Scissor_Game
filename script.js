// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Get DOM elements for score and message updates
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
const choices = document.querySelectorAll(".choice");
const message = document.querySelector(".message");

// Function to randomly select computer's choice
function computerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3); // Random index between 0 and 2
    return choices[index];
}

// Function to determine winner
// Returns true if user wins, false if computer wins
function getWinner(user, comp) {
    if (
        (user === 'rock' && comp === 'scissors') ||
        (user === 'paper' && comp === 'rock') ||
        (user === 'scissors' && comp === 'paper')
    ) {
        return true; // User wins
    }
    return false; // Computer wins
}

// Main function to play the game when a user makes a choice
function playGame(userChoice) {
    let compChoice = computerChoice(); // Get computer's move
    let winner = getWinner(userChoice, compChoice); // Determine winner

    if (userChoice === compChoice) {
        draw(compChoice); // It's a draw
    } else {
        if (winner) {
            userWins(compChoice); // User wins
        } else {
            compWins(compChoice); // Computer wins
        }
    }
}

// Function to handle user win
function userWins(compChoice) {
    user.innerText = ++userScore; // Increment user score
    message.innerText = `Computer Chose ${compChoice}\n You WIN!!`;
    message.style.backgroundColor = "green"; // Set message color
}

// Function to handle computer win
function compWins(compChoice) {
    comp.innerHTML = ++compScore; // Increment computer score
    message.innerText = `Computer Chose ${compChoice}\n You LOOSE!!`;
    message.style.backgroundColor = "red"; // Set message color
}

// Function to handle a draw
function draw(compChoice) {
    message.innerText = `Computer Chose ${compChoice}\n Its a DRAW!!`;
    message.style.backgroundColor = "yellow"; // Set message background
    message.style.color = "black"; // Set text color
}

// Add event listeners to all choice buttons
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id"); // Get user's selected choice
        playGame(userChoice); // Play the game with user's choice
    });
});
