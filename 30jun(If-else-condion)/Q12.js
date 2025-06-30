var prompt = require('prompt-sync')();
//Q12: Write a program to take Input a year and check if it is a leap year.

let year = prompt("Enter a year: ");
let yearNumber = parseInt(year);

if ((yearNumber % 4 === 0 && yearNumber % 100 !== 0) || (yearNumber % 400 === 0)) {
    console.log(yearNumber + " is a leap year.");
}

else{
    console.log(yearNumber,"is not leap year")
}