var prompt = require('prompt-sync')();
//Q17: Write a program to take Input a number and check if it is a prime number (basic logic).

let num= prompt("Enter a number: ")
let number= parseInt(num);

if(number%2==0 || number%3==0 || number%4==0 || number%5==0 || number%6==0 || number%7==0 || number%8==0 || number%9==0){
    console.log(number,"is not a prime number")
}
else(
    console.log(number ,"is prime")
)
