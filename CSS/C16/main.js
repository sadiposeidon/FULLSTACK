let interval;
let finished = false;

// Random rəng yaratmaq
function randomColor() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}

function startGame() {
  const names = [
    document.getElementById("q1").value || "Qum 1",
    document.getElementById("q2").value || "Qum 2",
    document.getElementById("q3").value || "Qum 3",
    document.getElementById("q4").value || "Qum 4",
    document.getElementById("q5").value || "Qum 5"
  ];

  document.getElementById("inputs").style.display = "none";
  document.getElementById("gameArea").style.display = "flex";
  document.getElementById("winner").textContent = "";
  document.getElementById("restartBtn").style.display = "none";
  finished = false;

  // adları yaz və qumları sıfırla + rəng təyin et
  names.forEach((name, i) => {
    const sand = document.getElementById(`s${i+1}`);
    document.getElementById(`n${i+1}`).textContent = name;
    sand.style.height = "0%";
    sand.style.backgroundColor = randomColor();
    sand.style.top = "0%";
  });

  interval = setInterval(() => {
    for (let i = 1; i <= 5; i++) {
      const sand = document.getElementById(`s${i}`);
      let height = parseFloat(sand.style.height);
      const randomIncrease = Math.random() * 5; // 0-5%
      sand.style.height = Math.min(height + randomIncrease, 100) + "%";

      // Aşağıya tökülmə effekti
      sand.style.top = 0;

      if (height + randomIncrease >= 100 && !finished) {
        finished = true;
        clearInterval(interval);
        document.getElementById("winner").innerHTML =
          `🏆 Qalib: <span style="color:#27ae60">${names[i-1]}</span>!`;
        document.getElementById("restartBtn").style.display = "inline-block";
        break;
      }
    }
  }, 100);
}

// Yenidən başlatma
document.getElementById("restartBtn").addEventListener("click", () => {
  clearInterval(interval);
  finished = false;
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("winner").textContent = "";
  document.getElementById("inputs").style.display = "block";
  document.getElementById("restartBtn").style.display = "none";

  for (let i = 1; i <= 5; i++) {
    document.getElementById(`q${i}`).value = "";
  }
});