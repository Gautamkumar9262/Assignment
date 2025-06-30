var prompt = require('prompt-sync')();
//Q19: Write a program to Take two numbers and check if they are equal, or print which one is greater.

let num1 = prompt("Enter a first number: ")
let number1= parseInt(num1);

let num2 = prompt("Enter a second number: ")
let number2= parseInt(num2);

if(number1>number2){
    console.log(number1,"is greater")
}
else if(number1<number2)
{
    console.log(number2,"is greater")
}
else{
    console.log("Both number are equal")
}


