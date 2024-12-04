document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate SQL injection vulnerability
    if (username && password) {
        if (username.includes('1=1') || password.includes('1=1')) {
            document.getElementById('message').textContent = 'Login successful! Flag:{SQL_injection_wins}';
            document.getElementById('message').classList.remove('hidden');
            alert('Access granted! You got the flag!');
        } else {
            document.getElementById('message').textContent = 'Access Denied!';
            document.getElementById('message').classList.remove('hidden');
        }
    }
});
