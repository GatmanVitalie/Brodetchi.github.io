let intervalID;
var interval = 6000;
let x = document.getElementsByClassName("slide");
let timerID;
let milliseconds = 0;
let isTimerRunning = false;

window.addEventListener('load', function () {
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    milliseconds = 3000;
    switchSlides();
    milliseconds = 3000;
    intervalID = setInterval(next, interval);
});

var cont = true;
var isd = false;
var imag = 0;

window.addEventListener('blur', function () {
    cont = false;
});

window.addEventListener('focus', function () {
    cont = true;
});

function startTimer() {
    if (!isTimerRunning) {
        const startTime = Date.now() - milliseconds;
        timerID = setInterval(function () {
            milliseconds = Date.now() - startTime;
            //        console.log(`Timer: ${milliseconds} milliseconds`);
        }, 1);
    } else {
        console.log('Timer is already running!');
    }
}

function resetTimer() {
    clearInterval(timerID);
    milliseconds = 0;
    isTimerRunning = false;
    // console.log('Timer reset');
}




function back() {
    imag = imag - 1;


    if (milliseconds < 900) {
        if (isd == false) {
            imag += 1;
            isd = true;
        }
    }
    else {
        isd = false;
    }
    console.log(isd);

    if (imag < 0) {
        imag = x.length - 1;
    }

    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("slidein");
        x[i].classList.remove("slideout");

    }

    x[imag].style.display = "flex";
    x[imag].classList.add("slidein");

    x[imag].style.transitionDuration = '1s';
    if (imag == x.length - 1) {
        x[0].style.transitionDuration = '1s';
    } else {
        x[imag + 1].style.transitionDuration = '1s';
    }

    if (imag == 0) {
        x[x.length - 1].style.transitionDuration = '0s';
        x[x.length - 1].classList.add("slideout");
    } else {
        x[imag - 1].classList.add("slideout");
        x[imag - 1].style.transitionDuration = '0s';

    }

    if (milliseconds < 900) {

        for (var i = 0; i < x.length; i++) {
            x[i].style.transitionDuration = '0s';
            console.log("Trans");
        }
    }


    resetInterval();
    resetTimer();
    startTimer();
}

function next() {

    if (cont) {
        imag = imag + 1;
        switchSlides();
        resetInterval();
        resetTimer();
        startTimer();
    }

}

function forword() {
    imag = imag + 1;
    switchSlides();
    resetInterval();
    resetTimer();
    startTimer();
}



function resetInterval() {
    clearInterval(intervalID);
    intervalID = setInterval(next, interval);
}

function stopSlides() {

    cont = false;
}

function beginSlides() {
    cont = true;
    resetInterval();
}


function switchSlides() {

    if (milliseconds < 900) {
        if (isd == false) {
            imag -= 1;
            isd = true;
        }
    }
    else {
        isd = false;
    }

    if (imag > x.length - 1) {
        imag = 0;
    }

    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("slidein");
        x[i].classList.remove("slideout");
        x[i].style.display = "flex";
        x[i].style.transitionDuration = "0s"
    }

    x[imag].classList.add("slidein");
    x[imag].style.transitionDuration = '1s';
    if (imag == 0) {

        x[x.length - 1].style.transitionDuration = '1s';
        x[x.length - 1].classList.add("slideout");


    } else {
        x[imag - 1].classList.add("slideout");
        x[imag - 1].style.transitionDuration = '1s';

    }

    if (milliseconds < 900) {

        for (var i = 0; i < x.length; i++) {
            x[i].style.transitionDuration = '0s';
            console.log("Trans");
        }
    }


}


function More1() {
    var button = document.getElementById("MoreB");
    button.classList.add("clicked"); // Adds the 'clicked' class to change the color

    setTimeout(More1a, 1000);
    // Perform your desired onClick function here

}

function More1a() {
    // For example, you can add code to alert a message
    alert("Button clicked!");
}

function scrollDown() {
    // You can adjust the values as per your requirement
    window.scrollTo({
        top: window.pageYOffset + window.innerHeight,
        behavior: 'smooth' // This will make the scroll smooth
    });
}