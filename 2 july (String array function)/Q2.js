// **Check Palindrome**  
//    Write a function `isPalindrome(str)` to check if a string is a palindrome (case-insensitive).  
//    Example: `"Madam" → true`

function isPalindrome(x){
   let r= x.split("").reverse().join("");
   if(x.toUpperCase()==r.toUpperCase()){
    return true;
   }
   else{
    false;
   }
}

console.log(isPalindrome("Madam"))


