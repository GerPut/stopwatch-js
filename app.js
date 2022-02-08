let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let st;
function startTimer() {
    if (!st) {

        st = setInterval(timer, 10)
    }
};

function timer() {
    milliseconds++;
    let display = document.getElementById("timer")
    display.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + ":" + (milliseconds < 10 ? "0" + milliseconds : milliseconds);
    if (milliseconds == 99) {
        milliseconds = 0;
        seconds++
    }
    if (seconds == 59) {
        seconds = 0;
        minutes++
    }
    if (minutes == 59) {
        minutes = 0;
        hours++
    }
}

function stopTimer() {
    clearInterval(st)
    st = false
}

function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("timer").innerHTML = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + ":" + (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}