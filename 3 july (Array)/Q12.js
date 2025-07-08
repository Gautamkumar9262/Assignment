// How do you find all pairs of elements in an array whose sum equals a target number?
// Example: [1, 2, 3, 4, 5], target = 6 → [[1,5], [2,4]]
function findPairs(arr, target) {
    let pairs = [];
    let seen = new Set();
    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }
    return pairs;
}
console.log(findPairs([1, 2, 3, 4, 5], 6)); 