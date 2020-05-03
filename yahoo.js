var contains = false

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/coronavirus/gi) || element.textContent.match(/covid-19/gi) || 
        element.textContent.match(/covid/gi)) {
            contains = true
        }
    }
}

var list = document.getElementsByClassName("dd algo algo-sr Sr");

for (var i = 0; i < list.length; i++) {
    replaceText(list[i])
    if (contains) {
        list[i].style.display = "none"
    } 
    contains = false;
}

var list = document.getElementsByClassName("dd algo algo-sr richAlgo");

for (var i = 0; i < list.length; i++) {
    replaceText(list[i])
    if (contains) {
        list[i].style.display = "none"
    } 
    contains = false;
}

var map = document.getElementsByClassName("dd CrisisMapWidget");
map[0].style.display = "none"

var list = document.getElementsByClassName("ov-a fst");

for (var i = 0; i < list.length; i++) {
    replaceText(list[i])
    if (contains) {
        list[i].style.display = "none"
    } 
    contains = false;
}

var list = document.getElementsByClassName("ov-a lst");

for (var i = 0; i < list.length; i++) {
    replaceText(list[i])
    if (contains) {
        list[i].style.display = "none"
    } 
    contains = false;
}



var list = document.getElementsByClassName("ov-a");


for (var i = 0; i < list.length; i++) {
    replaceText(list[i])
    if (contains) {
        list[i].style.display = "none"
    } 
    contains = false;
}

var map = document.getElementsByClassName("dd emergencyHelp");
map[0].style.display = "none"

var list = document.getElementsByClassName(" cardReg searchRightTop");


for (var i = 0; i < list.length; i++) {
    replaceText(list[i])
    if (contains) {
        list[i].style.display = "none"
    } 
    contains = false;
}

var list = document.getElementsByClassName("mt-2 ml-0 mr-2 ov-v mb-13 pos-br");

for (var i = 0; i < list.length; i++) {
    replaceText(list[i])
    if (contains) {
        list[i].style.display = "none"
    } 
    contains = false;
}


var list = document.getElementsByClassName("dd bing_dd fst lst Img");


for (var i = 0; i < list.length; i++) {
    replaceText(list[i])
    if (contains) {
        list[i].style.display = "none"
    } 
    contains = false;
}