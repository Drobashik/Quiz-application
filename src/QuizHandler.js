export class QuizHandler {
    constructor(questions, submitButton, questionHeader, questionElements) {
        this.submitButton = submitButton

        this.questions = questions;
        this.questionHeader = questionHeader;
        this.questionElements = questionElements;

        this.correctAnswer = '';
        this.answeredQuestions = 0;
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

    submitQuestion(radioHandler, resultBox, quizBox) {
        radioHandler.checkRadio();
        const isEnd = this.endChecker()
        if (radioHandler.isChecked && radioHandler.selectedRadio === this.correctAnswer) {
            this.answeredQuestions++;
            this.getOrCheckResult(radioHandler, isEnd, resultBox, quizBox)
        } else if (!radioHandler.isChecked) {
            return;
        } else {
            this.getOrCheckResult(radioHandler, isEnd, resultBox, quizBox)
        }
    }

    endChecker() {
        if (this.quizNumber === this.questions.length - 1) {
            return true;
        }
        return false;
    }

    getOrCheckResult(radioHandler, isEnd, resultBox, quizBox) {
        if (!isEnd) {
            this.quizNumber++;
            this.setupQuiz(radioHandler)
        } else {
            quizBox.style.display = 'none';
            resultBox.style.display = 'block';
            resultBox.children[1].innerHTML = `Your score is ${this.answeredQuestions}/${this.questions.length}`
        }
    }

    startAgain(radioHandler, resultBox, quizBox) {
        this.quizNumber = 0;
        this.answeredQuestions = 0;
        quizBox.style.display = 'block';
        resultBox.style.display = 'none';
        this.setupQuiz(radioHandler);
    }
}