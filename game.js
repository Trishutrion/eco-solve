// Set up the canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Colors
const WHITE = "#FFFFFF";
const BLUE = "#0000FF";
const RED = "#FF0000";
const GREEN = "#00FF00";
const BLACK = "#000000";

// Game variables
let SCREEN_WIDTH = canvas.width;
let SCREEN_HEIGHT = canvas.height;
let tankWidth = 150;
let tankHeight = 75;
let tankX = SCREEN_WIDTH / 2 - tankWidth / 2;
let tankY = SCREEN_HEIGHT - tankHeight - 50;  // Adjust for the ground height
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
    ctx.fillStyle = WHITE;
    ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    // Draw ground
    ctx.fillStyle = BLACK;
    ctx.fillRect(0, SCREEN_HEIGHT - groundHeight, SCREEN_WIDTH, groundHeight);

    // Tank movement
    if (keys[37] && tankX > 0) {  // Left arrow key
        tankX -= 20;
    }
    if (keys[39] && tankX < SCREEN_WIDTH - tankWidth) {  // Right arrow key
        tankX += 20;
    }

    // Particle generation
    if (Math.random() < 0.05) {
        let particleType = Math.random() < 0.5 ? "CO2" : "CH4";
        let particleColor = particleType === "CO2" ? RED : GREEN;
        let particleX = Math.random() * SCREEN_WIDTH;
        let particleY = -particleRadius;
        particles.push({ type: particleType, color: particleColor, x: particleX, y: particleY });
    }

    // Update particles
    for (let i = 0; i < particles.length; i++) {
        particles[i].y += particleSpeed;

        // Collision detection
        if (particles[i].y + particleRadius >= tankY && particles[i].x >= tankX && particles[i].x <= tankX + tankWidth) {
            collectedParticles++;
            if (particles[i].type === "CO2") {
                temperature -= 0.1;
            } else if (particles[i].type === "CH4") {
                temperature -= 1;
            }
            particleSpeed += 2;
            particles.splice(i, 1);
        }

        // Remove particles that reach the bottom of the screen
        if (particles[i].y - particleRadius >= SCREEN_HEIGHT - groundHeight) {
            particles.splice(i, 1);
        }

        // Draw particles
        ctx.fillStyle = particles[i].color;
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particleRadius, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw tank
    ctx.fillStyle = BLUE;
    ctx.fillRect(tankX, tankY, tankWidth, tankHeight);

    // Draw text
    ctx.fillStyle = BLACK;
    ctx.fillText("Temperature: " + temperature.toFixed(1) + "°C", 10, 30);
    ctx.fillText("Time Left: " + timeLeft.toFixed(0) + "s", SCREEN_WIDTH - 200, 30);
    ctx.fillText("Particles collected: " + collectedParticles, 10, 60);

    // Update temperature and time
    temperature += (0.01 * Math.abs(25 - collectedParticles) / 10);
    timeLeft -= 1 / 30;

    // Check game over
    if (timeLeft <= 0) {
        clearInterval(gameLoopInterval);
        alert("Game Over! Collected particles: " + collectedParticles);
    }
}

// Event listeners for tank movement
let keys = {};
document.addEventListener("keydown", function(event) {
    keys[event.keyCode] = true;
});
document.addEventListener("keyup", function(event) {
    keys[event.keyCode] = false;
});

// Start the game loop
let gameLoopInterval = setInterval(gameLoop, 1000 / 30);
