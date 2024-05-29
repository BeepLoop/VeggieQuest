const skipBtn = document.getElementById("skip-btn");
const nextBtn = document.getElementById("next-btn");
const dialog = document.getElementById("dialog-text");

const instructions = [
    "If it fits, i sits give attitude, so i bet my nine lives on you-oooo-ooo-hooo. Swat at dog. Meoooow adventure always. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now.",
    "Climb a tree, wait for a fireman jump to fireman then scratch his face steal the warm chair right after you get up or meow loudly just to annoy owners so claws on the human's belly and purr like a lawnmower found something move i bite it tail love me!. Give me some of your food give me some of your food give me some of your food meh, i don't want it mew or i like cats because they are fat and fluffy. flex",
    "Meoooow fight own tail or put butt in owner's face destroy house in 5 seconds, hate dog.",
    "Good Luck!",
];

let current = 0;

dialog.innerText = instructions[current];

skipBtn.addEventListener("click", () => {
    skip();
})

nextBtn.addEventListener("click", () => {
    next();
})

function skip() {
    current = instructions.length - 1;
    dialog.innerText = instructions[current];
}

function next() {
    if (current === instructions.length - 1) {
        nextBtn.innerText = "start";
        nextBtn.onclick = () => {
            window.location.href = "summary.html";
        }
        return;
    }

    current++;
    dialog.innerText = instructions[current];
}
