import '@fontsource-variable/outfit';
import './close.svg';
import "./index.css";
export {newMarkButton,contentBody, bg};
const mark = require("./mark.js");

let marks = [];
const bg = document.querySelector(".bg");
const contentBody = document.querySelector(".contentBody");
const newMarkButton = document.querySelector(".contentButton");

newMarkButton.addEventListener("click",()=>addMark());

function addMark() {
    let forms;
    const modalForm = mark.instansiateMarkForm("modalOne","Добавить задачу");
    forms = modalForm.createModalMark();
    forms[0].addEventListener("submit", (e) => {
         e.preventDefault();
         const fd = new FormData (forms[0]);
         const obj = Object.fromEntries(fd);
         console.log(obj);
         const markEl = mark.createMark(obj.nameOfMarkModal,obj.MarkDesc);
         markEl.markAppend();
         modalForm.closeForm();

        }
    );
}



