import '@fontsource-variable/outfit';
import './close.svg';
import "./index.css";
export {contentBody, bg};
const mark = require("./mark.js");

let marks = [];
const bg = document.querySelector(".bg");
const contentBody = document.querySelector(".contentBody");
const newMarkButton = document.querySelector(".contentButton");

newMarkButton.addEventListener("click",()=>appendFrom());

function appendFrom() {
    const modalForm = mark.instansiateMarkForm("Добавить задачу");
    modalForm.createModalMark();
}




