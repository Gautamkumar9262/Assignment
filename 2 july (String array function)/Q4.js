// **Capitalize First Letter of Each Word**  
//    Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a sentence.  
//    Example: `"hello world" → "Hello World"`

function capitalizeWords(str) {
    let arr = str.split(" ");
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        arr2.push(capitalized);
    }
    console.log(arr2.join(" "));
}

capitalizeWords("Hello world i am gautam")