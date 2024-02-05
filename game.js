/*
Mini-Game: Hailstone Dodger
By: Arnav Bagal

In this game, you are a person trying to dodge hailstones. 
You can use the arrow keys or the 'a' and 'd' keys to move, 
but you are unable to leave the game scree.

How long can you survive?
*/

// Constants
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const personWidth = 50;
const personHeight = 80;
const hailstoneMinRadius = 5;
const hailstoneMaxRadius = 30;
const hailstoneSpeed = 5;

// Game variables
let personX = canvas.width / 2 - personWidth / 2;
let personY = canvas.height - personHeight - 20;
let HP = 50;
let isGameOver = false;
let startTime = null;
let elapsedTime = 0;
let highScore = localStorage.getItem('highScore') || 0;

// Helper function to generate random hailstone Radius
function getRandomhailstoneRadius() {
    return Math.floor(Math.random() * (hailstoneMaxRadius - hailstoneMinRadius)) *2;
}

// Helper function to check collision between two rectangles
function checkCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y;
}

function gameLoop(timestamp) {
    eventHandling();    
    if (!isGameOver) {
        if (!startTime) {
            startTime = timestamp;
        }
        elapsedTime = Math.floor((timestamp - startTime) / 1000);
    
        if (elapsedTime >== highScore){
        highScore = elapsedTime;
    };

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Draw the ground 
    ctx.fillStyle = '#355e3b';
    ctx.fillRect(canvas.width-800, canvas.height-20, canvas.width, 20);

    // Draw the person
    ctx.fillStyle = '#007bff';
    ctx.fillRect(personX, personY, personWidth, personHeight);

    // Move the hailstone
    hailstoneY += hailstoneSpeed;

    // Ensure the person stays within the screen boundaries
    if (personX < 0) {
        personX = 0;
    } else if (personX + personWidth > canvas.width) {
        personX = canvas.width - personWidth;
    }

    // Check if hailstone hits the person
    if (checkCollision({ x: personX, y: personY, width: personWidth, height: personHeight },
                        { x: hailstoneX, y: hailstoneY, width: hailstoneRadius, height: hailstoneRadius })) {
        const damage = hailstoneRadius; // Damage is proportional to hailstone Radius
        HP -= damage;
        if (HP <= 0) {
            isGameOver = true;
            if (elapsedTime > highScore) {
                highScore = elapsedTime;
                localStorage.setItem('highScore', highScore);
            }
        }
        hailstoneY = -hailstoneRadius;
        hailstoneX = Math.random() * (canvas.width - hailstoneRadius);
        hailstoneRadius = getRandomhailstoneRadius();
    }

    // Respawn hailstone when it touches the ground
    if (hailstoneY >= canvas.height-20) {
        hailstoneY = -hailstoneRadius;
        hailstoneX = Math.random() * (canvas.width - hailstoneRadius);
        hailstoneRadius = getRandomhailstoneRadius();
    }

    // Draw the hailstone
    ctx.fillStyle = '#cccccc';
    ctx.beginPath();
    ctx.arc(hailstoneX, hailstoneY, hailstoneRadius, 0, Math.PI * 2);
    ctx.fill();

    // Draw HP
    ctx.font = '20px Arial';
    ctx.fillStyle = '#ff0000';
    ctx.fillText(`HP: ${HP}`, 10, 40);

    // Draw elapsed time and high score
    ctx.fillStyle = '#000000';
    ctx.fillText(`Time: ${elapsedTime} seconds`, 10, 70);
    ctx.fillText(`High Score: ${highScore} seconds`, 10, 100);

    requestAnimationFrame(gameLoop);
    } 
    else {
        // Game over, display restart message
        ctx.font = '30px Arial';
        ctx.fillStyle = '#ff0000';
        ctx.fillText('Game Over! Press Space to Restart', 200, 200);
    }
}

function restart(){
    HP = 50;
    isGameOver = false;
    startTime = null;
    elapsedTime = 0;
    personX = canvas.width / 2 - personWidth / 2;
    personY = canvas.height - personHeight - 20;
    hailstoneX = Math.random() * (canvas.width - hailstoneRadius);
    hailstoneY = -hailstoneRadius;
    hailstoneRadius = getRandomhailstoneRadius();
    gameLoop();
};

function eventHandling(){
    document.addEventListener('keydown', function(event) {
        if (!isGameOver) {
            if (event.key === 'ArrowLeft') {
                personX -= 10;
            } 
            else if (event.key === 'a') {
                personX -= 10;
            } 
            else if (event.key === 'ArrowRight') {
                personX += 10;
            } 
            else if (event.key === 'd') {
                personX += 10;
            }
        } 
        else if (event.key === ' ' && isGameOver) {
            // Restart the game if space is pressed
            restart();
        }
    });
};

// Initial setup
let hailstoneRadius = getRandomhailstoneRadius();
let hailstoneX = Math.random() * (canvas.width - hailstoneRadius);
let hailstoneY = -hailstoneRadius;
gameLoop();
