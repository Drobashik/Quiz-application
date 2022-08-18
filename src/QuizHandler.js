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
            this.getResult(radioHandler, isEnd, resultBox, quizBox)
        } else {
            this.getResult(radioHandler, isEnd, resultBox, quizBox)
        }
    }

    endChecker() {
        if (this.quizNumber === this.questions.length - 1) {
            return true;
        }
        return false;
    }


    getResult(radioHandler, isEnd, resultBox, quizBox) {
        if (!isEnd) {
            this.quizNumber++;
            this.setupQuiz(radioHandler)
        } else {
            quizBox.style.display = 'none';
            resultBox.style.display = 'block';
            resultBox.innerHTML = 
            `
            <h1>Results</h1>
            <h2>Your score is ${this.answeredQuestions}/${this.questions.length}</h3>
            <button>Okey</button>
            `
        }
    }
}