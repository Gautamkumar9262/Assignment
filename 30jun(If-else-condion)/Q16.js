var prompt = require('prompt-sync')();
//Q16 write a prograam to Take a number and check whether it is divisible by both 5 and 11.

let num = prompt("ENter a number: ")
let number = parseInt(num);

if(number%5 ==0 && number%11==0){
    console.log(number,"divisible by 5 and 11")
}
else{
    console.log(number," is not divisible by 5 and 11")
}