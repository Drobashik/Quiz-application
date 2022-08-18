import { questions } from "./data.js";
import { QuizHandler } from "./QuizHandler.js";
import { RadioHandler } from "./RadioHandler.js";

const questionHeader = document.querySelector('h2');
const radioBtns = Array.from(document.querySelectorAll('input'));
const questionElements = Array.from(document.querySelectorAll('label'));
const submitAnswer = document.querySelector('button');
const resultBox = document.getElementById('result')
const quizBox = document.getElementById('quizer')
const tryAgainBtn = document.querySelector('.again');

const radioHandler = new RadioHandler(radioBtns)
const quizHandler = new QuizHandler(questions, submitAnswer, questionHeader, questionElements);

quizHandler.setupQuiz(radioHandler)
radioHandler.addClickEvents();

submitAnswer.addEventListener("click", () => {
    quizHandler.submitQuestion(radioHandler, resultBox, quizBox)
});

tryAgainBtn.addEventListener("click", () => {
    quizHandler.startAgain(radioHandler, resultBox, quizBox)
})