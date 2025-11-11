// Rəqəmləri dinamik əlavə edirik (1–12)
const clock = document.getElementById("clock");
for (let i = 1; i <= 12; i++) {
  const num = document.createElement("div");
  num.className = "number";
  num.textContent = i;
  const angle = (i * 30) * Math.PI / 180;
  const r = 120;
  const x = 150 + r * Math.sin(angle);
  const y = 150 - r * Math.cos(angle);
  num.style.left = `${x}px`;
  num.style.top = `${y}px`;
  clock.appendChild(num);
}

function updateClock() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = second * 6; // 360/60
  const minuteDeg = minute * 6 + second * 0.1;
  const hourDeg = (hour % 12) * 30 + minute * 0.5;

  document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();