// **Character Frequency**  
//    Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
//    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`

// function Character(str){
//         let obj={}
//         let count=0;
//        let ch= str.split("");
//        for(let i=0; i<str.length;i++){
//             for(j='a' ; j>='z';j++)
//             if(ch[i]==j){
//                 count++
//             obj.push(j,count)
//             }
//         }
//         console.log(obj)
// }

// Character("asdasd")



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