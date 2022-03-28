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
// filterArray
// mapArray
// everyArray
// someArray
// findArray
// reduceArray
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
let brothers = ['Ayuub', 'Clemo', 'Abat', 'Ababa'];
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

// filterArray()method
// Definition and Usage
// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

// See Also:
// h1>JavaScript Arrays</h1>
// <h2>The filter() Method</h2>

// <p>Get every element in the array that has a value of 18 or more:</p>

// <p id="demo"></p>

// <script>
// const ages = [32, 33, 16, 40];

// document.getElementById("demo").innerHTML = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;

// example
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);

// mapArray()method
// Definition and Usage
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.

/* <h2>JavaScript Arrays</h2>

<p>Multiply every element in the array with 10:</p>

<p id="demo"></p>

<script>
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

document.getElementById("demo").innerHTML = newArr;

function myFunction(num) {
  return num * 10;
} */

// example of mapArray
<script>
const numbers = [4, 9, 16, 25];
document.getElementById("demo").innerHTML = numbers.map(Math.sqrt);
</script>
// results The Array.map() method creates a new array from the results of calling a function for every element.

2,3,4,5

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr);

// everyArray()Method
// Definition and Usage
// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array

/* <h1>JavaScript Arrays</h1>
<h2>The every() Method</h2>

<p>every() returns true if all elements in an array pass a test (provided as a function).</p>

<p id="demo"></p>

<script>
const ages = [32, 33, 16, 40];
document.getElementById("demo").innerHTML = ages.every(checkAge);

function checkAge(age) {
  return age > 18;
  every() returns true if all elements in an array pass a test (provided as a function).
answer;
false
}
</script> */}
// exaple of code
const ages = [32, 33, 16, 40];

ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}
console.log(checkAge(ages));

// someArray()method
// Definition and Usage
// The some() method checks if any array elements pass a test (provided as a function).

// The some() method executes the function once for each array element:

// If the function returns true, some() returns true and stops.
// If the function returns false, some() returns false and stops.
// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.

// <h2>JavaScript Arrays</h2>

// <p>The Array.some() method checks if any of the elements in an array pass a test (provided as a function).</p>

// <p id="demo"></p>

// <script>
// const ages = [3, 10, 18, 20];
// document.getElementById("demo").innerHTML = ages.some(checkAdult);

// function checkAdult(age) {
//   return age > 18;
// }
// exampe of code
const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}

// findArray()method
// Definition and Usage
// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method retuns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

// The find() method does not change the original array.
{/* <h1>JavaScript Arrays</h1>
<h2>The find() Method</h2>

<p>find() returns the value of the first element in an array that passes a test (provided by a function):</p>

<p id="demo"></p>

<script>
const ages = [3, 10, 18, 20];

document.getElementById("demo").innerHTML = ages.find(checkAge);

function checkAge(age) {
  return age > 18;
}
find() returns the value of the first element in an array that passes a test (provided by a function):

20

The find() method is not supported in Internet Explorer 11 (or earlier).
</script>

<p>The find() method is not supported in Internet Explorer 11 (or earlier).</p> */}
// example of code
const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge);
}


// reduceArray()method
// Definition and Usage
// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.
{/* <h2>JavaScript Arrays</h2>

<p>Compute the sum of the rounded numbers in an array.</p>

<p id="demo"></p>

<script>
const numbers = [15.5, 2.3, 1.1, 4.7];

document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
} */}
// Compute the sum of the rounded numbers in an array.
  
// 24

// example of code
const numbers = [15.5, 2.3, 1.1, 4.7];
document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}

// topics to read in Arrays
// map(array)
// filter(array)
// promises(array)
// Promise Object Properties


// A JavaScript Promise object can be:
// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

// myPromise.state	myPromise.result
// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object
// Here is how to use a Promise:

// myPromise.then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );
// Promise.then() takes two arguments, a callback for success and another for failure.

// Both are optional, so you can add a callback for success or failure only.

// Example
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//   let x = 0;

// // The producing code (this may take some time)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );


// spread operator(array)
// Spread Operator
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// Example
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

document.write(numbersCombined);
results = 1,2,3,4,5,6

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

//Check the result object in the console:
console.log(myUpdatedVehicle);


// Await(array)
{/* <h2>JavaScript async / await</h2>

<p>Wait 3 seconds (3000 milliseconds) for this page to change.</p>

<h1 id="demo"></h1>

<script>
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
</script> */}
// results = Wait 3 seconds (3000 milliseconds) for this page to change.

// I love You !!


// sort(array)
// Sorting an Array
// The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits.sort();
document.getElementById("demo2").innerHTML = fruits;

result = Apple,Banana,Mango,Orange

// Reversing an Array
// The reverse() method reverses the elements in an array.

// You can use it to sort an array in descending order:

// Example
// Create and display an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

// First sort the array
fruits.sort();

// Then reverse it:
fruits.reverse();

document.getElementById("demo2").innerHTML = fruits;

// results = By combining sort() and reverse() you can sort an array in descending order:

// Banana,Orange,Apple,Mango

// Orange,Mango,Banana,Apple


// foreach(array) the same as Map(array) but it does not creat a new array.
// Definition and Usage
// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements
// example
let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}
// result =
//  0: apple
//  1: orange
//  2: cherry


// adding  a module in es6
// 11:10
// <script type="module" src="filename.js"></script>
// 11:11
// A script that uses this module type can now use the import and export features you
// 11:15
// How to export a function and use it  on another file  i n javascript
// 11:15
// export const add = (x, y) => {
//   return x + y;
// }
// 11:15
// or
// 11:15
// const add = (x, y) => {
//   return x + y;
// }

// export { add };
// 11:19
// Multiple exports of functions or variables
// 11:19
// export { add, subtract };

// ALAMIN  11:27 AM
// An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created  (() => {})()
// 11:27
// (() => {})()
// 11:28
// import allows you to choose which parts of a file or module to load.
// 11:29
// import { functionName } from ' ./file.js'
// 11:30
// import { functionName } from ' ./file.js'
// 11:31
// import { add } from './math_functions.js';
// 11:33
// here you will only be able to access add function and will ignore the rest of the function. One will not be able to access the rest functions
// 11:35
// How can you import multiple functions?
// 11:35
// import { add, subtract } from './math_functions.js';
// 11:38
// Lets say you want to export everything from a file......... you will use *
// 11:39
// import * as myMathModule from "./math_functions.js";
// 11:40
// import * as objectName from "./file.js"
// 11:41
// to access the functions or the variable or anything from that file you imported, all you have to do is objectName.whateverYouWANT 
// 11:42
// The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything.
//  The object will contain all of the exports from math_functions.js in it,
//  so you can access the functions like you would any other object property.
//  Here's how you can use the add and subtract functions that were imported:
// New

// ALAMIN  12:05 PM
// There are two types of exports:

// Named Exports (Zero or more exports per module)
// Default Exports (One per module)
// 12:07
// If a module defines a default export:

// // foo.js
// export default function() { console.log("hello!") }
// then you can import that default export by omitting the curly braces:

// import foo from "foo";
// foo(); // hello!
// 12:08
// export default. Usually you will use this syntax if only one value is being exported from a file.
//  It is also used to create a fallback value for a file or module.
// 12:11
// fallback cvalue for a moduleexample 
// 12:11
// export default function subtract(x, y) {
//   return x - y;
// }
// 12:11
// how to import a default value 
// 12:12
// import add from "./math_functions.js";
// 12:13
// The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}).
//  add here is simply a variable name for whatever the default export of the math_functions.js file is. 
// You can use any name here when importing a default.








