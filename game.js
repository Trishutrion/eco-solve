/**
 * Eco-Solve: Games (Javascript)
 * @author Arnav Bagal
 * 
 * @summary This page contains all of the Javascript code for the Games menu of Eco-Solve.
 * @description This page contains all of the functions required to run the Games page of Eco-Solve, such as an introduction function, a guide on how to play, a main game loop, and a restart function, for every game on the page. 
 */

// Global constants and variables

function startPart1() {
    document.getElementById("ecoQuestPart1").innerHTML = `<canvas id="game-canvas" style="width: 50vw; height: 58.88125613346418056918547595682vh"></canvas> `
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.scale(dpr, dpr);

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
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            fontSize = canvas.clientWidth * 0.0625;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText("Eco-Quest: Part 1", canvas.clientWidth / 2, (canvas.clientHeight - fontSize) / 2);
            fontSize = canvas.clientWidth * 0.0375;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText("brought to you by Eco-Solve", canvas.clientWidth / 2, (canvas.clientHeight - fontSize) / 2 + fontSize);
            fontSize = canvas.clientWidth * 0.01875;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText("Press ENTER to continue", canvas.clientWidth / 2, canvas.clientHeight - 2 * fontSize);
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
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            fontSize = canvas.clientWidth * 0.0625;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText(text = "Background Lore", x = canvas.clientWidth / 2, y = 2 * fontSize);
            fontSize = canvas.clientWidth * 0.01875;
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
            ctx.fillText(text = "Press H to see how to play", x, y = canvas.clientHeight - 3 * fontSize);
            ctx.fillText(text = "Press ENTER to continue", x, y = canvas.clientHeight - 2 * fontSize);
            ctx.fillText(text = "Press B to go back", x, y = canvas.clientHeight - fontSize);
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
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            fontSize = canvas.clientWidth * 0.0625;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText(text = "How to Play", x = canvas.clientWidth / 2, y = 2 * fontSize);
            fontSize = canvas.clientWidth * 0.01875;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText(text = "In Eco-Quest: Part 1, the vat is a blue rectangle and the aliens are brown dots.", x, y +=  2* fontSize);
            ctx.fillText(text = "Your aim is to catch as many aliens as you can in 60 seconds.", x, y += fontSize);
            ctx.fillText(text = "The vat can be moved using the arrow keys or the WASD keys,", x, y += 2 * fontSize);
            ctx.fillText(text = "but it cannot leave the game screen.", x, y += fontSize);
            ctx.fillText(text = "The number of aliens you have collected, as well as the lefover time,", x, y += 2 * fontSize);
            ctx.fillText(text = "will be displayed on the screen.", x, y += fontSize);
            ctx.fillText(text = "So, how many aliens can you catch?", x, y += 2 * fontSize);
            ctx.fillText(text = "Play Eco-Quest: Part 1 to find out!", x, y += fontSize);
            ctx.fillText(text = "Press ENTER to continue", x, y = canvas.clientHeight - 2 * fontSize);
            ctx.fillText(text = "Press B to go back", x, y = canvas.clientHeight - fontSize);
            requestAnimationFrame(howToPlay);
        };    
    };
    /** Renders the game elements and displays them on the canvas.*/
    function gameLoop() {
        let vat = { x: canvas.clientWidth / 2, y: canvas.clientHeight * 0.95, width: canvas.clientWidth * 0.5, height: canvas.clientHeight * 0.03333333333333333333333333333333};
        let aliens = [];
        let score = 0;
        let timeLeft = 60;
        let keys = {};
        let gameOver = false;
        const alienRadius = 10;

        for (let i = 0; i < 10; i++) {
            aliens.push({ x: Math.random() * canvas.clientWidth, y: Math.random() * canvas.clientHeight / 2, speed: Math.random() * 2 + 1 });
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

            if (keys['ArrowLeft'] || keys['a']) vat.x -= canvas.clientWidth * 0.00625;
            if (keys['ArrowRight'] || keys['d']) vat.x += canvas.clientWidth * 0.00625;


            vat.x = Math.max(0, Math.min(canvas.clientWidth - vat.width, vat.x));
            vat.y = Math.max(0, Math.min(canvas.clientHeight - vat.height, vat.y));

            for (let i = aliens.length - 1; i >= 0; i--) {
                aliens[i].y += aliens[i].speed;

                if (vat.x < aliens[i].x + alienRadius && vat.x + vat.width > aliens[i].x &&
                    vat.y < aliens[i].y + alienRadius && vat.y + vat.height > aliens[i].y) {
                    score++;
                    aliens[i].y = 0;
                    aliens[i].x = Math.random() * canvas.clientWidth;
                }

                if (aliens[i].y > canvas.clientHeight - alienRadius) {
                    score -= 1;
                    aliens[i].y = 0;
                    aliens[i].x = Math.random() * canvas.clientWidth;
                }
            }

            if (timeLeft > 0) {
                timeLeft -= 1 / 60;
            } else {
                gameOver = true;
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

            ctx.fillStyle = 'green';
            ctx.fillRect(0, canvas.clientHeight * 0.98333333333333333333333333333333, canvas.clientWidth, canvas.clientHeight * 0.01666666666666666666666666666667);

            ctx.fillStyle = 'blue';
            ctx.fillRect(vat.x, vat.y, vat.width, vat.height);

            ctx.fillStyle = 'brown';
            for (let alien of aliens) {
                ctx.beginPath();
                ctx.arc(alien.x, alien.y, alienRadius, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.fillStyle = 'black';
            ctx.textAlign = 'left';
            fontSize = canvas.clientWidth * 0.025;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText(`Score: ${score}`, x = 0, y = fontSize);
            ctx.fillText(`Time Left: ${Math.ceil(timeLeft)}`, x, y+= fontSize);

            if (gameOver) {
                ctx.fillStyle = 'red';
                ctx.textAlign = 'center'
                fontSize = canvas.clientWidth * 0.0625;
                ctx.font = `${fontSize}px Arial`;
                ctx.fillText(text = "Game Over!", x = canvas.clientWidth / 2, y = canvas.clientHeight / 2);
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                fontSize = canvas.clientWidth * 0.0375;
                ctx.font = `${fontSize}px Arial`;
                ctx.fillText(`${score} aliens have been stopped`, x, y += fontSize);
                ctx.fillText('Press ENTER to restart', x, y+= fontSize);
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

    intro();
};

function startPart3() {
    document.getElementById("ecoQuestPart3").innerHTML = `<canvas id="game-canvas-3" style="width: 50vw; height: 58.88125613346418056918547595682vh"></canvas> `
    const canvas = document.getElementById("game-canvas-3");
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.scale(dpr, dpr);
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
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            fontSize = canvas.clientWidth * 0.0625;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText("Eco-Quest: Part 3", canvas.clientWidth / 2, (canvas.clientHeight - fontSize) / 2);
            fontSize = canvas.clientWidth * 0.0375;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText("brought to you by Eco-Solve", canvas.clientWidth / 2, (canvas.clientHeight - fontSize) / 2 + fontSize);
            fontSize = canvas.clientWidth * 0.01875;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText("Press ENTER to continue", canvas.clientWidth / 2, canvas.clientHeight - 2 * fontSize);
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
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            fontSize = canvas.clientWidth * 0.0625;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText(text = "Background Lore", x = canvas.clientWidth / 2, y = 2 * fontSize);
            fontSize = canvas.clientWidth * 0.01875;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText(text = "Your troubles still continue!", x, y +=  2* fontSize);
            ctx.fillText(text = "You find yourself trapped inside a soilien colony's habitat.", x, y += 2 * fontSize);
            ctx.fillText(text = "You have to get out as soon as possible!", x, y += fontSize);
            ctx.fillText(text = "Press H to see how to play", x, y = canvas.clientHeight - 3 * fontSize);
            ctx.fillText(text = "Press ENTER to continue", x, y = canvas.clientHeight - 2 * fontSize);
            ctx.fillText(text = "Press B to go back", x, y = canvas.clientHeight - fontSize);
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
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            fontSize = canvas.clientWidth * 0.0625;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText(text = "How to Play", x = canvas.clientWidth / 2, y = 2 * fontSize);
            fontSize = canvas.clientWidth * 0.01875;
            ctx.font = `${fontSize}px Arial`;
            ctx.fillText(text = "In Eco-Quest: Part 3, you are a blue rectangle and the soiliens are brown dots.", x, y +=  2* fontSize);
            ctx.fillText(text = "Your aim is to reach the right side of the screen.", x, y += fontSize);
            ctx.fillText(text = "You can move using the arrow keys or the WASD keys,", x, y += 2 * fontSize);
            ctx.fillText(text = "but you cannot leave the game screen.", x, y += fontSize);
            ctx.fillText(text = "So, can you escape the soiliens' trap?", x, y += 2 * fontSize);
            ctx.fillText(text = "Play Eco-Quest: Part 3 to find out!", x, y += fontSize);
            ctx.fillText(text = "Press ENTER to continue", x, y = canvas.clientHeight - 2 * fontSize);
            ctx.fillText(text = "Press B to go back", x, y = canvas.clientHeight - fontSize);
            requestAnimationFrame(howToPlay);
        };    
    };
    /** Renders the game elements and displays them on the canvas.*/
    function gameLoop() {
        let player = { x: canvas.clientWidth * 0.05, y: canvas.clientHeight / 2, width: canvas.clientWidth * 0.03, height: canvas.clientHeight * 0.08 };
        let stones = [];
        let keys = {};
        let gameOver = false;
        let win = false;
        const stoneRadius = 15;

        function spawnStone() {
            stones.push({
                x: canvas.clientWidth + stoneRadius,
                y: Math.random() * (canvas.clientHeight - stoneRadius * 2),
                speed: Math.random() * 2 + 1.5
            });
        }

        // Spawn a few initial stones
        for (let i = 0; i < 10; i++) spawnStone();

        document.addEventListener('keydown', (e) => keys[e.key] = true);
        document.addEventListener('keyup', (e) => keys[e.key] = false);

        function update() {
            if (gameOver || win) {
                if (keys['Enter']) {
                    document.location.reload();
                }
                return;
            }

            // Player movement
            if (keys['w']) player.y -= canvas.clientHeight * 0.003;
            if (keys['a']) player.x -= canvas.clientWidth * 0.003;
            if (keys['s']) player.y += canvas.clientHeight * 0.003;
            if (keys['ArrowUp'] || keys['d']) player.x += canvas.clientWidth * 0.003;
            player.y = Math.max(0, Math.min(canvas.clientHeight - player.height, player.y));

            // Stones movement
            for (let i = stones.length - 1; i >= 0; i--) {
                stones[i].x -= stones[i].speed;

                // Check collision
                if (stones[i].x - stoneRadius < player.x + player.width &&
                    stones[i].x + stoneRadius > player.x &&
                    stones[i].y - stoneRadius < player.y + player.height &&
                    stones[i].y + stoneRadius > player.y) {
                    gameOver = true;
                }

                // Remove stones that went off screen
                if (stones[i].x + stoneRadius < 0) {
                    stones.splice(i, 1);
                    spawnStone();
                }
            }

            // Check win condition
            if (player.x + player.width >= canvas.clientWidth) {
                win = true;
            }

        }

        function draw() {
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

            // Draw player
            ctx.fillStyle = 'blue';
            ctx.fillRect(player.x, player.y, player.width, player.height);

            // Draw stones
            ctx.fillStyle = 'gray';
            for (let stone of stones) {
                ctx.beginPath();
                ctx.arc(stone.x, stone.y, stoneRadius, 0, Math.PI * 2);
                ctx.fill();
            }

            // Game over / win messages
            if (gameOver) {
                ctx.fillStyle = 'red';
                ctx.textAlign = 'center';
                let fontSize = canvas.clientWidth * 0.0625;
                ctx.font = `${fontSize}px Arial`;
                ctx.fillText("You were hit! Game Over!", canvas.clientWidth / 2, canvas.clientHeight / 2);
                ctx.fillStyle = 'black';
                fontSize = canvas.clientWidth * 0.0375;
                ctx.font = `${fontSize}px Arial`;
                ctx.fillText("Press ENTER to restart", canvas.clientWidth / 2, canvas.clientHeight / 2 + fontSize);
            } else if (win) {
                ctx.fillStyle = 'green';
                ctx.textAlign = 'center';
                let fontSize = canvas.clientWidth * 0.0625;
                ctx.font = `${fontSize}px Arial`;
                ctx.fillText("You made it! You Win!", canvas.clientWidth / 2, canvas.clientHeight / 2);
                ctx.fillStyle = 'black';
                fontSize = canvas.clientWidth * 0.0375;
                ctx.font = `${fontSize}px Arial`;
                ctx.fillText("Press ENTER to restart", canvas.clientWidth / 2, canvas.clientHeight / 2 + fontSize);
            }
        }

        function loop() {
            update();
            draw();
            requestAnimationFrame(loop);
        }

        loop();
    }

    /** Resets all game variables and runs the game loop again. */
    function restart() {
        // Reset all game variables
        player = { x: canvas.clientWidth * 0.05, y: canvas.clientHeight / 2, width: canvas.clientWidth * 0.03, height: canvas.clientHeight * 0.1 };
        stones = [];
        score = 0;
        timeLeft = 60;
        keys = {};
        gameOver = false;
        win = false;

        // Restart the game loop
        loop();
    };
    // Start the game
    intro();
};

let items = ['Access Card'];
    let currentRoom = null;
    let soilienHealth = 100;
    let playerHealth = 100;
    function entrance() {
        currentRoom = "entrance";
        document.getElementById("ecoQuestPart2").innerHTML = `You are currently at the entrance of the lab.<br>
        <br>
        You have the following items: ${items} <br>
        Select where you want to go next: <button onclick="hallway()">Hallway</button><br>
        <br>
        <button onclick="restart()">Quit</button>`;  
    };
    function hallway() {
    currentRoom = "hallway";
    if (items.includes("Storage Room Keys")) {
        document.getElementById("ecoQuestPart2").innerHTML = `You use your access card to enter the lab's hallway. <br>
        The hallway is dimly lit, and you can see doors on either side.<br>
        You can hear strange noises coming from the biohazard room at the end of the hallway.<br>
        However, you also notice the storage shed and the sample testing room nearby.<br>
        <br>
        You have the following items: ${items} <br>
        Select where you want to go next: <button onclick="storageShed()">Storage Shed</button> 
        <button onclick="sampleTestingRoom()">Sample Testing Room</button>
        <button onclick="biohazardRoom()">Biohazard Room</button><br>
        <br>
        <button onclick="restart()">Quit</button>`;
    } else {
        items.push("Storage Room Keys");
        document.getElementById("ecoQuestPart2").innerHTML = `You use your access card to enter the lab's hallway. <br>
        The hallway is dimly lit, and you can see doors on either side.<br>
        You can hear strange noises coming from the biohazard room at the end of the hallway.<br>
        However, you also notice the storage shed and the sample testing room nearby.<br>
        You turn you head and find the set of keys for the storage shed on the floor.<br>
        You pick them up and put them in your pocket.<br>
        <br>
        You have the following items: ${items} <br>
        Select where you want to go next: <button onclick="storageShed()">Storage Shed</button> 
        <button onclick="sampleTestingRoom()">Sample Testing Room</button>
        <button onclick="biohazardRoom()">Biohazard Room</button><br>
        <br>
        <button onclick="restart()">Quit</button>`;
    }; 
    };
    function storageShed() {
    currentRoom = "storageShed";
    if (items.includes("Storage Room Keys")) {
        if (items.includes("Crowbar")) {
        document.getElementById("ecoQuestPart2").innerHTML = `You use the keys you have found to enter the storage shed. <br>
        Inside, you find various tools and equipment.<br>
        However, there is a foul smell coming from the back of the shed, and you hear strange noises.<br>
        You decide to leave the shed and continue your journey.<br>
        <br>
        You have the following items: ${items} <br>
        Select where you want to go next: <button onclick="hallway()">Hallway</button>
        <br>
        <button onclick="restart()">Quit</button>`;
        } else {
        items.push('Crowbar');
        document.getElementById("ecoQuestPart2").innerHTML = `You use the keys you have found to enter the storage shed. <br>
        Inside, you find various tools and equipment.<br>
        You pick up a crowbar that could be useful later.<br>
        However, there is a foul smell coming from the back of the shed, and you hear strange noises.<br>
        You decide to leave the shed and continue your journey.<br>
        <br>
        You have the following items: ${items} <br>
        Select where you want to go next: <button onclick="hallway()">Hallway</button><br>
        <br>
        <button onclick="restart()">Quit</button>`;
        }
    } else {
        document.getElementById("ecoQuestPart2").innerHTML = `You try to open the storage shed, but it is locked.<br>
        You need the Storage Room Keys to enter.<br>
        <br>
        You have the following items: ${items} <br>
        Select where you want to go next: <button onclick="hallway()">Hallway</button><br>
        <br>
        <button onclick="restart()">Quit</button>`;
    };  
    };
    function sampleTestingRoom() {
    currentRoom = "sampleTestingRoom";
    if (items.includes("Protective Suit")) {    
        document.getElementById("ecoQuestPart2").innerHTML = `You enter the sample testing room using your access card. <br>
        The room is filled with various samples, vials, beakers, and test tubes.<br>
        You notice a strange sample that seems to be glowing.<br>
        In the fear of that sample being dangerous, you decide to leave the room.<br>
        <br>
        You have the following items: ${items} <br>
        Select where you want to go next: <button onclick="hallway()">Hallway</button><br>
        <br>
        <button onclick="restart()">Quit</button>`;
    } else {
        items.push("Protective Suit");
        document.getElementById("ecoQuestPart2").innerHTML = `You enter the sample testing room, wearing your protective suit.<br>
        The room is filled with various samples, vials, beakers, and test tubes.<br>
        You notice a strange sample that seems to be glowing, and a protective suit right next to it.<br>
        In the fear of that sample being dangerous, you put on the protective suit and decide to leave the room.<br>
        <br>
        You have the following items: ${items} <br>
        Select where you want to go next: <button onclick="hallway()">Hallway</button><br>
        <br>
        <button onclick="restart()">Quit</button>`;
    }
    };
    function biohazardRoom() {
    currentRoom = "biohazardRoom";
    if (items.includes("Protective Suit")) {
        if (soilienHealth > 0 && playerHealth > 0) {
        document.getElementById("ecoQuestPart2").innerHTML = `You enter the biohazard room, wearing your protective suit.<br>
        The room is dark and filled with strange noises.<br>
        Suddenly, a grotesque soilien appears in front of you, its slimy body covered in glowing green ooze.<br>
        It seems to be trying to escape the room, but you can see that it is injured and weak.<br>
        You realize that you need to stop it before it can cause any more damage.<br>
        Hence, the only way to stop it is to use the crowbar you found earlier and fight it.<br>
        The soilien has ${soilienHealth} health, and you have ${playerHealth} health.<br>
        <br>
        <button onclick="battle()">Hit the soilien</button><br>
        <br>
        <button onclick="restart()">Quit</button>`;
        }
        if (soilienHealth <= 0) {
        document.getElementById("ecoQuestPart2").innerHTML = `You successfully defeat the soilien!<br>
        It collapses to the ground, defeated.<br>
        You quickly call for help, and the lab technicians come to secure the area.<br>
        The soilien is contained, and you have saved the lab from further chaos.<br>
        <br>
        Congratulations! You have completed Eco-Quest Part 2!<br>
        <br>
        <button onclick="restart()">Restart</button>`;
        } else if (playerHealth <= 0) {
        document.getElementById("ecoQuestPart2").innerHTML = `You have been defeated by the soilien!<br>
        It overpowers you and escapes the lab, causing chaos and destruction.<br>
        You wake up later, but the damage is done.<br>
        <br>
        Game Over!<br>
        <button onclick="restart()">Restart</button>`;
        }
    } else {
        document.getElementById("ecoQuestPart2").innerHTML = `You enter the biohazard room, but without your protective suit, 
        you are unable to face the soilien.<br>
        It hits you with its grotesque, slimy arm, knocking you out unconcscious.<br>
        It then escapes the lab, causing chaos and destruction.<br>
        You wake up later, but the damage is done.<br>
        <br>
        Game Over!<br>
        <br>
        <button onclick="restart()">Restart</button>`;
    }
    };
    function battle() {
    if (items.includes("Crowbar")) {
        playerHealth -= 10;
        soilienHealth -= Math.floor(Math.random() * 20) + 1;    
    } else {
        playerHealth -= 10; 
        soilienHealth -= 1;
    }
    biohazardRoom();  
    };
    function restart() {
    items = ['Access Card'];
    currentRoom = null;
    soilienHealth = 100;
    playerHealth = 100;
    document.getElementById("ecoQuestPart2").innerHTML = `
    Welcome to Eco-Quest Part 2!<br> 
    In this part of the game, you will continue your journey to save the environment.<br> 
    One of the soiliens has made it into your lab, and wreaked havoc all over it.<br>
    Luckilly, some of your lab technicians have contained it into the biohazard room.<br>
    However, it is angrily trying to escape, and you must stop it before it can get out.<br>
    So go into the lab and stop it now!<br>
    <br>
    <button onclick="entrance()">Begin!</button>
    `;
    };

    function startPart2() {
        document.getElementById("ecoQuestPart2").innerHTML = `<p>
        Welcome to Eco-Quest Part 2!<br> 
        In this part of the game, you will continue your journey to save the environment.<br> 
        One of the soiliens has made it into your lab, and wreaked havoc all over it.<br>
        Luckilly, some of your lab technicians have contained it into the biohazard room.<br>
        However, it is angrily trying to escape, and you must stop it before it can get out.<br>
        So go into the lab and stop it now!<br>
        <br>
        <button onclick="entrance()">Begin!</button>
        </p>`;
    }
