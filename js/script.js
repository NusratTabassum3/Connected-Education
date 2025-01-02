
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".navlink-container");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
