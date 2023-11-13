// script.js
let currentOperation = null;
let currentNumber = "";

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentNumber === "") return;
    if (currentOperation !== null) calculate();
    currentOperation = operation;
    currentNumber += operation;
    updateDisplay();
}

function calculate() {
    try {
        currentNumber = eval(currentNumber).toString();
        currentOperation = null;
        updateDisplay();
    } catch {
        clearDisplay();
        alert("Invalid Operation");
    }
}

function clearDisplay() {
    currentNumber = "";
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = currentNumber;
}
