var prompt = require('prompt-sync')();
//Q5. Input a number and check if it is multiple of 7 or not
let num = prompt("Enter a Number: ");
let number = parseInt(num);
if (number % 7 === 0) {
    console.log("The number is a multiple of 7.");
}
else {
    console.log("The number is not a multiple of 7.");
}
