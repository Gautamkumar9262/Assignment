var prompt = require('prompt-sync')();

//Q2.Write a program to check whether a number is positive, negative or zero using if-else condition.
let num2 = prompt("Enter a Number: ");
let number2 = parseInt(num2);

if (number2 > 0){
    console.log("The number is positive.");
}
else if(number2 < 0){
    console.log("The number is negative.");
}
else {
    console.log("The number is zero.");
}