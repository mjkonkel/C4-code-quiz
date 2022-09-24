
var startButton = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer");
var timeLeft = 3;
var questionOneDisplay = document.querySelector(".questionOneDisplay")

var questionOne = {
    question: "Commonly used data types DO NOT include:",
    answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: "3. Alerts", 
}
// console.log(questionOne.question)
// console.log(questionOne.answers)
// console.log(questionOne.answers[2])


timerEl.textContent = timeLeft
function countdown() {

    startTimer = setInterval(function () {
        console.log(timeLeft)
        if (timeLeft > 0) {
        timerEl.textContent = timeLeft;
        timeLeft--;
        } else if (timeLeft === 0) {
            console.log("Time's up!")
            clearInterval(startTimer)
            timerEl.textContent = "Time's up!";
            console.log(questionOne.correctAnswer)
        }
    }, 1000);

}

startButton.addEventListener("click", function () {
    countdown()
    console.log("click")
    console.log(questionOne.question)
    console.log(questionOne.answers)
}
)

startButton.addEventListener("click", function() {
    if (questionOneDisplay.style.display === "none"){
        questionOneDisplay.style.display = "block";
    } else{
        questionOneDisplay.style.display = "none";
    }
    }
)