// **Count Vowels**  
//    Write a function `countVowels(str)` to count the number of vowels in the given string.  
//    Example: `"JavaScript" → 3`

function vowel(str){
    var count=0;
    let arr=['a','e','i','o','u']
    for(let i=0;i<=4;i++){
        for(let j=0; j<str.length;j++){
            if(str[j]==arr[i]){
                count++
            }
        }
    }
    console.log(count)
}

vowel("Gautam")