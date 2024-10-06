// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Update ARIA attribute
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
});

// Image Slider Functionality
const radioButtons = document.querySelectorAll('input[name="radio-btn"]');
const manualBtns = document.querySelectorAll('.manual-btn');

manualBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        radioButtons[index].checked = true;
    });
});

// Automatic Slider (Optional Enhancement)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    radioButtons[currentSlide].checked = true;
}, 5000); // Change slide every 5 seconds

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple Validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Te rugăm să completezi toate câmpurile.';
        return;
    }

    // Email Regex for Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Te rugăm să introduci un email valid.';
        return;
    }

    // Simulate Form Submission (Replace with actual submission logic)
    formMessage.style.color = 'green';
    formMessage.textContent = 'Mulțumim pentru mesaj! Îți vom răspunde în curând.';
    contactForm.reset();
});
