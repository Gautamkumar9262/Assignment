var prompt = require('prompt-sync')();

//Q3. Write a program that take two number and print whicj one is greater using if-else condition.

let a = prompt("Enter fisrt number: ");
let b = prompt("Enter second number: ");

if (a > b) {
    console.log("The first number is greater.");
}
else if (a < b) {
    console.log("The second number is greater.");
}
else {
    console.log("Both numbers are equal.");
}