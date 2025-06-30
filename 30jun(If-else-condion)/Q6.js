var prompt = require('prompt-sync')();
//Q6: Write a program to check vovel or consonant using if-else condition.

let char = prompt("Enter a alphabate character : ").toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("The character is a vowel.");
}
else{
    console.log("The character is a consonant.");
}