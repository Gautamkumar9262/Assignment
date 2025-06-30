var prompt = require('prompt-sync')();
//Q13: Input a character and check if it's uppercase, lowercase, digit, or special character.

let char= prompt("Enter a any character: ");

if(char>='A' && char<='Z')
{
    console.log("Uppercase")
}
else if(char>='a' && char<='z'){
    console.log("lowercase")
}
else if(char>=0 && char<=9)
{
    console.log("Digit")
}
else{
    console.log("Special Character")
}