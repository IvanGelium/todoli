import "./index.css";
import menuImg1 from "./black_burger.jpg"
import menuIim2 from "./red_pasta.jpg"
import menuIim3 from "./grean_bean.jpeg"
import menuIim4 from "./golden_ice.jpg"
import menuIim5 from "./elven_beer.jpg"
import menuIim6 from "./shell_pizza.jpg"
import menuIim7 from "./frog.jpg"
// Supports weights 400-900
import '@fontsource-variable/cinzel';
import '@fontsource/pirata-one';
const aboutJS = require("./about")
export {content, aboutButt};


const menuButt = document.querySelector("#navBut1");
const aboutButt = document.querySelector("#navBut2");
const content = document.querySelector("#content");
let contentGrid;


class menuEl {
    constructor(dishName = "",dishImgPath = "",dishDesc = "") {
        this.dishImgPath = dishImgPath;
        this.dishName = dishName;
        this.dishDesc = dishDesc;
        this.bodyEl = document.createElement("div");
        this.imgEl = document.createElement("img");
        this.nameEl = document.createElement("div");
        this.descEl = document.createElement("div");
    }
    appendMenuEl() {
        contentGrid.appendChild(this.bodyEl);
        this.bodyEl.className = "grid-el";
        const useless = document.createElement("div");
        useless.className = "useless";
        this.bodyEl.appendChild(useless);
        useless.appendChild(this.nameEl);
        this.nameEl.className = "grid-el-name";
        this.nameEl.textContent = this.dishName;
        useless.appendChild(this.imgEl);
        this.imgEl.className = "grid-el-img";
        this.imgEl.src = this.dishImgPath;
        useless.appendChild(this.descEl);
        this.descEl.className = "grid-el-desc";
        this.descEl.textContent = this.dishDesc;
    }
}

function AppendAllMenu () {
    console.log ("click Menu");
    if (content.firstElementChild !== null) {content.firstElementChild.remove()};
    contentGrid = document.createElement("div");
    contentGrid.className = "content-grid";
    content.appendChild(contentGrid);
    let menu1 = new menuEl("Dwarven Coal Burger",menuImg1,"This simple dwarven dish has served as the main source of food for miners of the glorious Torden of Steel for thousands of years. Charged with magic, coal is not only easily digested by the body, but also imparts explosive power. Be careful, it reduces fire resistance.");
    menu1.appendMenuEl();
    let menu2 = new menuEl("Dragon Parasite Pasta",menuIim2,"Even the thought of eating parasites may seem repulsive, but don't be fooled, you're not a dragon, and this pasta cooked with 5th circle fire spells is not only completely safe, but also tastes incredible. Be careful, the dish is very spicy, increases protection from magic and increases the power of fire spells.");
    menu2.appendMenuEl();
    let menu3 = new menuEl("Beans and Barometz",menuIim3,"A dish that will change your idea of ​​cuisine. The main dish here is the pods of carnivorous beans, which have a rich meaty taste. And the side dish is Barometz meat, which has a texture similar to a salad and notes of fruity flavor.");
    menu3.appendMenuEl();
    let menu4 = new menuEl("Ice Cream of Great Luck",menuIim4,"Do you feel like your adventures aren't going as smoothly as you'd like them to lately, despite your best efforts? This ice cream will not only help you fix that situation, but it also has a truly rich taste.");
    menu4.appendMenuEl();
    let menu5 = new menuEl("Elven Beer Set",menuIim5,"Everyone has heard of the legendary Dwarven beer, but what about the Elven beer? \"Elves can't brew beer,\" you might say. But that's not true. For thousands of years, several ancient Elven families have been practicing the art of brewing and have brought it to near perfection. Let's be honest, this doesn't taste like regular beer, it's fruity and not as hoppy, but if you're looking to try something new, this set is for you.");
    menu5.appendMenuEl();
    let menu6 = new menuEl("Memento Shell Pizza",menuIim6,"Have you ever been to the shores of the cold Idren Bay? Then you have met the little rascals that serve as the main ingredient for this dish. These deeply magical creatures steal the brightest memories, and then store them in their strong shells. If you decide to order this dish, each bite will fill you with emotions and experiences. Be careful, if you are not a dwarf, you will need to enchant your teeth.");
    menu6.appendMenuEl();
    let menu7 = new menuEl("Mimic Dish",menuIim7,"If your life is boring and routine, you can add a pinch of excitement. Our chefs will choose a dish for you and enchant it so that you can enjoy an incredibly delicious surprise.");
    menu7.appendMenuEl();
}
menuButt.addEventListener("click",() =>AppendAllMenu());
aboutButt.addEventListener("click", () =>aboutJS.appenAbout());
