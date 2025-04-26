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
    bPlus: function() {
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
  if (operator === "divide" && secondNumber === 0) {
    return result = "ERROR";
  }
  else {
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
    return result.toFixed(3)
  }
}

function clearArrays () {
  arrayFirst.length = 0;
  arrayOperator.length = 0;
  arraySecond.length = 0;
  arrayResult.length = 0;
}

const calcDisplay = document.getElementById("display");
const calcButtons = document.querySelector(".calculator-button-container");

let displayArray = [];
let arrayFirst = [];
let arrayOperator = [];
let arraySecond = [];
let arrayResult = [];

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
    if (displayArray.length !== 0 && arrayOperator.length == 0 && result === undefined) {
      setOperator[this.id]();
      displayArray.push(item.textContent);
    }
    else if (displayArray.length !== 0 && result !== undefined && result !== "ERROR") {
      displayArray.length = 0;
      setOperator[this.id]();
      firstNumber = result;
      for (i in arrayResult) {
        displayArray.push(arrayResult[i]);
      }
      displayArray.push(item.textContent);
      result = undefined;
      arrayResult.length = 0;
    }
  })
});

calcButtons.addEventListener("click", function(e) {
    calcDisplay.value = displayArray.join('');
    for (let i = 0; i < displayArray.length; i++) {
      if (displayArray[i] === '+' || displayArray[i] === '-' || displayArray[i] === '×' || displayArray[i] === '÷') {
        arrayFirst = displayArray.slice(0, i);
        firstNumber = Number(arrayFirst.join(''));
        arrayOperator = displayArray.slice(i,i+1);
        arraySecond = displayArray.slice(i+1).filter(item => item !== '=');
        secondNumber = Number(arraySecond.join(''));
      }
    }
})

const clearButton = document.getElementById("bAC");
clearButton.addEventListener("click", function(e) {
  displayArray.length = 0;
  clearArrays();
  result = undefined;
  calcDisplay.value = displayArray.join('');
})

const deleteButton = document.getElementById("bDelOne");
deleteButton.addEventListener("click", function(e) {
  if (displayArray.length > 0 && result === undefined) {
    displayArray.pop();
  }
  clearArrays();
  calcDisplay.value = displayArray.join('');
})

const equalButton = document.getElementById("bEq");
equalButton.addEventListener('click', function(e) {
    if (displayArray.length !== 0 && arrayOperator !== 0 && arraySecond !== 0 && result !== "ERROR") {
      clearArrays();
      displayArray.push(equalButton.textContent);
      operate(firstNumber,secondNumber);
      displayArray.push(result);
      arrayResult = (""+result).split("");    
    }
  }) 