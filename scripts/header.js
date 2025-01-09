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

    document.getElementById('mobile_menu').style.left = document.getElementById('hamburger_menu').getBoundingClientRect().left + 'px';
    document.getElementById('mobile_menu').style.top = document.getElementById('hamburger_menu').getBoundingClientRect().bottom - 1 + 'px';


}



// Tilifon
const checkbox = document.getElementById('hamburger_checkbox');
const mobileMenu = document.getElementById('mobile_menu');

// Verifică click-uri pe document
document.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log("Clicked target:", event.target);
    console.log("Checkbox state before:", checkbox.classList.contains('checked'));

    if (!checkbox.contains(event.target) && !mobileMenu.contains(event.target) && !document.getElementById('hamburger_menu').contains(event.target)) {
        console.log("Clicked outside. Removing classes.");
        checkbox.classList.remove('checked');
        mobileMenu.classList.remove('checked');
    }
    else if (checkbox.contains(event.target) || document.getElementById('hamburger_menu').contains(event.target)) {
        console.log("Clicked checkbox. Current state:", checkbox.classList.contains('checked'));
        if (!checkbox.classList.contains('checked')) {
            console.log("Adding 'checked' class.");
            checkbox.classList.add('checked');
            mobileMenu.classList.add('checked');
        } else {
            console.log("Removing 'checked' class.");
            checkbox.classList.remove('checked');
            mobileMenu.classList.remove('checked');
        }
        event.preventDefault();
    }

    console.log("Checkbox state after:", checkbox.classList.contains('checked'));
    console.log('\n \n \n');
});



// Adaugă un eveniment de click pe checkbox


// Eveniment pentru schimbarea stării checkbox-ului








// MobsetupToggle(
//     document.getElementById('produse_mob'),
//     document.getElementById('produse_mob_dd')
// );

// MobsetupToggle(
//     document.getElementById('servici_mob'),
//     document.getElementById('servici_mob_dd')
// );



// function MobsetupToggle(button, div) {
//     let isTouchActive = false; // Flag pentru interacțiuni touch

//     function toggleActive() {
//         button.classList.toggle('active');
//         div.classList.toggle('active');
//         console.log('toggle');
//     }

//     function removeActive() {
//         button.classList.remove('active');
//         div.classList.remove('active');
//         console.log('remove');
//     }

//     // Gestionare click
//     button.addEventListener('click', (event) => {
//         toggleActive();
//         event.stopPropagation();
//         console.log('click');
//     });

//     if (!isTouchDevice) {
//         // Gestionare hover pentru mouse-only
//         div.addEventListener('mouseover', () => {
//             if (!isTouchActive) {
//                 button.classList.add('active');
//                 div.classList.add('active');
//                 console.log('mouseover active');
//             }
//         });

//         button.addEventListener('mouseenter', () => {
//             if (!isTouchActive) {
//                 button.classList.add('active');
//                 div.classList.add('active');
//                 console.log('mouseenter active');
//             }
//         });

//         document.addEventListener('mousemove', (event) => {
//             if (!isTouchActive && !button.contains(event.target) && !div.contains(event.target)) {
//                 removeActive();
//             }
//         });
//     }

//     // Închidere dropdown pe click/touch în afara elementului
//     document.addEventListener('click', () => {
//         removeActive();
//     });

//     document.addEventListener('touchstart', () => {
//         isTouchActive = true; // Setează touch ca activ
//         removeActive();

//         // Resetează flag-ul pentru touch după un timp
//         setTimeout(() => {
//             isTouchActive = false;
//         }, 300);
//     });
// }