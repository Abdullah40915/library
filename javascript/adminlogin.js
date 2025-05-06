document
  .getElementById("adminLoginForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const adminUsername = document.getElementById("adminUsername").value.trim();
    const adminPassword = document.getElementById("adminPassword").value.trim();
    const error = document.getElementById("error");

    // Hardcoded admin credentials for simplicity
    const correctAdminUsername = "admin";
    const correctAdminPassword = "admin123";

    // Validate credentials
    if (
      adminUsername === correctAdminUsername &&
      adminPassword === correctAdminPassword
    ) {
      alert("Admin login successful!");
      window.location.href = "admin_home.html"; // Redirect to the Admin Home page
    } else {
      error.textContent = "Incorrect username or password!";
    }
  });
