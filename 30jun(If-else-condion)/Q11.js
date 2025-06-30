var prompt = require('prompt-sync')();
//Q11. Write a program to check Input three numbers and find the greatest among them.

let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");
let num3 = prompt("Enter third number: ");

if(num1 >= num2 && num1 >=num3){
    console.log("The greatest number is: " + num1);
}

else if(num2 >= num1 && num2 >= num3){
    console.log("The greatest number is: " + num2);
}
else{
    console.log("The greatest number is: " + num3);
}

