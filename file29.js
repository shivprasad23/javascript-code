// how to clone array

// how to concatenate two arrays 

let array1 = ["item1","item2"];
// let array2 = ["item","item2"];
// let array2 = array1.slice(0);
// array2 = [].concat(array1);
// array1.push("item3");
// new way 
// spread operator

let array2 = [...array1]
array1.push("item3");

console.log(array===array2);
console.log(array1)
console.log(array2)