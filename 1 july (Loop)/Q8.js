var prompt = require('prompt-sync')();
//Find the product of numbers from 1 to 10.
let num=parseInt(prompt("Enter a number: "))
for(let i=1; i<=10; i++){
    console.log(num*i)
}