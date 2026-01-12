document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
        alert('Thank you! Your message has been sent to STUREVSKI.');
        this.reset();
    })
    .catch((error) => alert(error));
});
// Scroll Reveal Logic
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(window_item => {
        const windowHeight = window.innerHeight;
        const revealTop = window_item.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            window_item.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealElements);

// Trigger once on load to show Hero
document.addEventListener('DOMContentLoaded', () => {
    // Add "reveal" class to your HTML elements (Hero, Grid items, etc.)
    const sections = document.querySelectorAll('.hero, .item, .contact-container');
    sections.forEach(s => s.classList.add('reveal'));
    revealElements();
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const gate = document.getElementById('gate');

    // Check if the user has already seen the intro this session
    if (sessionStorage.getItem('visited')) {
        loader.style.display = 'none';
        gate.style.display = 'none';
        return; // Stop the rest of the function
    }

    // If first time, run the animations
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 1000);
});

function enterSite(destination) {
    const gate = document.getElementById('gate');
    
    // Set the flag so they don't see it again on refresh
    sessionStorage.setItem('visited', 'true');
    
    gate.classList.add('gate-exit');
    
    if (destination === 'contact') {
        setTimeout(() => {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        }, 800);
    }
}