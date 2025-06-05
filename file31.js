// use const for creating array 

// your address store in heap memory ["apple","mango"] 0x11

// ~whenever i use some reference type i should use "const" variable becaus arrays will safe after using this variable
// ~eg

const fruits = ["apple","mango"]; //0x11
fruits.push("banana");
console.log(fruits);