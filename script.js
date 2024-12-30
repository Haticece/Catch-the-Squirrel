let score = 0; // Skoru başlat
const squirrel = document.getElementById("squirrel");
const scoreElement = document.getElementById("score");

function randomPosition() {
    // Ekranda rastgele bir konum seç
    const gameArea = document.getElementById("game-area");
    const maxX = gameArea.clientWidth - squirrel.offsetWidth;
    const maxY = gameArea.clientHeight - squirrel.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Sincap kafasını yeni konuma taşı
    squirrel.style.left = `${randomX}px`;
    squirrel.style.top = `${randomY}px`;
}

squirrel.addEventListener("click", () => {
    // Sincap kafasına tıklanırsa skoru arttır ve konumu değiştir
    score++;
    scoreElement.textContent = score;
    randomPosition(); // Yeni rastgele pozisyon
});

// 2 dakikalık süre için zamanlayıcı
let timeLeft = 120; // 2 dakika = 120 saniye
const timerElement = document.createElement('div');
document.body.appendChild(timerElement);
timerElement.id = 'timer';

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}s`;
    } else {
        timerElement.textContent = "Game Over!";
        clearInterval(timerInterval); // Zamanlayıcıyı durdur
    }
}

const timerInterval = setInterval(updateTimer, 1000); // Her saniye zamanlayıcıyı güncelle
