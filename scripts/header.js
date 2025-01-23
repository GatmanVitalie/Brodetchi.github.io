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
        // console.log('remove');
    }

    // Gestionare click
    button.addEventListener('click', (event) => {
        toggleActive();
        event.stopPropagation();
        // console.log('click');
    });

    if (!isTouchDevice) {
        
        // Gestionare hover pentru mouse-only
        div.addEventListener('mouseover', () => {
            if (!isTouchActive) {
                button.classList.add('active');
                div.classList.add('active');
                // console.log('mouseover active');
            }
        });

        button.addEventListener('mouseenter', () => {
            if (!isTouchActive) {
                button.classList.add('active');
                div.classList.add('active');
                // console.log('mouseenter active');
            }
        });

        document.addEventListener('mousemove', (event) => {
            const buttonRect = button.getBoundingClientRect();
            const divRect = div.getBoundingClientRect();
    
            const isBetweenButtonAndDiv =
                event.clientX >= Math.min(buttonRect.left, divRect.left) &&
                event.clientX <= Math.max(buttonRect.right, divRect.right) &&
                event.clientY >= buttonRect.bottom &&
                event.clientY <= divRect.top;
                console.log(isBetweenButtonAndDiv);
            if (!isTouchActive && !button.contains(event.target) && !div.contains(event.target) && isBetweenButtonAndDiv == false) {
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
const elementMap = {
    hamburger_menu: { dropdown: 'mobile_menu', align: 'right' },
    servici: { dropdown: 'servici_dd', align: 'left' },
    produse: { dropdown: 'produse_dd', align: 'left' }
};

// Funcție generală pentru aliniere
function alignElements() {
    const header = document.querySelector('header'); // Selectăm header-ul
    const headerHeight = header.offsetHeight; // Obținem înălțimea header-ului
    const isSimplified = header.classList.contains('simplified'); // Verificăm dacă are clasa `simplified`

    for (const [baseElementId, settings] of Object.entries(elementMap)) {
        const baseElement = document.getElementById(baseElementId);
        const dropdownElement = document.getElementById(settings.dropdown);

        if (baseElement && dropdownElement) {
            const baseRect = baseElement.getBoundingClientRect(); // Coordonatele elementului față de viewport

            // Setarea poziției `top`
            if (isSimplified) {
                dropdownElement.style.top = `${headerHeight}px`; // Înălțimea header-ului când are clasa `simplified`
            } else {
                dropdownElement.style.top = `${baseRect.bottom}px`; // Coordonata de jos a elementului de bază
            }

            // Setarea poziției `left` bazată pe aliniere
            if (settings.align === 'left') {
                dropdownElement.style.left = `${baseRect.left}px`;
            } else if (settings.align === 'right') {
                dropdownElement.style.left = `${baseRect.right - dropdownElement.offsetWidth}px`;
            } else if (settings.align === 'center') {
                dropdownElement.style.left = `${baseRect.left + (baseRect.width - dropdownElement.offsetWidth) / 2}px`;
            }

        }
    }
}





// Aliniaza inițial
alignElements();

window.addEventListener("resize", alignElements);
window.addEventListener("scroll", alignElements);
document.addEventListener('load', alignElements);

// Tilifon
const checkbox = document.getElementById('hamburger_checkbox');
const mobileMenu = document.getElementById('mobile_menu');

// Verifică click-uri pe document
document.addEventListener('click', function (event) {
    alignElements();
    event.stopPropagation();
    // console.log("Clicked target:", event.target);
    // console.log("Checkbox state before:", checkbox.classList.contains('checked'));
    // console.log("Este display:", document.getElementById('hamburger_menu').style.display == 'none');
    if (!checkbox.contains(event.target) && !mobileMenu.contains(event.target) && !document.getElementById('hamburger_menu').contains(event.target)) {
        // console.log("Clicked outside. Removing classes.");
        checkbox.classList.remove('checked');
        mobileMenu.classList.remove('checked');
        reset_mobileMenu();
    }
    else if (checkbox.contains(event.target) || document.getElementById('hamburger_menu').contains(event.target)) {
        // console.log("Clicked checkbox. Current state:", checkbox.classList.contains('checked'));
        if (!checkbox.classList.contains('checked')) {
            // console.log("Adding 'checked' class.");
            checkbox.classList.add('checked');
            mobileMenu.classList.add('checked');
        } else {
            // console.log("Removing 'checked' class.");
            checkbox.classList.remove('checked');
            mobileMenu.classList.remove('checked');
            reset_mobileMenu();

        }
        event.preventDefault();
    }

    // console.log("Checkbox state after:", checkbox.classList.contains('checked'));
    // console.log('\n \n \n');
});

// Dă uncheck la hamburger când el este ascuns
window.onresize = function () {
    const phoneBtns = document.getElementById('phone_btns');
    const displayValue = window.getComputedStyle(phoneBtns).display;

    if (displayValue === 'none') {
        checkbox.classList.remove('checked');
        mobileMenu.classList.remove('checked');
    }
};



const servici_mob = document.getElementById('servici_mob');
const servici_mob_dd = document.getElementById('servici_mob_dd');
const produse_mob = document.getElementById('produse_mob');
const produse_mob_dd = document.getElementById('produse_mob_dd');

function toggle_servici_mob() {
    servici_mob.classList.toggle('active');
    servici_mob_dd.classList.toggle('active');
}

function toggle_produse_mob() {
    produse_mob.classList.toggle('active');
    produse_mob_dd.classList.toggle('active');
}

function reset_mobileMenu() {
    servici_mob.classList.remove('active');
    servici_mob_dd.classList.remove('active');
    produse_mob.classList.remove('active');
    produse_mob_dd.classList.remove('active');
}






// Posiția la header
const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    var currentScrollY = window.scrollY;

    // Adaugă clasa 'simplified' dacă scroll-ul e peste 100svh
    if (currentScrollY > window.innerHeight) {
        header.classList.add('simplified');
    } else {
        header.classList.remove('simplified');
    }

    // Ascunde sau arată header-ul în funcție de direcția scroll-ului
    if (currentScrollY > lastScrollY) {
        // Scroll down
        header.classList.add('hidden');
    } else {
        // Scroll up
        header.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
});


// Video button animation handle
let videoButton = document.querySelector(".video_btn");

videoButton.addEventListener('mousemove', (e) => {
    let rect = videoButton.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    videoButton.style.setProperty('--mouse-x', x + "px");
    videoButton.style.setProperty('--mouse-y', y + "px");
});