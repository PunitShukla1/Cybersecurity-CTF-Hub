document.getElementById("submit-btn").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const greetingMessage = document.getElementById("greeting-message");
    const responseMessage = document.getElementById("response-message");
    const responseDiv = document.getElementById("response");
    const greetingDiv = document.getElementById("greeting");

    // Hide response and greeting initially
    responseDiv.classList.add("hidden");
    greetingDiv.classList.add("hidden");

    // Check for username and show greeting message or response
    if (username) {
        greetingMessage.textContent = `Hello, ${username}!`;
        greetingDiv.classList.remove("hidden");
        responseDiv.classList.remove("hidden");
    }

    // Simulate some condition where after interaction, a hidden flag can appear
    // If username is entered correctly with XSS (it won't explicitly be written here)
    if (username.includes("<script>")) {
        alert("FLAG{XSS_exploited!_You_did_it!}");
    }
});
