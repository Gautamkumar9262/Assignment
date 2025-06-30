var prompt = require('prompt-sync')();
//Q9: Write a program to check Input age and check if the person is eligible for voting (≥18).

let age = prompt("Enter your age: ");
let personAge = parseInt(age);
if (personAge >= 18) {
    console.log("You are eligible for voting.");
}
else {
    console.log("You are not eligible for voting.");
}
