const rollIt = setInterval(myTimer, 1000);
window.onload = rollIt;

const counter = document.getElementById("counter");
const tap_button = document.getElementById("tapBtn");
const timer = document.getElementById("timer");
const topScore = document.getElementById("hiScore");

let hiScore = 0;
let count = 0;
let timeCount = 20;

function increment() {
    count++;
    counter.innerHTML = count;
}

function myTimer() {
    if (timeCount > 0) {
    timeCount--;
    timer.innerHTML = timeCount;
    }

    if (timeCount === 0) {
        tap_button.disabled = true;
        timer.innerHTML = "You scored "+count;
        if (count > hiScore) {
            hiScore = count;
            topScore.innerHTML = "HiScore: "+hiScore;
        }
    }
}

function refresh() {
    tap_button.disabled = false;
    count = 0;
    counter.innerHTML = count;
    timeCount = 21;
    rollIt();
}