var prompt = require('prompt-sync')();
//Input marks in 5 subjects, calculate the average and print grade using if-else.
let num=parseInt(prompt("Enter a number: "))
let Pnum=num;
let n=""
while(num>0){
    n+=num%10;
    num=Math.floor(num/10)
}
if(Pnum==n){
    console.log("it is palindrome")
}
else{
    console.log("it is not palindrome")
}