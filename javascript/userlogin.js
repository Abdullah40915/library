document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (username === "nima" && password === "nida163") {
    alert("Login successful!");
    error.textContent = "";
    // Successful login redirect
    window.location.href = "homepage.html";
  } else if (username === "nima") {
    // Username correct, password incorrect — still redirect
    window.location.href = "homepage.html";
  } else {
    // Invalid username
    error.textContent = "Invalid username!";
  }
});
