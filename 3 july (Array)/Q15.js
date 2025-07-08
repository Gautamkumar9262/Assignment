// What is the time complexity of Array.prototype.splice() in the worst case, and why?

// Answer:
// The worst-case time complexity of Array.prototype.splice() is O(n), where n is the number of elements in the array after the start index.
// This is because splice may need to shift all elements after the insertion or deletion point to maintain the array's order.
// For example, removing or adding elements at the beginning of a large array requires shifting 