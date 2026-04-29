const holes = [...document.querySelectorAll(".hole")];
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const messageEl = document.getElementById("message");
const startBtn = document.getElementById("startBtn");

const GAME_LENGTH = 30;
const MOLE_SPEED = 650;

let score = 0;
let timeLeft = GAME_LENGTH;
let activeHoleIndex = -1;
let timerId = null;
let moleId = null;
let isRunning = false;

function clearBoard() {
  holes.forEach((hole) => hole.classList.remove("active", "hit"));
  activeHoleIndex = -1;
}

function updateHud() {
  scoreEl.textContent = String(score);
  timeEl.textContent = String(timeLeft);
}

function showMole() {
  clearBoard();
  activeHoleIndex = Math.floor(Math.random() * holes.length);
  holes[activeHoleIndex].classList.add("active");
}

function stopGame() {
  clearInterval(timerId);
  clearInterval(moleId);
  isRunning = false;
  clearBoard();
  startBtn.textContent = "Play Again";
  messageEl.textContent = `Game over! Final score: ${score}`;
}

function startGame() {
  clearInterval(timerId);
  clearInterval(moleId);
  score = 0;
  timeLeft = GAME_LENGTH;
  isRunning = true;
  startBtn.textContent = "Restart";
  messageEl.textContent = "Whack as many as you can!";
  updateHud();
  showMole();

  moleId = setInterval(showMole, MOLE_SPEED);

  timerId = setInterval(() => {
    timeLeft -= 1;
    updateHud();
    if (timeLeft <= 0) {
      stopGame();
    }
  }, 1000);
}

function onHoleClick(index) {
  if (!isRunning || index !== activeHoleIndex) {
    return;
  }
  score += 1;
  holes[index].classList.add("hit");
  setTimeout(() => holes[index].classList.remove("hit"), 120);
  showMole();
  updateHud();
}

holes.forEach((hole, index) => {
  hole.addEventListener("click", () => onHoleClick(index));
});

startBtn.addEventListener("click", startGame);
updateHud();
