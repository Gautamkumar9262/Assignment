// How would you chunk an array into groups of N elements?
// Example: [1,2,3,4,5,6], N = 2 → [[1,2], [3,4], [5,6]]

// Answer:
function chunkArray(arr, n) {
  let result=[];
  for(let i=0; i<arr.length; i+=n){
    result.push(arr.slice(i, i+n));
  }
    return result;

}

// Example usage:
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)); // [[1,2],