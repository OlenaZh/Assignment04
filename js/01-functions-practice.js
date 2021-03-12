
/*eslint-env browser*/
//STEP 1

/*function halfNumber(number1) {
 var num = number1 / 2;
 return num;
 }
 alert("Half of 5 is " + halfNumber(5));*/

 //OR STEP 1.1.

 /*var number1 = prompt("Enter number");
 function halfNumber(number1) {
    var num = number1 / 2;
    alert("Half of " + number1 + " is " + num);
}
    halfNumber(number1);*/

    
//STEP 2
/*function squareNumber(number1) {
 var result = number1 * number1;
 alert("The result of squaring the number 3 is " + result);
}
squareNumber(3);*/

//STEP 3
/*function percentOf(num1, num2)  {
    var result = (num1 / num2) * 100;
    return result;
}
alert("1 is " + percentOf(1, 4) + "% of 4");*/

//STEP 4

/*function findModulus(num1, num2) {
  var result = num2 % num1;
  alert(result + " is the modulus of 4 and 10"); 
}
findModulus(4, 10);*/

//STEP 5
var i, sum;
var numbers = prompt("Enter numbers delimited by commas");
var arr = numbers.split(',');

function calculate(numbers) {
    sum = Number(numbers);
    for (i=1; i<arguments.length; i+=1) {
        sum += Number (arguments[i]);
    }
    document.write(string(sum) + "<br>");
}

calculate(numbers);
