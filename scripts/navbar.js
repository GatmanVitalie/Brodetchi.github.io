window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar_container");
    if (window.scrollY > 1) { // înlocuiește 50 cu valoarea dorită
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
