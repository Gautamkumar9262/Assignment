var prompt = require('prompt-sync')();
//Q24: Write a program to take Input a number and check if the sum of its digits is even or odd.

let num= prompt("Enter a number: ")
let number = parseInt(num);

let numbr=0;
while(number>0){
    numbr+=number%10;
    number=Math.floor(number/10)
}



if(numbr%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}
