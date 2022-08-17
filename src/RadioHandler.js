export class RadioHandler {

    constructor(radioButtons) {
        this.radioButtons = radioButtons;
        this.isChecked = false;
        this.selectedRadio = '';
    }
    
    addClickEvents() {
        this.radioButtons.forEach(radio => {
            radio.addEventListener("click", (e) => {
                this.selectedAnswer(e)
            })
        })
    }

    selectedAnswer(event) {
        this.selectedRadio = event.target.labels[0].textContent;
    }

    defaultRadio() {
        this.radioButtons.forEach(radio => {
            radio.checked = false;
        })
    }

    checkRadio() {
        this.radioButtons.forEach(radio => {
            if (radio.checked === true) {
                this.isChecked = true;
            }
        })
    }
}