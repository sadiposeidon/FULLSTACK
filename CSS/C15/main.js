let interval;
let finished = false;

// Oyunu başladan funksiya
function startRace() {
  const names = [
    document.getElementById("car1").value || "Maşın 1",
    document.getElementById("car2").value || "Maşın 2",
    document.getElementById("car3").value || "Maşın 3",
    document.getElementById("car4").value || "Maşın 4",
    document.getElementById("car5").value || "Maşın 5"
  ];

  document.getElementById("inputs").style.display = "none";
  document.getElementById("raceArea").style.display = "block";
  document.getElementById("winner").textContent = "";
  document.getElementById("restartBtn").style.display = "none";
  finished = false;

  // adları yaz və mövqeləri sıfırla
  names.forEach((name, i) => {
    const car = document.getElementById(`c${i+1}`);
    car.textContent = name;
    car.style.left = "10px";
  });

  interval = setInterval(() => {
    for (let i = 1; i <= 5; i++) {
      const car = document.getElementById(`c${i}`);
      let pos = parseInt(car.style.left);
      const randomMove = Math.floor(Math.random() * 15); 
      car.style.left = pos + randomMove + "px";

      const trackWidth = car.parentElement.clientWidth;
      const finishLine = trackWidth - 100;

      if (pos >= finishLine && !finished) {
        finished = true;
        clearInterval(interval);
        document.getElementById("winner").innerHTML = 
          `🏆 Qalib: <span style="color:#27ae60">${car.textContent}</span>!`;
        document.getElementById("restartBtn").style.display = "inline-block";
        break;
      }
    }
  }, 100);
}

// Yenidən başlatma funksiyası
document.getElementById("restartBtn").addEventListener("click", () => {
  clearInterval(interval);
  finished = false;
  document.getElementById("raceArea").style.display = "none";
  document.getElementById("winner").textContent = "";
  document.getElementById("inputs").style.display = "block";
  document.getElementById("restartBtn").style.display = "none";

  // input-ları təmizlə
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`car${i}`).value = "";
  }
});