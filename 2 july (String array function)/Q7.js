// Write a function `flattenArray(arr)` to flatten a nested array (1 level deep).  
//    Example: `[[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]`


let arr=[[1,2],[3,4],[5]]
function flatten(){
    let arr2=[];
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr[0].length;j++){
                console.log(arr2.push(arr[j]))
            }
        }

    }

flatten();