window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // înlocuiește 50 cu valoarea dorită
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
