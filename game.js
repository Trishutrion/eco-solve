/**
 * Eco-Solve: Games (Javascript)
 * @author Arnav Bagal
 * 
 * @summary This page contains all of the Javascript code for the Games menu of Eco-Solve.
 * @description This page contains all of the functions required to run the Games page of Eco-Solve, such as an introduction function, a guide on how to play, a main game loop, and a restart function, for every game on the page. 
 */
// Global constants and variables
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext('2d');
/** Displays the game title and instructions on the canvas. */
function intro() {    
    let running = true;
    document.onkeydown = function(event) {
        if (event.key === 'Enter') {
            running = false;
            lore();
        }
    };    
    if (running) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        var fontSize = 50;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillText("Eco-Quest: Part 1", canvas.width / 2, (canvas.height - fontSize) / 2);
        fontSize = 30;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillText("brought to you by Eco-Solve", canvas.width / 2, (canvas.height - fontSize) / 2 + fontSize);
        fontSize = 15;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillText("Press ENTER to continue", canvas.width / 2, canvas.height - 2 * fontSize);
        requestAnimationFrame(intro); 
    };    
};
/** Displays the background lore for the game on the canvas.*/
function lore() {
    let running = true;
    document.onkeydown = function (event) {
        if (event.key === 'Enter') {
            running = false;
            gameLoop();
        } else if (event.key === 'h') {
            running = false;
            howToPlay();
        } else if (event.key === 'b') {
            running = false;
            intro();
        };
    }; 
    if (running) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        var fontSize = 50;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillText(text = "Background Lore", x = canvas.width / 2, y = 2 * fontSize);
        var fontSize = 15;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillText(text = "An environmental disaster has occured!", x, y +=  2* fontSize);
        ctx.fillText(text = "Water-soluble aliens have made their way from outer space into clouds in Earth's atmosphere,", x, y += 2 * fontSize);
        ctx.fillText(text = "so they fall to the Earth alongside rain from these clouds.", x, y += fontSize);
        ctx.fillText(text = "They then permeate into the soil and cause intense erosion,", x, y += fontSize);
        ctx.fillText(text = "damaging crop yields and floral biodiversity.", x, y += fontSize);
        ctx.fillText(text = "In short, Earth is under attack!", x, y += 2 * fontSize);
        ctx.fillText(text = "However, your team of scientists has discovered a solution.", x, y += 2 * fontSize);
        ctx.fillText(text = "If you trap the aliens in nitric acid, they will be paralysed,", x, y += 2 * fontSize);
        ctx.fillText(text = "hence reducing the threat they pose to the environment.", x, y += fontSize);
        ctx.fillText(text = "So, on a rainy day, your team creates a giant vat of nitric acid and sets off,", x, y += 2 * fontSize);
        ctx.fillText(text = "hoping to catch some aliens in the process.", x, y += fontSize);
        ctx.fillText(text = "Press H to see how to play", x, y = canvas.height - 3 * fontSize);
        ctx.fillText(text = "Press ENTER to continue", x, y = canvas.height - 2 * fontSize);
        ctx.fillText(text = "Press B to go back", x, y = canvas.height - fontSize);
        requestAnimationFrame(lore); 
    };
};
/** Displays instructions on how to play on the canvas. */
function howToPlay() {
    let running = true;
    document.onkeydown = function (event) {
        if (event.key === 'Enter') {
            running = false;
            gameLoop();
        } else if (event.key === 'b') {
            running = false;
            lore();
        };
    }; 
    if (running) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        var fontSize = 50;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillText(text = "How to Play", x = canvas.width / 2, y = 2 * fontSize);
        var fontSize = 15;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillText(text = "In Eco-Quest: Part 1, the vat is a blue rectangle and the aliens are red dots.", x, y +=  2* fontSize);
        ctx.fillText(text = "Your aim is to catch as many aliens as you can in 60 seconds.", x, y += fontSize);
        ctx.fillText(text = "The vat can be moved using the arrow keys or the WASD keys,", x, y += 2 * fontSize);
        ctx.fillText(text = "but it cannot leave the game screen.", x, y += fontSize);
        ctx.fillText(text = "The number of aliens you have collected, as well as the lefover time,", x, y += 2 * fontSize);
        ctx.fillText(text = "will be displayed on the screen.", x, y += fontSize);
        ctx.fillText(text = "So, how many aliens can you catch?", x, y += 2 * fontSize);
        ctx.fillText(text = "Play Eco-Quest: Part 1 to find out!", x, y += fontSize);
        ctx.fillText(text = "Press ENTER to continue", x, y = canvas.height - 2 * fontSize);
        ctx.fillText(text = "Press B to go back", x, y = canvas.height - fontSize);
        requestAnimationFrame(howToPlay);
    };    
};
/** Renders the game elements and displays them on the canvas.*/
function gameLoop() {
    let vat = { x: canvas.width / 2, y: canvas.height - 30, width: 50, height: 20 };
    let aliens = [];
    let score = 0;
    let timeLeft = 60;
    let keys = {};
    let gameOver = false;

    for (let i = 0; i < 10; i++) {
        aliens.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height / 2, speed: Math.random() * 2 + 1 });
    }

    document.addEventListener('keydown', (e) => keys[e.key] = true);
    document.addEventListener('keyup', (e) => keys[e.key] = false);

    function update() {
        if (gameOver) {
            if (keys['Enter']) {
                document.location.reload();
            }
            return;
        }

        if (keys['ArrowLeft'] || keys['a']) vat.x -= 5;
        if (keys['ArrowRight'] || keys['d']) vat.x += 5;
        if (keys['ArrowUp'] || keys['w']) vat.y -= 5;
        if (keys['ArrowDown'] || keys['s']) vat.y += 5;

        vat.x = Math.max(0, Math.min(canvas.width - vat.width, vat.x));
        vat.y = Math.max(0, Math.min(canvas.height - vat.height, vat.y));

        for (let i = aliens.length - 1; i >= 0; i--) {
            aliens[i].y += aliens[i].speed;

            if (vat.x < aliens[i].x + 10 && vat.x + vat.width > aliens[i].x &&
                vat.y < aliens[i].y + 10 && vat.y + vat.height > aliens[i].y) {
                score++;
                aliens[i].y = 0;
                aliens[i].x = Math.random() * canvas.width;
            }

            if (aliens[i].y > canvas.height - 10) {
                aliens[i].y = 0;
                aliens[i].x = Math.random() * canvas.width;
            }
        }

        if (timeLeft > 0) {
            timeLeft -= 1 / 60;
        } else {
            gameOver = true;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'green';
        ctx.fillRect(0, canvas.height - 10, canvas.width, 10);

        ctx.fillStyle = 'blue';
        ctx.fillRect(vat.x, vat.y, vat.width, vat.height);

        ctx.fillStyle = 'red';
        for (let alien of aliens) {
            ctx.beginPath();
            ctx.arc(alien.x, alien.y, 10, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText(`Score: ${score}`, 50, 30); 
        ctx.fillText(`Time Left: ${Math.ceil(timeLeft)}`, 70, 60); 

        if (gameOver) {
            ctx.fillStyle = 'black';
            ctx.font = '30px Arial';
            ctx.fillText('Game Over', canvas.width / 2 - 70, canvas.height / 2 - 30);
            ctx.fillText(`You caught ${score} aliens`, canvas.width / 2 - 100, canvas.height / 2);
            ctx.fillText('Press ENTER to restart', canvas.width / 2 - 130, canvas.height / 2 + 30);
        }
    }

    function loop() {
        update();
        draw();
        requestAnimationFrame(loop);
    }

    loop();
};
/** Resets all game variables and runs the game loop again. */
function restart() {
    // Reset all game variables
};
// Start the game
intro();