const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const buttons = document.querySelectorAll(".button");
const characterName = document.getElementById("character-name");

let current = 0;
let prev = slides.length - 1;;
let next = current + 1;

setCharacter();

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index === 0) {
            gotoPrev();
        } else {
            gotoNext();
        }

        setCharacter();
    })
})

function gotoNext() {
    if (current > 0) {
        gotoSlide(current - 1);
    } else {
        gotoSlide(slides.length - 1);
    }
}

function gotoPrev() {
    if (current < slides.length - 1) {
        gotoSlide(current + 1);
    } else {
        gotoSlide(0);
    }
}

function gotoSlide(number) {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next === slides.length) {
        next = 0;
    }

    if (prev === -1) {
        prev = slides.length - 1;
    }

    console.log(current)

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

function setCharacter() {
    characterName.innerText = slider.children[current].attributes["data-character"].value;
    console.log(slider.children[current].attributes["data-character"].value);
}
