import '@fontsource-variable/outfit';
import "./index.css";
export {contentBody, bg};
const mark = require("./mark.js");

let marks = [];
const bg = document.querySelector(".bg");
const contentBody = document.querySelector(".contentBody");

mark.createMarkForm();