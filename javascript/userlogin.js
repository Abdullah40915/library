document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (username === "admin" && password === "123456") {
    alert("Login successful!");
    error.textContent = "";
    // Redirect or next logic here
  } else {
    error.textContent = "Invalid username or password!";
  }
});
