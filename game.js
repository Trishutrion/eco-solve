/** */
// Global constants
const canvas = document.getElementById('canvas'); 
const display = canvas.getContext('2d');
// Global variables
void(0);
/** */
function intro() {  
    // Initial loop variables  
    let running = true;
    if (running) {
        // Event handling: Key presses
        document.addEventListener('keydown', function(event) {
            if (event.key === ' ') { // Spacebar to begin game
                game();
                running = false;
            } else if (event.key === 'h') { // H to see how to play
                howToPlay();
                running = false;
            };
        });
        // Clear the canvas
        display.clearRect(0, 0, canvas.width, canvas.height);
        // Rendering game elements: Shapes
        void(0);
        // Rendering game elements: Text 
        display.fillStyle = 'black';
        var fontSize = 50;
        display.font = `${fontSize}px Arial`
        display.fillText(text = "Eco-Quest",
            x = (canvas.width - display.measureText(text).width) / 2,
            y = (canvas.height - fontSize) / 2
        );
        fontSize = 30;
        display.font = `${fontSize}px Arial`
        display.fillText(text = "brought to you by Eco-Solve",
            x = (canvas.width - display.measureText(text).width) / 2,
            y += fontSize
        );
        fontSize = 20;
        display.font = `${fontSize}px Arial`
        display.fillText(text = "Press SPACE to begin!",
            x = (canvas.width - display.measureText(text).width) / 2,
            y = canvas.height - 2 * fontSize
        );
        display.fillText(text = "Press H to see how to play",
            x = (canvas.width - display.measureText(text).width) / 2,
            y += fontSize
        );
        requestAnimationFrame(intro);
    };  
};
/** */
function howToPlay() {
    let running = true;
    if (running) {
        // Event handling: Key presses
        document.addEventListener('keydown', function(event) {
            if (event.key === ' ') { // Spacebar to begin game
                game();
            } else if (event.key === 'b') { // H to see how to play
                intro();
            };
        });
        // Clear the canvas
        display.clearRect(0, 0, canvas.width, canvas.height);
        // display text on screen 
        display.fillStyle = 'black';
        var fontSize = 50;
        display.font = `${fontSize}px Arial`
        display.fillText(text = "How to Play",
            x = (canvas.width - display.measureText(text).width) / 2,
            y = 0
        );
        fontSize = 20;
        display.font = `${fontSize}px Arial`
        display.fillText(text = "brought to you by Eco-Solve",
            x = (canvas.width - display.measureText(text).width) / 2,
            y += fontSize
        );
        fontSize = 20;
        display.font = `${fontSize}px Arial`
        display.fillText(text = "Press SPACE to begin!",
            x = (canvas.width - display.measureText(text).width) / 2,
            y = canvas.height - 2 * fontSize
        );
        display.fillText(text = "Press H to see how to play",
            x = (canvas.width - display.measureText(text).width) / 2,
            y = canvas.height - fontSize
        );
        requestAnimationFrame(howToPlay);
    };
};
/** */
function game() {
    // Game objects
    const ground = new function () {
        this.width = canvas.width;
        this.height = 20;
        this.x = 0;
        this.y = canvas.height - this.height;
    };
    const vat = new function () {
        this.width = 400;
        this.height = 200;
        this.x = (canvas.width - this.width) / 2;
        this.y = canvas.height - this.height - ground.height;
        this.speed = 10;
    };
    
    const alien = new function () {
        this.radius = 10;
        this.x = Math.random() * (canvas.width - this.radius);
        this.y = -this.radius;
        this.speed = 5;
    };    
    // Scoring variables
    let timeLeft = 60;
    let startTime = timestamp;
    let score = 0;

    // Constants
    const playerWidth = 50;
    const playerHeight = 80;
    const enemyMinRadius = 5;
    const enemyMaxRadius = 30;
    const enemySpeed = 5;

    // Game variables
    let playerX = canvas.width / 2 - playerWidth / 2;
    let playerY = canvas.height - playerHeight - 20;
    let hp = 50;
    let isGameOver = false;
    let startTime = null;
    let elapsedTime = 0;
    let highScore = localStorage.getItem('highScore') || 0;

    // Helper function to generate random enemy Radius
    function getRandomenemyRadius() {
        return Math.floor(Math.random() * (enemyMaxRadius - enemyMinRadius)) *2;
    }

    // Helper function to check collision between two rectangles
    function checkCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.y + rect1.height > rect2.y;
    }

    // Game loop
    function gameLoop(timestamp) {
        if (!isGameOver) {
            // Calculate elapsed time
            if (!startTime) {
                startTime = timestamp;
            }
            elapsedTime = Math.floor((timestamp - startTime) / 1000);

            // Clear the canvas
            display.clearRect(0, 0, canvas.width, canvas.height);

            // Make the sky blue
            display.fillStyle = 'lightblue';
            display.fillRect(0, 0, canvas.width, canvas.height);

            //Draw the ground 
            display.fillStyle = '#355e3b';
            display.fillRect(canvas.width-800, canvas.height-20, canvas.width, 20);

            // Draw the player
            display.fillStyle = '#007bff';
            display.fillRect(playerX, playerY, playerWidth, playerHeight);

            // Move the enemy
            enemyY += enemySpeed;

            // Ensure the player stays within the screen boundaries
            if (playerX < 0) {
                playerX = 0;
            } else if (playerX + playerWidth > canvas.width) {
                playerX = canvas.width - playerWidth;
            }

            // Check if enemy hits the player
            if (checkCollision({ x: playerX, y: playerY, width: playerWidth, height: playerHeight },
                                { x: enemyX, y: enemyY, width: enemyRadius, height: enemyRadius })) {
                const damage = enemyRadius; // Damage is proportional to enemy Radius
                hp -= damage;
                if (hp <= 0) {
                    hp = 0;
                    isGameOver = true;
                    if (elapsedTime > highScore) {
                        highScore = elapsedTime;
                        localStorage.setItem('highScore', highScore);
                    }
                }
                enemyY = -enemyRadius;
                enemyX = Math.random() * (canvas.width - enemyRadius);
                enemyRadius = getRandomenemyRadius();
            }

            // Respawn enemy when it touches the ground
            if (enemyY >= canvas.height-20) {
                enemyY = -enemyRadius;
                enemyX = Math.random() * (canvas.width - enemyRadius);
                enemyRadius = getRandomenemyRadius();
            }

            // Draw the enemy
            display.fillStyle = '#ff0000';
            display.beginPath();
            display.arc(enemyX, enemyY, enemyRadius, 0, Math.PI * 2);
            display.fill();

            // Draw HP
            display.font = '20px Arial';
            display.fillStyle = '#ff0000';
            display.fillText(`HP: ${hp}`, 10, 40);

            // Draw elapsed time and high score
            display.fillStyle = '#000000';
            display.fillText(`Time: ${elapsedTime} seconds`, 10, 70);
            display.fillText(`High Score: ${highScore} seconds`, 10, 100);

            requestAnimationFrame(gameLoop);
        } else {
            // Game over, display restart message
            display.font = '30px Arial';
            display.fillStyle = '#ff0000';
            display.fillText('Game Over! Press Space to Restart', 200, 200);            
        }
    }

    // Event listener for player movement
    document.addEventListener('keydown', function(event) {
        if (!isgameOver) {
            if (event.key === 'ArrowLeft') {
                playerX -= 10;
            } 
            else if (event.key === 'a') {
                playerX -= 10;
            }
            else if (event.key === 'ArrowRight') {
                playerX += 10;
            }
            else if (event.key === 'd') {
                playerX += 10;
            }
        } else if (event.key === ' ' && isGameOver) {
            // Restart the game if space is pressed
            hp = 50;
            isGameOver = false;
            startTime = null;
            elapsedTime = 0;
            playerX = canvas.width / 2 - playerWidth / 2;
            playerY = canvas.height - playerHeight - 20;
            enemyX = Math.random() * (canvas.width - enemyRadius);
            enemyY = -enemyRadius;
            enemyRadius = getRandomenemyRadius();
            gameLoop();
        }
    });

    // Initial setup
    let enemyRadius = getRandomenemyRadius();
    let enemyX = Math.random() * (canvas.width - enemyRadius);
    let enemyY = -enemyRadius;
    gameLoop();
};
// Start the game
intro(); 
