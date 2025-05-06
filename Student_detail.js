const students = [
  {
    id: "S001",
    name: "Ali Khan",
    book: "Clean Code",
    issueDate: "2024-05-01",
    returnDate: "2024-05-10",
    returned: true,
  },
  {
    id: "S002",
    name: "Aisha Noor",
    book: "JavaScript: The Good Parts",
    issueDate: "2024-04-20",
    returnDate: "2024-04-27",
    returned: false,
  },
  {
    id: "S003",
    name: "Ahmed Raza",
    book: "Python Crash Course",
    issueDate: "2024-05-02",
    returnDate: "2024-05-12",
    returned: true,
  },
  {
    id: "S004",
    name: "Fatima Zia",
    book: "Algorithms Unlocked",
    issueDate: "2024-04-28",
    returnDate: "2024-05-08",
    returned: false,
  },
];

function renderTable(data) {
  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = "";

  data.forEach((student) => {
    const row = `<tr>
        <td data-label="ID">${student.id}</td>
        <td data-label="Student Name">${student.name}</td>
        <td data-label="Book">${student.book}</td>
        <td data-label="Issue Date">${student.issueDate}</td>
        <td data-label="Return Date">${student.returnDate}</td>
        <td data-label="Status">
          <span class="${
            student.returned ? "status-returned" : "status-pending"
          }">
            ${student.returned ? "Returned" : "Not Returned"}
          </span>
        </td>
      </tr>`;
    tbody.innerHTML += row;
  });
}

// Initial render
renderTable(students);

// Search functionality
document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(value) || s.id.toLowerCase().includes(value)
  );
  renderTable(filtered);
});
