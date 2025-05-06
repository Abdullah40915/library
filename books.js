let books = [
  { name: "Atomic Habits", author: "James Clear", year: 2018 },
  { name: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { name: "The Alchemist", author: "Paulo Coelho", year: 1988 },
];

let editIndex = null;

function renderTable() {
  const tbody = document.querySelector("#bookTable tbody");
  const search = document.getElementById("searchInput").value.toLowerCase();

  tbody.innerHTML = "";
  books
    .filter(
      (book) =>
        book.name.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search)
    )
    .forEach((book, index) => {
      const row = `<tr>
          <td>${book.name}</td>
          <td>${book.author}</td>
          <td>${book.year}</td>
          <td>
            <button onclick="editBook(${index})">✏️ Edit</button>
            <button onclick="deleteBook(${index})">🗑️ Delete</button>
          </td>
        </tr>`;
      tbody.innerHTML += row;
    });
}

function openAddForm() {
  editIndex = null;
  document.getElementById("formTitle").innerText = "Add Book";
  document.getElementById("bookName").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookYear").value = "";
  document.getElementById("bookFormContainer").classList.remove("hidden");
}

function editBook(index) {
  editIndex = index;
  const book = books[index];
  document.getElementById("formTitle").innerText = "Edit Book";
  document.getElementById("bookName").value = book.name;
  document.getElementById("bookAuthor").value = book.author;
  document.getElementById("bookYear").value = book.year;
  document.getElementById("bookFormContainer").classList.remove("hidden");
}

function saveBook() {
  const name = document.getElementById("bookName").value.trim();
  const author = document.getElementById("bookAuthor").value.trim();
  const year = parseInt(document.getElementById("bookYear").value);

  if (!name || !author || isNaN(year)) {
    alert("Please fill all fields correctly.");
    return;
  }

  const newBook = { name, author, year };

  if (editIndex === null) {
    books.push(newBook);
  } else {
    books[editIndex] = newBook;
  }

  closeForm();
  renderTable();
}

function deleteBook(index) {
  if (confirm("Are you sure you want to delete this book?")) {
    books.splice(index, 1);
    renderTable();
  }
}

function closeForm() {
  document.getElementById("bookFormContainer").classList.add("hidden");
}

document.getElementById("searchInput").addEventListener("input", renderTable);

renderTable();
