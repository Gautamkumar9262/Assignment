//Count the number of digits in a given number using a loop.
var prompt = require('prompt-sync')();

let num=parseInt(prompt("Enter a number: "))
count=0;
for(num; num>0; ){
    num%10;
    num=Math.floor(num/10)
    count++;
}
console.log(count)