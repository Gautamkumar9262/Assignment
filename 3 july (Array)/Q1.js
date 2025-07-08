// How would you flatten a deeply nested array (e.g., [1, [2, [3, [4]], 5]]) to a single array using recursion or a built-in method?

// Answer (using recursion):
function flatten(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}


console.log(flatten([1, [2, [3, [4]], 5]])); 