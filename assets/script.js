
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

    })
}
