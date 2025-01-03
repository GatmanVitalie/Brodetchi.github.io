// Verifică dacă dispozitivul este touch
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

function setupToggle(button, div) {
    let isTouchActive = false; // Flag pentru interacțiuni touch

    function toggleActive() {
        button.classList.toggle('active');
        div.classList.toggle('active');
        console.log('toggle');
    }

    function removeActive() {
        button.classList.remove('active');
        div.classList.remove('active');
        console.log('remove');
    }

    // Gestionare click
    button.addEventListener('click', (event) => {
        toggleActive();
        event.stopPropagation();
        console.log('click');
    });

    if (!isTouchDevice) {
        // Gestionare hover pentru mouse-only
        div.addEventListener('mouseover', () => {
            if (!isTouchActive) {
                button.classList.add('active');
                div.classList.add('active');
                console.log('mouseover active');
            }
        });

        button.addEventListener('mouseenter', () => {
            if (!isTouchActive) {
                button.classList.add('active');
                div.classList.add('active');
                console.log('mouseenter active');
            }
        });

        document.addEventListener('mousemove', (event) => {
            if (!isTouchActive && !button.contains(event.target) && !div.contains(event.target)) {
                removeActive();
            }
        });
    }

    // Închidere dropdown pe click/touch în afara elementului
    document.addEventListener('click', () => {
        removeActive();
    });

    document.addEventListener('touchstart', () => {
        isTouchActive = true; // Setează touch ca activ
        removeActive();

        // Resetează flag-ul pentru touch după un timp
        setTimeout(() => {
            isTouchActive = false;
        }, 300);
    });
}

// Inițializează fiecare set de buton și div
setupToggle(
    document.getElementById('servici'),
    document.getElementById('servici_dd')
);

setupToggle(
    document.getElementById('produse'),
    document.getElementById('produse_dd')
);

// Asigurare poziționare dropdown la resize sau load
window.addEventListener('load', arange);
window.addEventListener('resize', arange);

function arange() {
    document.getElementById('servici_dd').style.left = document.getElementById('servici').getBoundingClientRect().left + 'px';
    document.getElementById('servici_dd').style.top = document.getElementById('servici').getBoundingClientRect().bottom - 1 + 'px';

    document.getElementById('produse_dd').style.left = document.getElementById('produse').getBoundingClientRect().left + 'px';
    document.getElementById('produse_dd').style.top = document.getElementById('produse').getBoundingClientRect().bottom - 1 + 'px';
}
