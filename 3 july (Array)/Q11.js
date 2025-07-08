// What is the result of this?

// const a = [1, 2, 3];
// const b = a.slice(0, 2);
// b[0] = 100;
// console.log(a); // ?

// Answer:
// The output will be [1, 2, 3].
// This is because a.slice(0, 2) creates a shallow copy of the first two elements of 'a'.
// Modifying 'b' does not affect the original