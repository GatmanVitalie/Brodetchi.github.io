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

