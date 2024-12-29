// Săgeata
// $('header button').on('click', function () {
//     $(this).toggleClass('active');
// });

// Declansatoare
window.addEventListener('load', function () {
    arange();
});

window.addEventListener("resize", function () {
    arange();
});


// Aranjare la dropdown
function arange() {
    document.getElementById('servici_dd').style.left = document.getElementById('servici').getBoundingClientRect().left + 'px';
    document.getElementById('servici_dd').style.top = document.getElementById('servici').getBoundingClientRect().bottom - 1 + 'px';

    document.getElementById('produse_dd').style.left = document.getElementById('produse').getBoundingClientRect().left + 'px';
    document.getElementById('produse_dd').style.top = document.getElementById('produse').getBoundingClientRect().bottom - 1 + 'px';
}



//Activare /desactivare
function setupToggle(button, div) {
    function toggleActive() {
        button.classList.toggle('active');
        div.classList.toggle('active');
    }

    function removeActive() {
        button.classList.remove('active');
        div.classList.remove('active');
    }

    button.addEventListener('click', (event) => {
        toggleActive();
        event.stopPropagation();
    });

    div.addEventListener('mouseover', () => {
        button.classList.add('active');
        div.classList.add('active');
    });

    button.addEventListener('mouseenter', () => {
        button.classList.add('active');
        div.classList.add('active');
    });

    document.addEventListener('mousemove', (event) => {
        if (!button.contains(event.target) && !div.contains(event.target)) {
            removeActive();
        }
    });

    document.addEventListener('click', () => {
        removeActive();
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
