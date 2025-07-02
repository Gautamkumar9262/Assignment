//Check if a number is a palindrome (e.g., 121, 1331) using only number operations and loops.

//Check if a number is a palindrome (e.g., 121, 1331) using only number operations and loops.

let num = 121;
let original = num;
let reversed = 0;

while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}

if (original === reversed) {
    console.log(`${original} is a palindrome`);
} else {
    console.log(`${original} is not a palindrome`);
}