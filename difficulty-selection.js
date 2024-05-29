const buttons = document.querySelectorAll(".difficulty-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const difficulty = button.attributes["data-difficulty"].value;
        setDifficulty(difficulty);
    })
})

function setDifficulty(difficulty) {
    const storedData = localStorage.getItem("veggieQuest");
    if (!storedData) {
        console.error("no game data found");
        return;
    }

    const data = JSON.parse(storedData);
    data.difficulty = difficulty;

    localStorage.setItem("veggieQuest", JSON.stringify(data));

    window.location.href = "instructions.html";
}
