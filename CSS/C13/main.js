function updateClock() {
  const now = new Date();

  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;

  const days = ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"];
  const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];

  let dayName = days[now.getDay()];
  let date = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  document.getElementById("date").textContent = `${dayName}, ${date} ${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();