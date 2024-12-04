document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the entered username and password
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Correct credentials (after decoding the hashes)
    const correctUsername = "peter";
    const correctPassword = "masters";

    // Validate the username and password
    if (username === correctUsername && password === correctPassword) {
        // Show a popup with the flag when credentials are correct
        setTimeout(() => {
            alert('Congratulations! Flag: CTF{You_Hacked_The_System}');
        }, 100);
    } else {
        // Display an error message if credentials are incorrect
        const message = document.getElementById('message');
        message.textContent = "Access Denied! Incorrect Username or Password.";
        message.style.color = "red";
    }
});
