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
    document.addEventListener('keydown', 
        function (event) {
            if (event.key === 'Enter') {
                running = false;
                lore();
            };
        }
    );    
    if (running) {
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        var fontSize = 50;
        ctx.font = `${fontSize}px Arial`
        ctx.fillText(text = "Eco-Quest: Part 1", x = canvas.width / 2, y = (canvas.height - fontSize) / 2);
        var fontSize = 30;
        ctx.font = `${fontSize}px Arial`
        ctx.fillText(text = "brought to you by Eco-Solve", x, y += fontSize);
        var fontSize = 15;
        ctx.font = `${fontSize}px Arial`
        ctx.fillText(text = "Press ENTER to continue", x, y = canvas.height - 2 * fontSize);
        requestAnimationFrame(intro); 
    };    
};
/** Displays the background lore for the game on the canvas.*/
function lore() {
    let running = true;
    document.addEventListener('keydown', 
        function (event) {
            if (event.key === 'Enter') {
                running = false;
                gameLoop();
            } else if (event.key === 'h') {
                running = false;
                howToPlay();
            };
        }
    );  
    if (running) {
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        var fontSize = 50;
        ctx.font = `${fontSize}px Arial`
        ctx.fillText(text = "Background Lore", x = canvas.width / 2, y = (canvas.height - fontSize) / 2);
        var fontSize = 10;
        ctx.font = `${fontSize}px Arial`
        ctx.fillText(text = "An environmental disaster has occured!", x, y +=  2* fontSize);
        ctx.fillText(text = "Water-soluble aliens have made their way from outer space into clouds in Earth's atmosphere,", x, y += fontSize);
        ctx.fillText(text = "so they fall to the Earth alongside rain from these clouds.", x, y += fontSize);
        ctx.fillText(text = "They then permeate into the soil and cause intense erosion, damaging crop yields and floral biodiversity.", x, y += fontSize);
        ctx.fillText(text = "In short, Earth is under attack!", x, y += fontSize);
        ctx.fillText(text = "However, your team of scientists has discovered a solution.", x, y += 2 * fontSize);
        ctx.fillText(text = "If you trap the aliens in nitric acid, they will be paralysed, hence reducing the threat they pose to the environment.", x, y += fontSize);
        ctx.fillText(text = "So, on a rainy day, your team creates a giant vat of nitric acid and sets off, hoping to catch some aliens in the process.", x, y += fontSize);
        var fontSize = 15;
        ctx.font = `${fontSize}px Arial`
        ctx.fillText(text = "Press H to see how to play", x, y = canvas.height - 2 * fontSize);
        ctx.fillText(text = "Press ENTER to continue", x, y = canvas.height - fontSize);
        requestAnimationFrame(howToPlay); 
    };
};
/** Displays instructions on how to play on the canvas. */
function howToPlay() {
    let running = true;
    document.addEventListener('keydown', 
        function(event) {
            if (event.key === 'Enter') {
                running = false;
                gameLoop();
            } else if (event.key == 'b') {
                running = false;
                intro();
            };
        }
    );
    if (running) {
        `
        How to Play
        In Eco-Quest: Part 1, the vat is a blue rectangle and the aliens are red dots.
        Your aim is to catch as many aliens as you can in 60 seconds. 
        The vat can be moved using the arrow keys or the WASD keys, 
        but it cannot leave the game screen.
        The number of aliens you have collected, as well as the lefover time, 
        will be displayed on the screen. 
        So, how many aliens can you catch?
        Play Eco-Quest: Part 1 to find out!       
        `
    };    
};
/** Renders the game elements and displays them on the canvas.*/
function gameLoop() {};
/** Resets all game variables and runs the game loop again. */
function restart() {};
// Start the game
intro();