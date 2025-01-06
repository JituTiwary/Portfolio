// JavaScript for smooth scroll effect
document.addEventListener("DOMContentLoaded", function() {
    console.log("The Talking Star website is loaded!");
});

const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
