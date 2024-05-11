const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const groundHeight = 50;
const particleRadius = 10;
const particleSpeed = 5;
let tankWidth = 150;
let tankHeight = 75;
let tankX = canvas.width / 2 - tankWidth / 2;
let tankY = canvas.height - tankHeight - groundHeight;
let particles = [];
let temperature = 25;
let highScore = 25;

// Load high score from JSON file
fetch('score.json')
.then(response => response.json())
.then(data => {
    highScore = data.highScore;
})
.catch(error => {
    console.error('Error loading high score:', error);
});

// Font for text display
ctx.font = "24px Arial";

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw ground
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

    // Tank movement
    document.addEventListener("keydown", function(event) {
        if (event.key === 'ArrowLeft' && tankX >= 0) {
            tankX -= 0.5;
        }
        if (event.key === 'ArrowRight' && tankX <= canvas.width - tankWidth) {
            tankX += 0.5;
        }
        if (event.key === 'ArrowUp' && tankY >= 0) {
            tankY -= 0.5;
        }
        if (event.key === 'ArrowDown' && tankY <= canvas.height - tankHeight) {
            tankY += 0.5;
        }
    });

    // Particle generation
    if (particles.length === 0) {
        let particleX = Math.random() * canvas.width;
        particles.push({ x: particleX, y: -particleRadius });
    }

    // Update particles
    particles.forEach(particle => {
        particle.y += particleSpeed;

        // Collision detection + respawning of particles
        if (particle.y + particleRadius >= tankY && particle.x >= tankX && particle.x <= tankX + tankWidth) {
            temperature += 1;
            particle.x = Math.floor(Math.random() * canvas.width);
            particle.y = -particleRadius
        }

        // Remove particles that reach the bottom of the screen
        if (particle.y - particleRadius >= canvas.height - groundHeight) {
            particles.pop();
        }

        // Draw particles
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleRadius, 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw tank
    ctx.fillStyle = "blue";
    ctx.fillRect(tankX, tankY, tankWidth, tankHeight);

    // Draw text
    ctx.fillStyle = "black";
    ctx.fillText("Temperature: " + temperature.toFixed(1) + "°C", 10, 30);
    ctx.fillText("High Score: " + highScore, canvas.width - 200, 30);

    // Check high score
    if (temperature < highScore) {
        highScore = temperature;
    }

    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Save high score to JSON file
window.addEventListener('beforeunload', () => {
const data = { highScore: highScore };
fetch('score.json', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to save high score');
    }
    console.log('High score saved successfully');
})
.catch(error => {
    console.error('Error saving high score:', error);
});
});