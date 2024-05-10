// Constants
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const tankWidth = 50;
const tankHeight = 80;
const particleRadius = 10;
const particleSpeed = 5;

// Game variables
let tankX = canvas.width / 2 - tankWidth / 2;
let tankY = canvas.height - tankHeight - 20;
let particlesCollected = 0;
let gameOver = false;
let startTime = null;
let elapsedTime = 0;
let mostParticlesCollected = localStorage.getItem('mostParticlesCollected') || 0;
let particleX = Math.random() * (canvas.width - particleRadius);
let particleY = -particleRadius;

function gameLoop(timestamp) {
    while (!gameOver) {
        
    }
}
    /*
    Commented Code:
        // Event handling: checks for key presses and moves tank accordingly
    document.addEventListener('keydown', function(event) {
        if (!gameOver) {
            if (event.key === 'ArrowLeft' || event.key === 'a') {
                tankX -= 10;
            } else if (event.key === 'ArrowRight' || event.key === 'd') {
                tankX += 10;
            }; 
        } else if (event.key === ' ' && gameOver) { 
            restart();
        }
    });
    if (!gameOver) {
        if (!startTime) {
            startTime = timestamp;
        }
        elapsedTime = Math.floor((timestamp - startTime) / 1000);
        if (elapsedTime > 60) {
            gameOver = true; 
            
        }
    
        if (elapsedTime >= mostParticlesCollected){
        mostParticlesCollected = elapsedTime;
    };

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Draw the ground 
    ctx.fillStyle = '#355e3b';
    ctx.fillRect(canvas.width-800, canvas.height-20, canvas.width, 20);

    // Draw the tank
    ctx.fillStyle = '#007bff';
    ctx.fillRect(tankX, tankY, tankWidth, tankHeight);

    // Move the particle
    particleY += particleSpeed;

    // Ensure the tank stays within the screen boundaries
    if (tankX < 0) {
        tankX = 0;
    } else if (tankX + tankWidth > canvas.width) {
        tankX = canvas.width - tankWidth;
    }

    // Check if particle hits the tank
    if (tankX < particleX + particleRadius && tankX + particleRadius > particleX && tankY < particleY + particleRadius && tankY + particleRadius > particleY) {
        const damage = particleRadius; 
        particlesCollected -= damage;
            
            if (particlesCollected > mostParticlesCollected) {
                mostParticlesCollected = particlesCollected;
                localStorage.setItem('mostParticlesCollected', mostParticlesCollected);
            }
        }
    }

                particleY = -particleRadius;
                particleX = Math.random() * (canvas.width - particleRadius);
                particleRadius = Math.floor(Math.random() * (particleMaxRadius - particleMinRadius)) *2;

            // Respawn particle when it touches the ground
            if (particleY >= canvas.height-20) {
                particleY = -particleRadius;
                particleX = Math.random() * (canvas.width - particleRadius);
                particleRadius = Math.floor(Math.random() * (particleMaxRadius - particleMinRadius)) *2;
            }

            // Draw the particle
            ctx.fillStyle = '#cccccc';
            ctx.beginPath();
            ctx.arc(particleX, particleY, particleRadius, 0, Math.PI * 2);
            ctx.fill();

            // Draw particlesCollected
            ctx.font = '20px Arial';
            ctx.fillStyle = '#ff0000';
            ctx.fillText(`particlesCollected: ${particlesCollected}`, 10, 40);

            // Draw elapsed time and high score
            ctx.fillStyle = '#000000';
            ctx.fillText(`Time left: ${60 - elapsedTime} seconds`, 10, 70);
            ctx.fillText(`Most particles collected: ${mostParticlesCollected} seconds`, 10, 100);

            requestAnimationFrame(gameLoop);
        else {
            // Game over, display restart message
            ctx.font = '30px Arial';
            ctx.fillStyle = '#ff0000';
            ctx.fillText('Game Over! Press Space to Restart', 200, 200);
        }

        }
    };    
    */
    


// Initial setup
gameLoop(); 
