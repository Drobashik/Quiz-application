import { questions } from "./data.js";
import { QuizHandler } from "./QuizHandler.js";
import { RadioHandler } from "./RadioHandler.js";

const questionHeader = document.querySelector('h2');
const radioBtns =  Array.from(document.querySelectorAll('input'));
const questionElements = Array.from(document.querySelectorAll('label'));
const submitAnswer = document.querySelector('button');

const radioHandler = new RadioHandler(radioBtns)
const quizHandler = new QuizHandler(questions, submitAnswer, questionHeader, questionElements);

quizHandler.setupQuiz(radioHandler)
radioHandler.addClickEvents();

submitAnswer.addEventListener("click", () => {
    quizHandler.submitQuestion(radioHandler)
});