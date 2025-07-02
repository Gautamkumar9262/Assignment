//  Write a function `groupByType(arr)` that groups array elements by their type.  
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`

function groupByType(arr){
    let num=[];
    let str=[];
    let bool=[];
    for(let i of arr){
        if(typeof i=='number'){
            num.push(i)
        }
        else if(typeof i=='string'){
            str.push(i)
        }
        else if(i==true || i==false){
            bool.push(i)
        }
    }
    console.log(`number: ${num}, string:${str}, boolean:${bool}` )
}

groupByType([1,'a',2,'b',true,false])