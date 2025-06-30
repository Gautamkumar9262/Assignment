var prompt = require('prompt-sync')();
//Q7: Write a program to check Input a number and check if it is between 10 and 50

let num = prompt("Enter a Number: ");
let number = parseInt(num);

if (number >=10 && number <+50) {
    console.log("The number is between 10 and 50.");
}
else{
    console.log("The number is not between 10 and 50.");
}