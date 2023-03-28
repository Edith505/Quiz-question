const question = [
    {
        question: "Quel language pour les interactions d'une page web?",
        answoers :[
            {text: "htlm", correct: false},
            {text: "javascript", correct: true},
            {text: "css", correct: false},
            {text: "php", correct: false},
        ]
    },
    {
        question: "quel language pour une application android",
        answoers :[
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
