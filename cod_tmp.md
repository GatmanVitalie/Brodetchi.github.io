# cod_tmp

let button = document.querySelector(".video_btn");

button.addEventListener('mousemove', (e) => {
    let rect = button.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});
