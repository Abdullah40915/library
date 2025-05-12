// Hardcoded values for now
const totalBooks = 100;
const totalUsers = 45;
const booksIssued = 28;

// Update DOM
document.getElementById("bookCount").querySelector("p").textContent =
  totalBooks;
document.getElementById("userCount").querySelector("p").textContent =
  totalUsers;
document.getElementById("issuedCount").querySelector("p").textContent =
  booksIssued;
