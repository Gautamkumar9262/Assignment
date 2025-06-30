var prompt = require('prompt-sync')();
//Q10 Write a program Input a temperature and print if it's Hot (>30), Moderate (15–30), or Cold (<15).

let temp =prompt("Enter the tempreture: ")
let temprature = parseInt(temp);

if(temprature > 30) {
    console.log("It's Hot.");
}
else if(temprature >= 15 && temprature <= 30) {
    console.log("It's Moderate.");
}
else {
    console.log("It's Cold.");
}