// Set up the canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game variables
let tankWidth = 150;
let tankHeight = 75;
let tankX = canvas.width / 2 - tankWidth / 2;
let tankY = canvas.height - tankHeight - 50; // Adjust for the ground height
let groundHeight = 50;
let particleRadius = 10;
let particleSpeed = 5;
let particles = [];
let collectedParticles = 0;
let temperature = 25;
let timeLeft = 60;

// Font for text display
ctx.font = "24px Arial";

// Main game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw ground
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

    // Tank movement
    const movementIncrement = 0.001
    document.addEventListener("keydown", function(event) {
        if (event.key === 'ArrowLeft' && tankX >= 0) {
            tankX -= movementIncrement
        } else if (event.key === 'a' && tankX >= 0) {
            tankX -= movementIncrement
        } else if (event.key === 'ArrowRight' && tankX <= canvas.width - tankWidth) {
            tankX += movementIncrement
        } else if (event.key === 'd' && tankX <= canvas.width - tankWidth) {
            tankX += movementIncrement
        } else if (event.key === 'ArrowUp' && tankY >= 0) {
            tankY -= movementIncrement
        } else if (event.key === 'w' && tankY >= 0) {
            tankY -= movementIncrement
        } else if (event.key === 'ArrowDown' && tankY <= canvas.height + tankHeight) {
            tankY += movementIncrement
        } else if (event.key === 's' && tankY <= canvas.height + tankHeight) {
            tankY += movementIncrement
        }            
    });

    // Particle generation
    if (Math.random() < 0.05) {
        let particleType = Math.random() < 0.5 ? "CO2" : "CH4";
        let particleColor = particleType === "CO2" ? "red" : "green";
        let particleX = Math.random() * canvas.width;
        let particleY = -particleRadius;
        particles.push({ type: particleType, color: particleColor, x: particleX, y: particleY });
    }

    // Update particles
    for (let i = 0; i < particles.length; i += 1) {
        particles[i].y += particleSpeed;

        // Collision detection
        if (particles[i].y + particleRadius >= tankY && particles[i].x >= tankX && particles[i].x <= tankX + tankWidth) {
            collectedParticles += 1;
            if (particles[i].type === "CO2") {
                temperature -= 0.1;
            } else if (particles[i].type === "CH4") {
                temperature -= 1;
            }
            particleSpeed += 1;
            particles.splice(i, 1);
        }

        // Remove particles that reach the bottom of the screen
        if (particles[i].y - particleRadius >= canvas.height - groundHeight) {
            particles.splice(i, 1);
        }

        // Draw particles
        ctx.fillStyle = particles[i].color;
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particleRadius, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw tank
    ctx.fillStyle = "blue";
    ctx.fillRect(tankX, tankY, tankWidth, tankHeight);

    // Draw text
    ctx.fillStyle = "black";
    ctx.fillText("Temperature: " + temperature.toFixed(1) + "°C", 10, 30);
    ctx.fillText("Time Left: " + timeLeft.toFixed(0) + "s", canvas.width - 200, 30);
    ctx.fillText("Particles collected: " + collectedParticles, 10, 60);

    // Update temperature and time
    temperature += (0.001 * Math.abs(25 - collectedParticles) / 10);
    timeLeft -= 1 / 30;

    // Check game over
    if (timeLeft <= 0) {
        clearInterval(gameLoopInterval);
        alert("Game Over! Collected particles: " + collectedParticles);
    }
}

// Start the game loop
let gameLoopInterval = setInterval(gameLoop, 1000 / 30);
