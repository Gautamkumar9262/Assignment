var prompt = require('prompt-sync')();
//Q28: Write a program to Take a password as input and check if it is strong (length ≥8, includes digit and special character).


let pass=prompt("Enter a password: ")


if(pass.length>=8){
    console.log("Strong Password")
}
else{
    console.log("Weak Password")
}