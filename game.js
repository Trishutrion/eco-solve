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
/** Runs the introductory loop for Eco-Quest. */
function intro() {    
    let running = true;
    canvas.addEventListener('keydown', 
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
        ctx.fillText(text = "Eco-Quest", x = canvas.width / 2, y = (canvas.height - fontSize) / 2);
        let fontSize = 30;
        ctx.font = `${fontSize}px Arial`
        ctx.fillText(text = "brought to you by Eco-Solve", x, y += fontSize);
        let fontSize = 15;
        ctx.font = `${fontSize}px Arial`
        ctx.fillText(text = "Press Enter to begin!", x, y = canvas.height - 2 * fontSize);
        ctx.fillText(text = "Press H to see how to play", x, y += fontSize);
        requestAnimationFrame(intro); 
    };    
};
/** Displays instructions on how to play on the screen. */
function howToPlay() {
    let running = true;
    canvas.addEventListener('keydown', 
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
/** */
function gameLoop() {};
/** */
function restart() {};
// Start the game
intro();