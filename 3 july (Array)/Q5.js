// How do you count the number of occurrences of each element in an array?
// Example: [1, 2, 2, 3, 1, 1] → {1: 3, 2: 2, 3: 1}
function countOccurrences(arr) {
    const counts = {};
    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }
    return counts;
}
console.log(countOccurrences([1, 2, 2, 3, 1, 1])); // {1: 3, 2: 2, 3: 1}