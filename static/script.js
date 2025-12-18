document.getElementById('clickMe').addEventListener('click', function() {
    const messages = [
        "Hello from Rust!",
        "Shuttle makes deployment easy.",
        "Axum is fast and ergonomic.",
        "You clicked the button!",
        "Have a nice day!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
});
