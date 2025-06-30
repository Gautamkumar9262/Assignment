
var prompt = require('prompt-sync')();

//Q4. Write a program to check if it's divisible by 3 or not using if-else condition.

let num = prompt("Enter a Number: ");
let number = parseInt(num);

if (number % 3 === 0) {
    console.log("The number is divisible by 3.");
}
else {
    console.log("The number is not divisible by 3.");
}