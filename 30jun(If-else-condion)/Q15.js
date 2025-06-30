var prompt = require('prompt-sync')();
//Q15 Write a program to take Input the day number (1–7) and print the corresponding weekday.

let dayNum=prompt("Enter the day num: ")
let day=parseInt(dayNum);

if(day== 1){
    console.log("Sunday")
}
else if(day ==2 ){
    console.log("Monday")
}
else if(day ==3 ){
    console.log("Tuesday")
}
else if(day ==4 ){
    console.log("Wednesday")
}
else if(day ==5 ){
    console.log("Thursday")
}
else if(day ==6 ){
    console.log("Friday")
}
else if(day ==7 ){
    console.log("Saturday")
}