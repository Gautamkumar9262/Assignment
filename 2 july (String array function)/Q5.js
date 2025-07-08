// **Character Frequency**  
//    Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
//    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`

function charFrequency(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if(obj[ch] !==undefined){
            obj[ch]++
        }
        else{
            obj[ch]=1
        }
    }
    console.log(obj);
}

charFrequency("asdased");