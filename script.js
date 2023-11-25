const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.querySelector('.next-btn');
const scoreDisplay = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    nextButton.style.display = 'block';
    answerButtons.style.pointerEvents = 'none'; // Disable clicking on answer buttons after selection
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
        answerButtons.style.pointerEvents = 'auto'; // Enable clicking on answer buttons for the next question
    } else {
        endGame();
    }
}

function endGame() {
    questionContainer.innerText = 'Quiz completed!';
    answerButtons.innerHTML = '';
    nextButton.style.display = 'none';
    scoreDisplay.innerText = `Score: ${score} out of ${questions.length}`;
}

startGame();
