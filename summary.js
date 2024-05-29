const character = document.getElementById("character-selected")
const difficultyMode = document.getElementById("difficulty-mode")

const storedData = localStorage.getItem("veggieQuest");

const data = JSON.parse(storedData)

character.innerText += ` ${data.character}`;
difficultyMode.innerText += ` ${data.difficulty}`;
