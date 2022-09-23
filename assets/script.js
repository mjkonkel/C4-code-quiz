
var startButton = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer");

var timeLeft = 70;

timerEl.textContent = timeLeft
function countdown() {

    x = setInterval(function () {
        console.log(timeLeft)
        if (timeLeft > 0) {
        timerEl.textContent = timeLeft;

            timeLeft--;
        }

    }, 1000);
}

startButton.addEventListener("click", function () {
    countdown()
    console.log("click")
})