const correctAnswer = "what the code look carefully.";
let attemptsLeft = 3;

const form = document.getElementById('mystery-form');
const userInput = document.getElementById('user-input');
const feedback = document.getElementById('feedback');
const attemptsRemaining = document.getElementById('attempts-remaining');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userAnswer = userInput.value.trim().toLowerCase();

    if (attemptsLeft > 0) {
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! You've solved the mystery.";
            feedback.style.color = "#39ff14";
            form.style.display = "none";
            attemptsRemaining.textContent = "";
        } else {
            attemptsLeft -= 1;
            feedback.textContent = "Incorrect answer. Try again!";
            feedback.style.color = "#ff6347";
            attemptsRemaining.textContent = `Attempts remaining: ${attemptsLeft}`;
        }
    }

    if (attemptsLeft === 0) {
        feedback.textContent = "No more attempts! Refresh to try again.";
        feedback.style.color = "#ff6347";
        form.style.display = "none";
        attemptsRemaining.textContent = "";
    }

    userInput.value = "";
});
