let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Funcție pentru schimbarea slide-ului
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            triggerAnimation(slide.id); // Triggerează animația pentru slide-ul curent
        }
    });
}

// Funcție pentru animații
function triggerAnimation(slideId) {
    if (slideId === 'slide1') {
        // Adaugă animația pentru slide-ul 1
        document.querySelector('#slide1 img').style.animation = 'fadeIn 2s ease';
    } else if (slideId === 'slide2') {
        // Adaugă animația pentru slide-ul 2
        document.querySelector('#slide2 img').style.animation = 'slideIn 2s ease';
    } else if (slideId === 'slide3') {
        // Adaugă animația pentru slide-ul 3
        document.querySelector('#slide3 img').style.animation = 'zoomIn 2s ease';
    }
}

// Butoane de navigare
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Inițializează slider-ul
showSlide(currentSlide);
