// Write a function `findMaxMin(arr)` that returns the maximum and minimum number in an array.  
//    Example: `[4, 1, 9, -2] → { max: 9, min: -2 }`


let arr=[4,1,9,-2]
function FindMaxValue(){
        let max=arr[0]
        for(let i of arr){
            if(max<i){
                max=i;
            }
        }

       let min=arr[0];
        for(let j of arr){
            if(min>j){
                min=j
            }
        }

        console.log(`max:${max} , min:${min}`)
}
FindMaxValue()