// // Funcția care gestionează adăugarea sau eliminarea clasei "scrolled"
// function handleScroll() {
//     const navbar = document.querySelector(".navbar_container");
//     if (window.innerWidth > 1000 && window.scrollY > 1) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// }

// window.addEventListener("scroll", handleScroll);

// // Adaugă un eveniment care detectează redimensionarea ferestrei și reatașează evenimentul de scroll când este cazul
// window.addEventListener("resize", function () {
//     if (window.innerWidth > 1000) {
//         window.addEventListener("scroll", handleScroll);
//     } else {
//         window.removeEventListener("scroll", handleScroll);
//     }
// });

// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
}