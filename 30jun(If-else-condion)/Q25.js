var prompt = require('prompt-sync')();
//Q25: Write a program to Input hours worked and calculate overtime pay. Overtime is paid for >40 hours at Rs. 12/hr.

let hour=prompt("Enter a overtime worked in Hours: ")
let hours=parseInt(hour)

if(hours>40){
    let overtime=hours-40;
    console.log("Total Overtime is",overtime,"Hours and Amount is:",overtime*12)
}
else{
    console.log("Overtime is less than 40 hours")
}