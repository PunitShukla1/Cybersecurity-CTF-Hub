let attempts = 3;
const correctFlag = "CTF{Hex_Answer_base64_Is_the_flag}";

const form = document.getElementById('flag-form');
const feedback = document.getElementById('attempt-feedback');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userFlag = document.getElementById('flag-input').value.trim();

    if (userFlag === correctFlag) {
        feedback.textContent = "Correct! You've captured the flag!";
        feedback.style.color = "#00ff99";
    } else {
        attempts--;
        if (attempts > 0) {
            feedback.textContent = `Incorrect! ${attempts} attempts remaining.`;
            feedback.style.color = "#ff6666";
        } else {
            feedback.textContent = "No attempts left. Challenge failed.";
            feedback.style.color = "#ff0000";
            document.getElementById('flag-input').disabled = true;
            form.querySelector('button').disabled = true;
        }
    }
});
