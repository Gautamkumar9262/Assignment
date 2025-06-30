var prompt = require('prompt-sync')();
//Q27: Input month number and print number of days in that month.

let num=prompt("Enter a month number: ")
let number=parseInt(num);

if(number==1 || number==3 || number==5 || number==7 || number==8 || number==10 || number==12)
{
    console.log("31 days")
}
else if(number==2){
    console.log("28 Days")
}

else{
    console.log("30 Days")
}
