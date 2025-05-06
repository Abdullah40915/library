document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  // Basic validation
  if (username === "" || password === "") {
    error.textContent = "Both fields are required!";
    return;
  }

  // Get existing users from localStorage (if any)
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the username already exists
  if (users.some((user) => user.username === username)) {
    error.textContent = "Username already exists!";
    return;
  }

  // Save the new user
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful!");
  window.location.href = "login.html"; // Redirect to login page
});
