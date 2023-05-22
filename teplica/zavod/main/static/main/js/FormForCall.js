class FormAction {
    constructor() {
        this.form = document.getElementById("callForm");
        this.formButton = document.getElementById("formButton");

    }
    initSettings() {
        console.log("Hello form");
        this.formButton.addEventListener('click', () => this.formAccept());
    }

    formAccept() {
        let url = "http://localhost:8000/client";
        this.form.action = url;
        this.form.submit();
    }
}

const formAction = new FormAction();

export {formAction};