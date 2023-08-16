// functions
// changing page function
function togglePage(str) {
    if (str === "first") {
        firstPage.style.display = "block";
        mainPage.style.display = "none";
    } else if (str === "main") {
        firstPage.style.display = "none";
        mainPage.style.display = "block";
    }
}
// setting varbiles for the first page
let firstPage = document.querySelector(".first-page");
let mainPage = document.querySelector(".main-page");
// the content main object
let categories = {
    languages: ["c charp"],
    people: ["elzero web"],
    countries: ["canada"],
    food: ["pizza"],
    components: ["ram"],
}
// vars to choose the word
let chosenCategory;
let chosenWord;
let categoriesBtns = document.querySelectorAll(".categories button");
// vars to set the word in its place
let wordPlace = document.querySelector(".wanted-word");
categoriesBtns.forEach(function (ele) {
    ele.onclick = function () {
        togglePage("main");
        chosenCategory = ele.className;
        chosenWord = Array.from(categories[chosenCategory][Math.floor(Math.random() * categories[chosenCategory].length)]);
        // pending the chosenWord to it propriate place
        let bigSpan = document.createElement("span");
        chosenWord.forEach(function (ele) {
            let span = document.createElement("span");
            if (ele !== " ") {
                span.appendChild(document.createTextNode(""));
                bigSpan.appendChild(span);
            } else {
                wordPlace.appendChild(bigSpan);
                bigSpan = document.createElement("span");
            }
        })
        wordPlace.appendChild(bigSpan);
    }
})
// implemetaion of the key board
let keyBoardLetters = Array.from("qwertyuiopasdfghjklzxcvbnm");
let keyBoard = document.querySelector(".key-board");
let bigSpan = document.createElement("span");
keyBoardLetters.forEach(function (ele, index) {
    let button = document.createElement("button");
    if (index === 10) {
        keyBoard.appendChild(bigSpan);
        bigSpan = document.createElement("span");
        button.appendChild(document.createTextNode(ele));
        bigSpan.appendChild(button);
    } else if (index === 19) {
        keyBoard.appendChild(bigSpan);
        bigSpan = document.createElement("span");
        button.appendChild(document.createTextNode(ele));
        bigSpan.appendChild(button);
    } else {
        button.appendChild(document.createTextNode(ele));
        bigSpan.appendChild(button);
    }
})
keyBoard.appendChild(bigSpan);
