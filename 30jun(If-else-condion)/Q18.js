var prompt = require('prompt-sync')();
//Q18:Write a program to take Input someone's name and age, and check if they can get a driving license (age ≥ 18).

let age = prompt("Enter your age: ");
let personAge = parseInt(age);
if (personAge >= 18) {
    console.log("You are eligible for driving license.");
}
else {
    console.log("You are not eligible for driving license");
}