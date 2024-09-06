/** */
// Global constants and variables
const canvas = document.getElementById("game-canvas")
const ctx = canvas.getContext('2d')
/** */
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
        ctx.fillText(text = "Eco-Quest", x = 0, y = 0);
        var fontSize = 30;
        ctx.fillText(text = "brought to you by Eco-Solve", x, y += fontSize);
        var fontSize = 20;
        ctx.fillText(text = "Press Enter to begin!", x, y = canvas.height - 2 * fontSize);
        ctx.fillText(text = "Press H to see how to play", x, y += fontSize);
        requestAnimationFrame(intro); 
    };    
};
/** */
function howToPlay() {};
/** */
function gameLoop() {};
/** */
function restart() {};
// Start the game
intro();