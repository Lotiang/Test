// length - marks.length
// access array elements - mark[0]
// print whole array - console.log(marks)
// to modify an arrey
// marks[0]/70
// marks[0] = 90
// data structure is an improved array
// algorithm is a step by step solutions
// arrays methods are
// arrays
// lenthArray
// concat()
// indexOf()
// slice(start, end)
// splice(start, end)
// join()
// toString
// includes(array)
// lastIndexOf() 
// isArray
// fillArray
// pushArray
// popArray
// shiftArray
// unshiftArray
// let catfamily
let catFamily = ['Lion', 'Leopard', 'Cat']
// lenth = catFamily
console.log(catFamily.length);
console.log(catFamily);
console.log(catFamily[catFamily.length - 1])
// change cat to tyger
catFamily[catFamily.length - 1] = 'tyger'
console.log(catFamily);

// let change lion to Jaguar
catFamily[catFamily.length - 3] = 'Jaguar'
console.log(catFamily);

// add a new value at the end of the array
catFamily.push('panther')
console.log(catFamily);

// add a new value at the beginning of the array
catFamily.unshift('Puma')
console.log(catFamily);

// remove the old value at the end of the array
catFamily.pop()
console.log(catFamily);

// remove the new value at the beginning of the array
catFamily.shift()
console.log(catFamily);

// indexOf array elements
console.log(catFamily.indexOf('Puma'));

// print puma 
console.log(catFamily[catFamily.indexOf('Puma')]);

// splice Topic
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:
// splice
// join array elements together
let name = ['Lotiang', 'Nyathio']
console.log(name.join(''));

let sisters = ['Totoo', 'Bebi']
let brothers = ['Ayuub', 'Clemo', 'Abat']
let family = [sisters.concat(brothers)]
console.log(family);

sisters.splice(1, 'Totoo')
console.log(sisters);

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// At position 2, remove 2 items: 
fruits.splice(2, 2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements: 
fruits.splice(2, 0, "Lemon", "Kiwi");

document.getElementById("demo").innerHTML = fruits;

// slice Topic
// The slice() method extracts a part of a string.

// The slice() method returns the extracted part in a new string.

// The slice() method does not change the original string.

// The start and end parameters specifies the part of the string to extract.

// The first position is 0, the second is 1, ...

// A negative number selects from the end of the string.

let text = "Hello world!";
let result = text.slice(0, 5);
let result = text.slice(3);

// // isarray returns
// // The isArray() method returns true if an object is an array, otherwise false.
// Array.isArray() is a static property of the JavaScript Array object.
// You can only use it as Array.isArray().
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruits);

// includes topic
// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.includes("Mango");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.includes("Banana", 3);