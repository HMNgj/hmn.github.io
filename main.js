const toggle = document.getElementById("themeToggle");
const icon = document.querySelector(".icon");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
    icon.textContent = "☀️";
}

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    if (toggle.checked) {
        icon.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        icon.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});