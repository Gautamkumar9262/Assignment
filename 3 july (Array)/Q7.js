// How do you sort an array of objects by multiple properties?
// Example: [{name: "John", age: 30}, {name: "Alice", age: 25}, {name: "John", age: 22}]
// Sort by name (alphabetical), then age (ascending)
// Answer:
const arr = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "John", age: 22 }
];
arr.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});

console.log(arr);