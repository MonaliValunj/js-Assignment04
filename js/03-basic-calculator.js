// IMPORT THE MODULE
import { add,subtract,multiply,divide } from "./modules/calculator.js"

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1 = parseInt(prompt("Enter first number: "))
let num2 = parseInt(prompt("Enter second number: "))
let operations = prompt("Enter operation to be performed: (add/subtract/multiply/divide) ")

switch(operations){
    case "add":
       add()
       break
    
    case "suntract":
        subtract()
        break
    
    case "multiply":
        subtract()
         break

     case "divide":
        subtract()
        break
}
// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION