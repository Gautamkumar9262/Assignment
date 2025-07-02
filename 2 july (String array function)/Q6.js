
//  Write a function `removeDuplicates(arr)` that removes duplicate values from an array.  
//    Example: `[1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]`

let arr = [1, 2, 3, 4, 4, 2];

function removeDuplicates(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if(!arr2.includes(arr[i])){
            arr2.push(arr[i])
        }
    }
    console.log(arr2);
}

removeDuplicates(arr);