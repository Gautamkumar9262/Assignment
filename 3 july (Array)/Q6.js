// Write a custom implementation of the .map() method (polyfill).

Array.prototype.myMap = function(callback, thisArg) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            result.push(callback.call(thisArg, this[i], i, this));
        }
    }
    return result;
};
const arr = [1, 2, 3];
const doubled = arr.myMap(x => x * 2);
console.log(doubled);