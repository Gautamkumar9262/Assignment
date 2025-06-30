var prompt = require('prompt-sync')();
//Q8:Write a program to check Input a number and check if it is a 3-digit number.

let num=prompt("Enter a Number: ");
let number=parseInt(num);

if(number >=100 && number <=999){
    console.log("The number is a 3-digit number.");
}
else{
    console.log("The number is not a 3-digit number.");
}