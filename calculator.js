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

let setOperator = {
    bAdd: function() {
      operator = "add"
    },
    bMin: function() {
      operator = "subtract"
    },
    bMult: function() {
      operator = "multiply"
    },
    bDiv: function() {
      operator = "divide"
  }
};

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
 
const calcDisplay = document.getElementById("display");
const calcButtons = document.querySelector(".calculator-button-container");
let displayArray = [];
let displayArrayOperator = [];
let displayArraySecond = [];

[...document.getElementsByClassName("calculator-button")].forEach(function(item) {
    // adding eventListener to the elements
    item.addEventListener('click', function() {
      displayArray.push(item.textContent)
    })
});

// using spread syntax to convert collection to array
// forEach is an array method
[...document.getElementsByClassName("operator-button")].forEach(function(item) {
  // adding eventListener to the elements
  item.addEventListener('click', function() {
    // calling the methods
    // this.id will be the id of the clicked button
    // there is a method in the object by same name, which will be trigger
    if (displayArray.length !== 0) {
      setOperator[this.id]();
      firstNumber = Number(displayArray.join(''));
      displayArray.push(item.textContent);
    }
  })
})

calcButtons.addEventListener("click", function(e) {
    calcDisplay.value = displayArray.join('');
    for (let i = 0; i < displayArray.length; i++) {
      if (displayArray[i] === '+' || displayArray[i] === '-' || displayArray[i] === '×' || displayArray[i] === '÷') {
        displayArrayOperator = displayArray.slice(i,i+1);
        displayArraySecond = displayArray.slice(i+1);
      }
    }
})

const clearButton = document.getElementById("bAC");
clearButton.addEventListener("click", function(e) {
  displayArray.length = 0;
  calcDisplay.value = displayArray.join('');
})

const deleteButton = document.getElementById("bDelOne");
deleteButton.addEventListener("click", function(e) {
  if (displayArray.length > 0) {
    displayArray.pop();
  }
  calcDisplay.value = displayArray.join('');
})