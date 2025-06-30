//Q1.Write a program to check whether a number is even or odd using if-else condition.
var prompt = require('prompt-sync')();
let num = prompt("Enter a Number: ");
let number = parseInt(num);
if (number % 2 === 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}
