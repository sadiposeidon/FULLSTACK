let currentRow = null;
let sortOrder = {}; // sütun sıralama vəziyyəti

// Yeni sətr əlavə et
function addRow() {
  const name = document.getElementById("addName").value.trim();
  const age = document.getElementById("addAge").value.trim();
  const city = document.getElementById("addCity").value.trim();
  if (!name || !age || !city) return alert("Bütün xanaları doldurun!");

  const table = document.getElementById("dataTable").querySelector("tbody");
  const newRow = table.insertRow();

  const nextId = table.rows.length;
  newRow.innerHTML = `
    <td>${nextId}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>${city}</td>
    <td>
      <button class="btn-update" onclick="openModal(this)">Güncəllə</button>
      <button class="btn-delete" onclick="deleteRow(this)">Sil</button>
    </td>
  `;

  document.getElementById("addName").value = "";
  document.getElementById("addAge").value = "";
  document.getElementById("addCity").value = "";
}

// Silmək
function deleteRow(btn) {
  if (confirm("Bu sətri silmək istədiyinizə əminsiniz?")) {
    btn.closest("tr").remove();
  }
}

// Modal açmaq (güncəllə)
function openModal(btn) {
  currentRow = btn.closest("tr");
  document.getElementById("editName").value = currentRow.cells[1].textContent;
  document.getElementById("editAge").value = currentRow.cells[2].textContent;
  document.getElementById("editCity").value = currentRow.cells[3].textContent;
  document.getElementById("editModal").style.display = "block";
}

// Modal bağlamaq
function closeModal() {
  document.getElementById("editModal").style.display = "none";
}

// Dəyişiklikləri yadda saxlamaq
function saveChanges() {
  currentRow.cells[1].textContent = document.getElementById("editName").value;
  currentRow.cells[2].textContent = document.getElementById("editAge").value;
  currentRow.cells[3].textContent = document.getElementById("editCity").value;
  closeModal();
}

// Axtarış funksiyası
document.getElementById("search").addEventListener("keyup", function() {
  let filterValue = this.value.toLowerCase();
  let rows = document.querySelectorAll("#dataTable tbody tr");
  rows.forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(filterValue) ? "" : "none";
  });
});

// Sütuna görə sıralama
document.querySelectorAll("#dataTable th[data-column]").forEach(th => {
  th.addEventListener("click", () => {
    const colIndex = th.cellIndex;
    const tbody = document.querySelector("#dataTable tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    const colName = th.dataset.column;
    sortOrder[colName] = !sortOrder[colName]; // istiqaməti dəyiş

    rows.sort((a, b) => {
      const A = a.cells[colIndex].textContent.trim();
      const B = b.cells[colIndex].textContent.trim();
      if (!isNaN(A) && !isNaN(B)) {
        return sortOrder[colName] ? A - B : B - A;
      }
      return sortOrder[colName] ? A.localeCompare(B) : B.localeCompare(A);
    });

    tbody.innerHTML = "";
    rows.forEach(r => tbody.appendChild(r));
  });
});