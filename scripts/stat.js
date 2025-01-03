let elements = document.querySelectorAll('.stat');
let stath2 = document.querySelectorAll('.stat h2');
var startvalue = 1.6;
var delta = 0.2;
let animationTime = [startvalue, startvalue+delta, startvalue+2*delta, startvalue+3*delta]; // s
let vmax = [1.437, 8.16, 73, 26];
let digits = [3, 2, 0, 0];
let booleans = [false, false, false, false];
let animations = []; // Array to store animation information for each element

// Calculate constants for each animation
// let as = vmax.map((v, i) => (3 * v) / (animationTime[i] * animationTime[i]));
// let bs = vmax.map((v, i) => (2 * v) / (animationTime[i] * animationTime[i] * animationTime[i]));
let as = vmax.map((v, i) => v);
let bs = vmax.map((v, i) => Math.pow(v, 1/3));
let cs = vmax.map((v, i) => animationTime[i] / bs[i]);

window.addEventListener('scroll', function () {
    var screenHeight = window.innerHeight;
    for (var i = 0; i < elements.length; i++) {
        var position = elements[i].getBoundingClientRect().top;
        // console.log(position/screenHeight);
        if (position < screenHeight * 0.79 && !booleans[i]) {
            // alert("scroll");
            console.log(animationTime[i]);
            booleans[i] = true;
            startAnimation(stath2[i], i);
        }
    }
});

function startAnimation(element, index) {
    let startTime = performance.now(); // Get the start time of the animation
    let endTime = startTime + animationTime[index] * 1000; // Convert animationTime to milliseconds

    animations[index] = {
        startTime: startTime,
        endTime: endTime,
        element: element
    };

    requestAnimationFrame(function animate(currentTime) {
        let progress = (currentTime - startTime) / (endTime - startTime);
        if (progress < 1) {
            updateElementValue(index, progress);
            requestAnimationFrame(animate);
        } else {
            updateElementValue(index, 1); // Ensure final value is accurate
        }
    });
}

function updateElementValue(index, progress) {
    let time = progress * animationTime[index]; // Calculate the current time within the animation
    // let value = time * time * (as[index] - bs[index] * time);
    let value = as[index] - Math.pow(bs[index] - time/cs[index], 3);
    let formattedValue = value.toFixed(digits[index]);
    animations[index].element.textContent = formattedValue.toString();
}
