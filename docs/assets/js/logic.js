// Prepare the questions
// Create variables to assign to divs in HTML file (selectors)
// questionsContainer
// questionsTitle etc
// show questions

var startButton = document.querySelector('#start')
var counter;
var currentQuestion;
var answers = questions.correctAnswer;
var question = questions.question;
var choice = questions.choices;

function populateQuestion(question) {
    currentQuestion = 0;
    choicesList.innerHTML = '';
    questionTitle.textContent = question;
    var choicesList = document.createElement('ul')
    for (let i = 0; i< choice.length; i++) {
        document.createElement('li');
        choice.textContent = choice[i];
        choicesList.appendChild(choice);
    }
    choice.appendChild(choicesList)
};


startButton.addEventListener('click', function() {
    questions.setAttribute('class', 'visible');
    start-screen.setAttribute('class', 'hide');
// Show the first question
    currentQuestion = 0;
    populateQuestion(question[currentQuestion]);
    counter = 240;
    timer = setInterval(function() {
        counter--;
        // set timerContainer text to counter
        if (counter <= 0) {
            //endGame()
            clearInterval(timer);
        }
    }, 1000);
    }
    )

    
    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            populateQuestion(questions[currentQuestion]);
        } else {
            endGame();
        }
    }
    
    function endGame() {
        // hide questions container
        // show end screen container
        // assign score to finalScore container
        // clearInterval(timer)
            }
            // questions.forEach(function(question) {
            //     populateQuestion(question);
            // })
            
    
function saveHighScore(initial) {
    // get the current highscore value from localstorage
    // high scores should be in an array
    // JSON parse highscores from localstorage
    // push initial + score to the array
    // order the array from highest to lowest
    // JSON stringify then save back to localstorage
}

// another click event listener for choice selection
// create score variable
// function to check answer and compare against correct answer, return correct or incorrect
// if correct, play correct sound, set answer value correct, add 1 to score, move to next question
// if wrong, counter -10, next question, play wrong sound
// if no questions left, run endGame() function

// Click event listener to submit button
// var initial = initialInput.value.trim()
// saveHighScore()
// redirect to highscore page