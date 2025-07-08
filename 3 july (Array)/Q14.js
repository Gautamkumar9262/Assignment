// Explain what happens in this reduce expression:
let arr=[1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0)
console.log(arr);//10
// Answer:
// The reduce method iterates over the array [1, 2, 3, 4], accumulating the sum of its elements.
// It starts with an initial value of 0 (the second argument to reduce).
// On each iteration, it adds the current element (curr) to the accumulator (acc).
// The final result is the sum of all elements: 1 + 2 + 3 + 4 = 10.

