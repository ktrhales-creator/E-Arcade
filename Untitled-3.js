const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let paddleX = 150;
let ballX = 200;
let ballY = 0;

// Listen for mouse movement
canvas.addEventListener("mousemove", (e) => {
    paddleX = e.clientX - canvas.offsetLeft - 50;
});

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Ball movement
    ballY += 2; 
    if (ballY > 400) ballY = 0; // Reset ball

    // Draw Paddle
    ctx.fillStyle = "black";
    ctx.fillRect(paddleX, 380, 100, 20);

    // Draw Ball
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(update);
}
update();