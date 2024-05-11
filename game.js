function startGame() {
    // Canvas setup
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // Tank setup
    const tankWidth = 50;
    const tankHeight = 50;
    let tankX = canvas.width / 2 - tankWidth / 2;
    const tankY = canvas.height - tankHeight;

    // Particle setup
    const particleRadius = 10;
    let particles = [];
    let collectedParticles = 0;
    let temperature = 20; // Starting temperature
    let timeLeft = 60; // 60 seconds

    // Event listener for tank movement
    document.addEventListener("keydown", function(event) {
        const key = event.key;
        if (key === "ArrowLeft" && tankX > 0) {
            tankX -= 10;
        } else if (key === "ArrowRight" && tankX < canvas.width - tankWidth) {
            tankX += 10;
        }
    });

    // Game loop
    let lastFrameTime = Date.now();
    while (timeLeft > 0) {
        const currentTime = Date.now();
        const deltaTime = (currentTime - lastFrameTime) / 1000;
        lastFrameTime = currentTime;

        // Decrease temperature
        temperature -= 0.1;

        // Update particles
        particles.forEach((particle, index) => {
            particle.y += (25 - temperature / 2) / 10 * deltaTime; // Adjust particle speed based on temperature and deltaTime

            // Check collision with tank
            if (particle.y + particleRadius >= tankY && particle.x + particleRadius >= tankX && particle.x <= tankX + tankWidth) {
                collectedParticles++;
                particles.splice(index, 1);
            }

            // Remove particles that reach the bottom of the screen
            if (particle.y - particleRadius >= canvas.height) {
                particles.splice(index, 1);
            }
        });

        // Generate new particles
        const particleType = ["CO2", "CH4"]; // Greenhouse gas types
        const particleColors = {
            CO2: "#ff0000", // Red
            CH4: "#00ff00"  // Green
        };
        const randomType = particleType[Math.floor(Math.random() * particleType.length)];
        const randomX = Math.random() * canvas.width;
        const particle = {
            type: randomType,
            color: particleColors[randomType],
            x: randomX,
            y: -particleRadius
        };
        particles.push(particle);

        // Update timer
        timeLeft--;

        // Render game objects
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw tank
        ctx.fillStyle = "#0000ff"; // Blue
        ctx.fillRect(tankX, tankY, tankWidth, tankHeight);

        // Draw particles
        particles.forEach(particle => {
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particleRadius, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw temperature
        ctx.fillStyle = "#000";
        ctx.fillText("Temperature: " + temperature.toFixed(1) + "°C", 10, 20);

        // Draw timer
        ctx.fillText("Time Left: " + timeLeft + "s", canvas.width - 120, 20);
    }

    // Game over
    alert("Game Over! Collected particles: " + collectedParticles);
}

// Start the game
startGame();
