var prompt = require('prompt-sync')();
//Q21: Write a program to Take a number and check if it's divisible by either 3 or 5 but not both.

let num = prompt("Enter a number: ")
let number = parseInt(num)

if(number%3==0 && number%5!=0){
    console.log(number,"Divisible by either")
}
else if(number%3 !=0 && number%5 ==0){
    console.log(number,"Divisible by either")
}
else{
    console.log(number,"divisible by both")
}