// Library data
const libraryData = {
  totalBooks: 50,
  users: [
    { name: "Nida", emoji: "👩", booksBorrowed: 3 },
    { name: "Iman", emoji: "👩", booksBorrowed: 1 },
    { name: "Abdullah", emoji: "👨", booksBorrowed: 4 },
    { name: "Nimra", emoji: "👩", booksBorrowed: 2 },
    { name: "Atiqa", emoji: "👩", booksBorrowed: 0 },
    { name: "Zohaib", emoji: "👨", booksBorrowed: 5 },
  ],
  popularBooks: [
    "Operating System",
    "Problem Solving 2",
    "Web Programming",
    "Artificial Intelligence",
    "Cyber Security",
    "Database Systems",
  ],
};

// Populate dashboard
function populateDashboard() {
  const bookCount = document.getElementById("bookCount");
  const userCount = document.getElementById("userCount");
  const issuedCount = document.getElementById("issuedCount");

  document.getElementById("popularBooks").innerHTML = libraryData.popularBooks
    .map((book) => `<li>${book}</li>`)
    .join("");
  document.getElementById("registeredUsers").innerHTML = libraryData.users
    .map((user) => `<li>${user.emoji} ${user.name}</li>`)
    .join("");
  document.getElementById("issuedBooks").innerHTML = libraryData.users
    .map((user) => `<li>${user.name} → ${user.booksBorrowed} books</li>`)
    .join("");

  bookCount.querySelector(
    "h2"
  ).textContent = `Total Books (${libraryData.totalBooks})`;
  userCount.querySelector(
    "h2"
  ).textContent = `Registered Users (${libraryData.users.length})`;
  issuedCount.querySelector(
    "h2"
  ).textContent = `Books Issued (${libraryData.users.reduce(
    (sum, user) => sum + user.booksBorrowed,
    0
  )})`;
}

populateDashboard();

// Search functionality
function handleSearch() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const filter = document.getElementById("filterSelect").value;
  const resultBox = document.getElementById("result");

  // Clear previous results
  resultBox.textContent = "";

  // Check for empty input
  if (searchValue === "") {
    resultBox.textContent = "Please enter a search value.";
    return;
  }

  let results = [];

  // Filter based on the selected option
  if (filter === "books") {
    results = libraryData.popularBooks.filter((book) =>
      book.toLowerCase().includes(searchValue)
    );
    if (results.length > 0) {
      resultBox.textContent = `✅ Found in Popular Books: ${results.join(
        ", "
      )}`;
    } else {
      resultBox.textContent = `❌ No books found matching "${searchValue}".`;
    }
  } else if (filter === "users") {
    results = libraryData.users.filter((user) =>
      user.name.toLowerCase().includes(searchValue)
    );
    if (results.length > 0) {
      resultBox.textContent = `✅ Found Users: ${results
        .map((user) => user.name)
        .join(", ")}`;
    } else {
      resultBox.textContent = `❌ No users found matching "${searchValue}".`;
    }
  } else if (filter === "issued") {
    results = libraryData.users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue) ||
        user.booksBorrowed.toString() === searchValue
    );
    if (results.length > 0) {
      resultBox.textContent = `✅ Found in Books Issued: ${results
        .map((user) => `${user.name} (${user.booksBorrowed} books)`)
        .join(", ")}`;
    } else {
      resultBox.textContent = `❌ No matches found for "${searchValue}" in Books Issued.`;
    }
  }
}

// Add event listener to the button as a fallback
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  if (searchButton) {
    searchButton.addEventListener("click", handleSearch);
  }
});
