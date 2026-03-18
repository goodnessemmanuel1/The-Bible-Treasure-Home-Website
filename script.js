// Theme toggle functionality
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const currentYear = document.getElementById("currentYear");

// Set current year in footer
currentYear.textContent = new Date().getFullYear();

// Check for saved theme preference
const savedTheme = localStorage.getItem("bth-theme");
if (savedTheme) {
  body.className = savedTheme;
}

// Theme toggle handler
themeToggle.addEventListener("click", () => {
  const newTheme = body.className === "dark-gold" ? "white" : "dark-gold";
  body.className = newTheme;
  localStorage.setItem("bth-theme", newTheme);
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideNav = event.target.closest(".navbar");
  if (!isClickInsideNav && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
});

// Update active nav link based on current page
const updateActiveLink = () => {
  const currentPath = window.location.pathname;
  document.querySelectorALL(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
};

// Call updateActiveLink on page load
updateActiveLink();
