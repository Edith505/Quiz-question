const questions = [
    {
        question: "Quel language pour les interactions d'une page web?",
        answers :[
            {text: "htlm", correct: false},
            {text: "javascript", correct: true},
            {text: "css", correct: false},
            {text: "php", correct: false},
        ]
    },
    {
        question: "quel language pour une application android",
        answers :[
            {text: "Laravel", correct: false},
            {text: "React", correct: false},
            {text: "Python", correct: false},
            {text: "Java", correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML =  answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
