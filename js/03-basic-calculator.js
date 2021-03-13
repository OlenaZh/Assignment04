// IMPORT THE MODULE
import * as calc from "./modules/calculator.js";

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
do {
var x = prompt("Enter first number");
 x = Number(x);
 var y = prompt("Enter second number");
 y = Number(y);
 var operation = prompt("Choose the operation (add, sub, multiply, divide)"); 
 if (operation != "add" && operation != "sub" && operation != "multiply" && operation != "divide") {
     alert("You must choose the operation");
 }
} while (operation != "add" && operation != "sub" && operation != "multiply" && operation != "divide");

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
switch (operation) {
    case "add":
        alert("The result is " + calc.add(x, y));
        break;
    case "sub":
        alert("The result is " + calc.sub(x, y));
        break;
    case "multiply":
        alert("The result is " + calc.multiply(x, y));
        break;
    case "divide":
        alert("The result is " + calc.divide(x, y));
        break;

}