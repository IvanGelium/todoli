const body = require("./index.js");
export {createMark,createMarkForm};

class Mark {
    constructor(title ="",desc="") {

        this.title = title;
        this.desc = desc;
        this.date = new Date();
    }
    markAppend() {
        const bodyEl = document.createElement("div");
        bodyEl.className = "grid-cell";
        body.contentBody.appendChild(bodyEl);
        const titleEl = document.createElement("div");
        titleEl.className = "cell-title";
        bodyEl.appendChild(titleEl);
        const descEl = document.createElement("div");
        descEl.className = "cell-desc";
        bodyEl.appendChild(descEl);
        const dateEl = document.createElement("div");
        dateEl.className = "cell-date";
        bodyEl.appendChild(dateEl);
        
    }

}


function createMarkForm() {
    const backBlur = document.createElement("div");
    backBlur.className = "backBlur";

    const markForm = document.createElement("div");
    markForm.className = "markForm";

    const closeFormButt = document.createElement("div");
    closeFormButt.className = "closeForm";

    const titleMarkForm = document.createElement("div");
    titleMarkForm.className = "titleMarkForm";

    const descMarkForm = document.createElement("div");
    descMarkForm.className = "descMarkForm";

    body.bg.appendChild(backBlur);
    backBlur.appendChild(markForm);
    markForm.appendChild(closeFormButt);
    markForm.appendChild(titleMarkForm);
    markForm.appendChild(descMarkForm);
}

function createMark () {
    
    return new Mark;
}
