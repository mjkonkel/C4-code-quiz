var startButton = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer");
var timeLeft = 60;

// variable containing the questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answer: "3. Alerts",
    },
    {
        title: "The condition in and if / else statement is enclosed within ____.",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
        answer: "3. Parentheses",
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
        answer: "3. All of the Above",
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
        answer: "3. Quotes",
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. Terminal / Bash", "3. For Loops", "4. Console Log"],
        answer: "4. Console Log",
    },
]

// function for ending the quiz
function endQuiz() {
    clearInterval(startTimer)
    questionDiv.innerHTML = '';
    var h3El = document.createElement('h3')
    h3El.textContent = 'All done!'

    var pDiv = document.createElement('div')
    pDiv.textContent = 'Your final score is ' + timeLeft

    questionDiv.append(h3El, pDiv)
}

// say if answer is correct or incorrect
function checkAnswer() {
    if (this.value !== questions[indexNumber].answer) {
        timeLeft -= 10;

        if (timeLeft < 0) {
            timeLeft = 0
            endQuiz()
        }
    }
}

// function for the timer
timerEl.textContent = "Time: " + timeLeft
function countdown() {

    startTimer = setInterval(function () {
        console.log(timeLeft)
        if (timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        if (timeLeft === 0) {
            console.log("Time's up!")
            // clearInterval(startTimer)
            timerEl.textContent = "Time's up!";
            endQuiz()
        }
    }, 1000);

}

// function for showing the questions
var questionDiv = document.getElementById('questionDiv')
var indexNumber = 0

function start() {
    questionDiv.innerHTML = '';
    var h3El = document.createElement('h3')
    h3El.textContent = questions[indexNumber].title

    var buttonDiv = document.createElement('div')
    buttonDiv.classList.add("buttonDiv")

    for (var i = 0; i < questions[indexNumber].choices.length; i++) {

        var btnEl = document.createElement('button')

        btnEl.textContent = questions[indexNumber].choices[i];

        btnEl.setAttribute('value', questions[indexNumber].choices[i])

        btnEl.addEventListener('click', function () {
            console.log(this.value)
            indexNumber++
            start()
            checkAnswer()
        })
        buttonDiv.append(btnEl)
    }
    questionDiv.append(h3El, buttonDiv)
    document.querySelector(".intro").classList.add("hidden")
}

// to start the quiz
startButton.addEventListener("click", function () {
    countdown()
    start()
}
)
