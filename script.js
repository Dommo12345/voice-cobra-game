// Canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 600;

// Images
const bg = new Image();
bg.src = "assets/bg.png";

const head = new Image();
head.src = "assets/head.png";

// Bird (Head)
const bird = {
    x: 80,
    y: 250,
    width: 60,
    height: 60,
    velocity: 0,
    gravity: 0.5,
    jump: -9
};

// Pipes
let pipes = [];
let score = 0;
let gameOver = false;

// Voice
function sayCobra() {
    const speech = new SpeechSynthesisUtterance("COBRA");
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 0.8;
    speechSynthesis.cancel();
    speechSynthesis.speak(speech);
}

// Flap
function flap() {
    if (gameOver) return;
    bird.velocity = bird.jump;
    sayCobra();
}

// Controls
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") flap();
});

canvas.addEventListener("click", flap);

canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    flap();
});
