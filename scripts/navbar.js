// Funcția care gestionează adăugarea sau eliminarea clasei "scrolled"
function handleScroll() {
    const navbar = document.querySelector(".navbar_container");
    if (window.scrollY > 1) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

// Atașează evenimentul de scroll doar dacă lățimea ecranului este peste 1000px
if (window.innerWidth > 1000) {
    window.addEventListener("scroll", handleScroll);
}

// Adaugă un eveniment care detectează redimensionarea ferestrei și reatașează evenimentul de scroll când este cazul
window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
        window.addEventListener("scroll", handleScroll);
    } else {
        window.removeEventListener("scroll", handleScroll);
    }
});




function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('active');
    if (hamburger.classList.contains('active')) {
        console.log("Hamburger button activated");
    }
}





// Scale nav_phone
const nav_phone = document.querySelector('.nav_phone');
const navbar_container = document.querySelector('.navbar_container');

function adjustScale() {
    if (window.innerWidth <= 1000) {
        var navbarHeight = navbar_container.offsetHeight;
        var navphoneHeight = nav_phone.offsetHeight;
        

        let scaleFactor;

        scaleFactor = (navbarHeight / navphoneHeight) * 0.7;
        nav_phone.style.transform = `scale(${scaleFactor})`;

        navbarHeight = navbar_container.offsetHeight;
        navphoneHeight = nav_phone.offsetHeight;
        nav_phone.style.transform = `scale(${scaleFactor})`;
        console.log(navphoneHeight / navbarHeight, ' ');
        
    }
}

// Apelează funcția la încărcare și la redimensionare
window.addEventListener('load', adjustScale);
window.addEventListener('resize', adjustScale);


