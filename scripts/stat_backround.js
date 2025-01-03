var backround_image = document.getElementById("statistici")
window.addEventListener('scroll', function () {
    refit_image();
});

window.addEventListener("load", function() {
    refit_image();
});


function refit_image()
{
    console.log("rwgs");
    // if (window.scrollY < backround_image.getBoundingClientRect().top) {
    //     backround_image.style.backgroundImage = "none";
    // }
    // else
    // {
    //     backround_image.style.backgroundImage = "none";
    // }
}