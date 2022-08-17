export class QuizHandler {

    constructor(questions, submitButton, questionHeader, questionElements) {
        this.submitButton = submitButton

        this.questions = questions;
        this.questionHeader = questionHeader;
        this.questionElements = questionElements;

        this.correctAnswer = '';
        this.quizNumber = 0;
    }


    setupQuiz(radioHandler) {
        radioHandler.isChecked = false;
        radioHandler.defaultRadio();
        this.questionHeader.innerHTML = this.questions[this.quizNumber].title;
        this.questionElements.forEach((label, index) => {
            label.innerHTML = this.questions[this.quizNumber].body[index];
        })
        this.correctAnswer = this.questions[this.quizNumber].correct;
    }

    submitQuestion(radioHandler) {
        radioHandler.checkRadio();
        if (radioHandler.isChecked && radioHandler.selectedRadio === this.correctAnswer) {
            this.quizNumber++;
            this.setupQuiz(radioHandler)
        }
    }
}