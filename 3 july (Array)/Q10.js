// What’s the difference between Array.prototype.forEach and Array.prototype.map in terms of return value and use-case?

// Answer:
// forEach executes a provided function once for each array element but does not return a new array; it returns undefined. It's used for side effects (like logging or modifying external variables).
// map also executes a function for each element, but returns a new array containing the results. It's used when you want to transform each element and get a new array.