// functions
// changing page function
function togglePage(str) {
    if (str === "first") {
        firstPage.style.display = "block";
        mainPage.style.display = "none";
        finalPage.style.display = "none";
    } else if (str === "main") {
        firstPage.style.display = "none";
        mainPage.style.display = "block";
        finalPage.style.display = "none";
    } else {
        firstPage.style.display = "none";
        mainPage.style.display = "block";
        finalPage.style.display = "flex";
    }
}
// restart function
function again() {
    // making the man invisibal
    base.style.width = "0";
    standV.style.height = "0";
    standH.style.width = "0";
    ropeAttachment.style.height = "0";
    rope.style.opacity = "0";
    head.style.opacity = "0";
    body.style.height = "0";
    hands[0].style.height = "0";
    hands[1].style.height = "0";
    legs[0].style.height = "0";
    legs[1].style.height = "0";
    //fetcking a new word
    wordPlace.innerHTML = "";
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
    // taking of the space because we dont need it any more
    if (chosenWord.indexOf(" ") !== -1) { chosenWord.splice(chosenWord.indexOf(" "), 1); }
    // geting the spans that each letter should fall in
    wordPlaceSpans = Array.from(document.querySelectorAll(".wanted-word span span"));
    // setting new key board
    keyBoardKeys.forEach(function (ele) {
        ele.style.opacity = "1";
        ele.removeAttribute("disabled");
    })
    // setting mistakes to 0
    mistakes = 0;
    // resting the colors of the result
    result.className = "result";
}
// back to first page function
function back() {
    togglePage("first");
}
// setting varbiles for the first page
let firstPage = document.querySelector(".first-page");
let mainPage = document.querySelector(".main-page");
let finalPage = document.querySelector(".final-page");
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
let wordPlaceSpans;
categoriesBtns.forEach(function (ele) {
    ele.onclick = function () {
        togglePage("main");
        chosenCategory = ele.className;
        again();
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

// get the keyboard keys
let keyBoardKeys = Array.from(document.querySelectorAll(".key-board span button"));
// getting every part of the body of the man
let base = document.querySelector(".base");
let standV = document.querySelector(".stand-v");
let standH = document.querySelector(".stand-h");
let ropeAttachment = document.querySelector(".rope-attachment");
let rope = document.querySelector(".rope");
let head = document.querySelector(".head");
let body = document.querySelector(".body");
let hands = document.querySelectorAll(".hand-l , .hand-r");
let legs = document.querySelectorAll(".leg-l , .leg-r");
// the mistakes counter 
let mistakes = 0;
// getting the result span and the message span 
let result = document.querySelector(".result");
let message = document.querySelector(".message");
// wright sould 
let sound = document.querySelector(".succed");
// the logic of the game
keyBoardKeys.forEach(function (ele) {
    ele.onclick = function () {
        let found = false;
        chosenWord.forEach(function (ele2, index) {
            console.log(ele2, ele.innerHTML);
            if (ele2 === ele.innerHTML) {
                found = true;
                ele.style.opacity = "0";
                ele.setAttribute("disabled", "");
                wordPlaceSpans[index].innerHTML = ele2;
                console.log(sound);
                sound.play();
            } else {
                ele.style.opacity = "0";
                ele.setAttribute("disabled", "");
            }
        })
        if (!found) {
            mistakes++;
        }
        switch (mistakes) {
            case 1:
                base.style.width = "100px";
                break;
            case 2:
                standV.style.height = "300px";
                break;
            case 3:
                standH.style.width = "130px";
                break;
            case 4:
                ropeAttachment.style.height = "50px";
                break;
            case 5:
                rope.style.opacity = "1";
                break;
            case 6:
                head.style.opacity = "1";
                break;
            case 7:
                body.style.height = "111px";
                break;
            case 8:
                hands[0].style.height = "60px";
                hands[1].style.height = "60px";
                break;
            case 9:
                legs[0].style.height = "60px";
                legs[1].style.height = "60px";
                togglePage("final");
                result.innerHTML = "Game Over"
                result.classList.add("red");
                message.innerHTML = "The Man Is DEAD "
                break;
        }
        // setting the winning state
        let empty = false;
        wordPlaceSpans.forEach(function (ele) {
            ele.innerHTML === "" ? empty = true : empty;
        })
        if (!empty) {
            togglePage("final");
            result.innerHTML = "Congratulations";
            result.classList.add("green");
            message.innerHTML = "You Saved The Man Successfully";
        }
    }
})
// getting return and restart buttons of the main page
let mainBack = document.querySelector(".top .back");
let mainRestart = document.querySelector(".top .again");

mainBack.onclick = function () {
    back();
}
mainRestart.onclick = function () {
    again();
}

// getting return and restart buttons of final page
let finalBack = document.querySelector(".final-page .back");
let finalRestart = document.querySelector(".final-page .again");

finalBack.onclick = function () {
    back();
}
finalRestart.onclick = function () {
    togglePage("main");
    again();
}