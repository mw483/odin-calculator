let firstNumber
let secondNumber
let result
let operator

function add (firstNumber, secondNumber) {
    return result = firstNumber + secondNumber
}

function subtract (firstNumber, secondNumber) {
    return result = firstNumber - secondNumber
}

function multiply (firstNumber, secondNumber) {
    return result = firstNumber * secondNumber
}

function divide (firstNumber, secondNumber) {
    return result = firstNumber / secondNumber
}

function operate (firstNumber, secondNumber) {
    if (operator === "add") {
        add(firstNumber, secondNumber)
    }
    else if (operator === "subtract") {
        subtract(firstNumber, secondNumber)
    }
    else if (operator === "multiply") {
        multiply(firstNumber, secondNumber)
    }
    else if (operator === "divide") {
        divide(firstNumber, secondNumber)
    }
    console.log(result)
}
 
