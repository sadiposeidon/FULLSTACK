document.getElementById("filter").addEventListener("keyup", function() {
  let filterValue = this.value.toLowerCase();
  let rows = document.querySelectorAll("#dataTable tbody tr");
  
  rows.forEach(row => {
    let text = row.textContent.toLowerCase();
    row.style.display = text.includes(filterValue) ? "" : "none";
  });
});