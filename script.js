// You can add any JavaScript functionality here if needed
document.addEventListener("DOMContentLoaded", function() {
    console.log("The Talking Star website is loaded!");
});

// Example of scrolling animation: smooth scrolling when clicking navigation links
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
