var prompt = require('prompt-sync')();
//Q30: Create a mini login system: input username and password, and check if both match stored values.

let user=prompt("Enter username: ");
let pass= prompt("Enter password: ");

let username='Gautam Kumar'
let password='GautamKumar@123'

if(user==username && pass==password){
    console.log("You username and password match")
}
else{
    console.log("Invalid username or password")
}
