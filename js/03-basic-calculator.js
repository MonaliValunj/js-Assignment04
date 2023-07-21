// IMPORT THE MODULE
import { add, subtract, multiply, divide } from './modules/calculator.js';

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1 = parseInt(prompt("Enter first number: "))
let num2 = parseInt(prompt("Enter second number: "))
let operations = prompt("Enter operation to be performed: (add/subtract/multiply/divide) ")
let answer;
//let condition = false;
while(true){
    if(operations === "add" || operations === "subtract" || operations === "multiply" || operations === "divide"){
        break
    }else{
        alert('Please Entera valid opreation to be performed :');
        operations = prompt("Enter operation to be performed: (add/subtract/multiply/divide) ")

    }
}

switch(operations){
    case "add":
        answer = add(num1, num2)
        console.log(answer) 
        break
        
    case "suntract":
        answer = subtract(num1, num2)
        console.log(answer)
        break
    
    case "multiply":
        answer = multiply(num1, num2)
        console.log(answer)
               break
         
     case "divide":
        answer = divide(num1, num2)
        console.log(answer)
                break
        
}
// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION