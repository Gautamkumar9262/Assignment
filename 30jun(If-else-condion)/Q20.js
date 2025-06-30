var prompt = require('prompt-sync')();
//Q20: Write a program to take Input a number and print whether it is even, odd, and also whether it's positive or negative.

let num = prompt("Enter the number: ")
let  number= parseInt(num)

if(number %2==0){
    if(number>0)
    {
        console.log(number,"is positive");
    }
    else{
        console.log(number,"is negative")
    }
    console.log(number,"is even")
}
else{
    console.log(number ,"is odd")

      if(number>0)
    {
        console.log(number,"is positive");
    }
    else{
        console.log(number,"is negative")
    }
}