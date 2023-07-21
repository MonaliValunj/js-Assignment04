// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(n1, n2, op){
    switch(op){
        case "add":
            return n1 + n2
            break
        case "subtract":
          return n1 - n2
          break
        case "multyply":
            return n1 * n2
            break
        case "divide":
            return n1 / n2
            break

    }
}

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
function add(num1, num2){
    return calculate(num1, num2, "add")
}

// SUBTRACT FUNCTION

function subtract(num1, num2){
    return calculate(num1, num2, "subtract")
}

// MULTIPLY FUNCTION
function multiply(num1, num2){
    return calculate(num1, num2, "multiply")
    
}

// DIVIDE FUNCTION
function divide(num1, num2){
    return calculate(num1, num2, "divide")
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide}
