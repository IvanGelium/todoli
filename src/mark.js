import {format } from "date-fns";
const body = require("./index.js");
export {createMark,instansiateMarkForm};

class Mark {
    constructor(title ="",desc="") {

        this.title = title;
        this.desc = desc;
        this.date = String (format(new Date(),'dd/MM/yyyy'));
    }
    markAppend() {
        const bodyEl = document.createElement("div");
        bodyEl.className = "grid-cell";
        body.contentBody.insertBefore(bodyEl,body.newMarkButton);
        const titleEl = document.createElement("div");
        titleEl.className = "cell-title";
        titleEl.textContent = this.title;
        bodyEl.appendChild(titleEl);
        const descEl = document.createElement("div");
        descEl.className = "cell-desc";
        descEl.textContent = this.desc;
        bodyEl.appendChild(descEl);
        const dateEl = document.createElement("div");
        dateEl.className = "cell-date";
        dateEl.textContent = this.date;
        bodyEl.appendChild(dateEl);
        
    }

}


class Modal {
    constructor (id,title="Модалка") {
        this.title = title;
        this.id = id;
        this.backBlur = document.createElement("div");
        this.markForm = document.createElement("form"); 
        this.firstRow = document.createElement("div");
        this.closeFormButt = document.createElement("div");
        this.markTitle = document.createElement("div");
    }

    createModalMark () {
        console.log("Создана модальная форма");
        this.backBlur.className = "backBlur";
        this.markForm.className = "markForm";
        this.firstRow.className = "firstRow";
        this.closeFormButt.className = "closeForm";
        this.closeFormButt.addEventListener("click", () => this.closeForm());
        this.markTitle.textContent = `${this.title}`;
        this.markTitle.className = "markTitle";
        this.forms = [];
        
        body.bg.appendChild(this.backBlur);
        this.backBlur.appendChild(this.markForm);
        this.markForm.appendChild(this.firstRow);
        this.firstRow.appendChild(this.markTitle);
        this.firstRow.appendChild(this.closeFormButt);
        this.forms[0] = this.markForm;
        this.forms[1] = new Form (this.markForm,"nameOfMarkModal", "Название").createForm();
        this.forms[2] = new Form (this.markForm,"MarkDesc", "Описание","textarea").createForm();
        this.forms[3] = new Button (this.markForm,"ModalMarkSubmit","Сохранить").createButton();
        return this.forms;
    }

    closeForm() {
        console.log("Закрыто модальное окно");
        this.backBlur.remove();
    }
}

class Form {
    constructor (origin,formId,title ="Форма", formType="input") {
        this.title = title;
        this.formId = formId;
        this.formType = formType;
        this.origin = origin;
        this.formCont = document.createElement("div");
    }

    createForm() {
        this.formCont.className = "form-container";
        const formTitle= document.createElement("label");
        formTitle.setAttribute("for",`${this.formId}`,);
        formTitle.className = "formTitle";
        formTitle.textContent = `${this.title}`;
        const newForm = document.createElement(`${this.formType}`);
        newForm.className = "form";
        newForm.id = this.formId;
        newForm.name = this.formId;

        this.origin.appendChild(this.formCont);
        this.formCont.appendChild(formTitle);
        this.formCont.appendChild(newForm);
        return this.formCont;

    }

}


class Button {
    constructor (origin,id,title) {
        this.origin = origin;
        this.id = id;
        this.title = title;
        this.buttonEl = document.createElement("input");
    }

    createButton() {
        this.buttonEl.id = this.id;
        this.buttonEl.type ="submit";
        this.buttonEl.value = this.title;
        this.buttonEl.textContent = this.title;
        this.buttonEl.class = "buttonEl";
        this.origin.appendChild(this.buttonEl);
        return this.buttonEl;
    }
}

function createMark (title="1",desc="1") {
    
    return new Mark(title,desc);
}

function instansiateMarkForm(id,title) {
    return new Modal(id,title);
}
