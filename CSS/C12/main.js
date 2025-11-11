let currentRow = null;

// Sətiri silmək funksiyası
function deleteRow(btn) {
  if (confirm("Bu sətri silmək istədiyinizə əminsiniz?")) {
    btn.closest("tr").remove();
  }
}

// Modal açmaq (Güncəllə)
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