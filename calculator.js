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
    add: function() {
      operator = "add"
    },
    subtract: function() {
      operator = "subtract"
    },
    multiply: function() {
      operator = "multiply"
    },
    divide: function() {
      operator = "divide"
  }
};

// using spread syntax to convert collection to array
// forEach is an array method
[...document.getElementsByClassName("")].forEach(function(item) {
  // adding eventListener to the elements
  item.addEventListener('click', function() {
    // calling the methods
    // this.id will be the id of the clicked button
    // there is a method in the object by same name, which will be trigger
    setOperator[this.id]();
  })
})

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

[...document.getElementsByClassName("calculator-button")].forEach(function(item) {
    // adding eventListener to the elements
    item.addEventListener('click', function() {
      displayArray.push(item.textContent)
    })
})

/* var obj = {
    1: function() {
      console.log('1')
    },
    2: function() {
      console.log('2')
    },
    3: function() {
      console.log('3')
    },
    4: function() {
      console.log('4')
    },
    5: function() {
      console.log('5')
    },
    6: function() {
      console.log('6')
    }
  } */

calcButtons.addEventListener("click", function(e) {
    calcDisplay.value = displayArray.join('');
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

