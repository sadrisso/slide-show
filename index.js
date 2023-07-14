
const slideShowElements = document.querySelectorAll(".slideShow-element");

let countElement = 1;

setInterval(() => {
    countElement++;
    const currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    if(countElement > slideShowElements.length){
        slideShowElements[0].classList.add("current");
        countElement = 1;
    } else {
        currentElement.nextElementSibling.classList.add("current");
    }
    
}, 2000);