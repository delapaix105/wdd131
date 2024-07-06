// Script to toggle hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('header nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('show');
        if (nav.classList.contains('show')) {
            hamburger.innerHTML = '&#10006;'; // Close symbol
        } else {
            hamburger.innerHTML = '&#9776;'; // Hamburger symbol
        }
    });

    // Set footer year dynamically
    const footerYear = document.getElementById('footer-year');
    footerYear.textContent = new Date().getFullYear();
});
// Set current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set last modified date
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formattedDate = lastModified.toLocaleDateString('en-US', options);
document.getElementById('lastModified').textContent = `Last Modification: ${formattedDate}`;
