const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const vatWidth = 100;
const vatHeight = 20;
let vatX, vatY, rightPressed, leftPressed, score, timeLeft, gameRunning, aliens;

function initializeGame() {
  vatX = (canvas.width - vatWidth) / 2;
  vatY = canvas.height - vatHeight - 10;
  rightPressed = false;
  leftPressed = false;
  score = 0;
  timeLeft = 60;
  gameRunning = false;
  aliens = [];
}

class Alien {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 10;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.y += 2;
  }
}

function drawVat() {
  ctx.beginPath();
  ctx.rect(vatX, vatY, vatWidth, vatHeight);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

function drawAliens() {
  aliens.forEach(alien => alien.draw());
}

function updateAliens() {
  aliens.forEach(alien => alien.update());
}

function detectCollisions() {
  for (let i = aliens.length - 1; i >= 0; i--) {
    if (aliens[i].y + aliens[i].radius > vatY &&
        aliens[i].x > vatX &&
        aliens[i].x < vatX + vatWidth) {
      aliens.splice(i, 1);
      score++;
    } else if (aliens[i].y - aliens[i].radius > canvas.height) {
      aliens.splice(i, 1);
    }
  }
}

function drawScoreAndTimer() {
  ctx.font = "24px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`Score: ${score}`, 10, 30);
  ctx.fillText(`Time Left: ${timeLeft}`, canvas.width - 150, 30);
}

function draw() {
  if (!gameRunning) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawVat();
  drawAliens();
  detectCollisions();
  updateAliens();
  drawScoreAndTimer();

  if (rightPressed && vatX < canvas.width - vatWidth) {
    vatX += 7;
  }
  if (leftPressed && vatX > 0) {
    vatX -= 7;
  }

  requestAnimationFrame(draw);
}

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

function spawnAlien() {
  if (gameRunning) {
    const x = Math.random() * (canvas.width - 20) + 10;
    const y = -10;
    aliens.push(new Alien(x, y));
  }
}

function updateTimer() {
  if (gameRunning && timeLeft > 0) {
    timeLeft--;
  } else if (timeLeft === 0) {
    alert(`Game over! Your score is ${score}`);
    gameRunning = false;
  }
}

function intro() {
  alert("Eco-Quest: Part 1\n\nAn environmental disaster has occurred! Water-soluble aliens (red circles) have made their way into rain clouds and are now digging holes deep into the surface of the earth, causing massive erosion in the process. Fortunately, your team of scientists has found that these aliens cannot tolerate living in environments containing hydrochloric acid. You create a large vat (blue rectangle) that contains highly concentrated hydrochloric acid, and set out on your way. Your job is to collect as many aliens as possible in 60 seconds. Good luck!");
}

function howToPlay() {
  alert("How to Play:\n\n- Use the arrow keys to move the vat left and right.\n- Catch the falling red aliens in the vat to score points.\n- You have 60 seconds to catch as many aliens as possible.\n- The game ends when the timer reaches zero.");
}

function startGame() {
  initializeGame();
  gameRunning = true;
  draw();
  setInterval(spawnAlien, 1000);
  setInterval(updateTimer, 1000);
}

function restartGame() {
  initializeGame();
  startGame();
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

initializeGame();
startGame();
