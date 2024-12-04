const form = document.getElementById('login-form');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
        feedback.textContent = "Access Denied! No information here.";
        feedback.style.color = "#ff6666";
    } else {
        feedback.textContent = "Invalid Input. Try Again.";
    }
});

function redirectToFlag() {
    window.location.href = "../flag/submit.html";
}
