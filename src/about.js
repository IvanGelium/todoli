import {content,aboutButt} from "./index";
export {appenAbout};

function appenAbout () {
    if (content.firstElementChild !== null) {content.firstElementChild.remove()};
    console.log("click About");
    const aboutBody = document.createElement("div");
    aboutBody.className = "aboutBody";
    content.appendChild(aboutBody);
    const aboutUse = document.createElement("div");
    aboutUse.className = "aboutUse";
    aboutBody.appendChild(aboutUse);
    const nameHead = document.createElement("div");
    nameHead.className = "nameHead";
    nameHead.textContent = "Dragon's Pan — here myths become food"
    aboutUse.appendChild(nameHead);
    const textAbout = document.createElement("div");
    textAbout.className = "textAbout";
    textAbout.textContent = "In the heart of the old town, where narrow streets intertwine like the threads of an ancient tapestry, there is a tavern that is the stuff of legend. Its sign, carved from wood, depicts a dragon wrapped around a giant frying pan."
    aboutUse.appendChild(textAbout);
    const textAbout2 = document.createElement("div");
    textAbout2.className = "textAbout2";
    textAbout2.textContent = "The door to the tavern creaks, as if welcoming each guest, and inside there is an atmosphere that transports you to another world. The walls are decorated with griffin skins, unicorn horns and dragon scales, shimmering in the light of magical lanterns. The air is filled with head-spinning aromas: roasted phoenix meat, stewed basilisk tail and pies filled with golden apples of the Hesperides."
    aboutUse.appendChild(textAbout2);
    const textAbout3 = document.createElement("div");
    textAbout3.className = "textAbout3";
    textAbout3.textContent = "Behind the counter stands the tavern owner, Garrick Firebeard, a former dragon hunter and now a master of the culinary arts. His braided beard resembles flames, and his eyes glow with the wisdom of a man who knows how to turn myth into delicacy. He personally selects every ingredient for his dishes, be it the meat of a young dragon or the wings of a harpy."
    aboutUse.appendChild(textAbout3);
    
}