const userInput = document.querySelector("#userInput");

function insert(str) {
    userInput.textContent = userInput.textContent + str;
}

function clearText() {
    userInput.textContent = "";
}

function calculate() {
    userInput.textContent = eval(userInput.textContent);
}