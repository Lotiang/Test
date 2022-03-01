//step i use to check if a word is a palindrome
// Solution 1: Comparing a String With Its Reversed Version
// Since in JS, the .reverse() function works only on arrays, we’ll need to:
// Split the word into an array, saving it into a variable.
// Reverse the array.
// Put it back together.
// Compare the initial string to the reversed one.

// function checkPalindrome(str){
//     let reversed = str.split("").reverse().join("")
//     return str === reversed
//   }
//   console.log();

//   let str1 = "anna"
//   let str2 = "banana"
//   let str3 = "kayak"
//   checkPalindrome(str1)
//   // -> true
//   checkPalindrome(str2)
//   // -> false
//   checkPalindrome(str3)
//   // -> true
//   //0.52 ms

// let catFamily = ("Lion").toLowerCase().split("").reverse().join("")
// console.log(catFamily);
// if lion === noil is not a palindrome

// const carTwo = {
//     color: 'green',
//     status:{
//         running: 'yes',
//         passengers:2,
//         fuelTank: 'empty'
//     },
//     value: 9000
// }
// undefined
// const combineCar = {
//     carOne, 
//     carTwo,
// }
// console.log(combineCar);
// runTime: car is not define


const myMoney = {
    quarters: 4,
    dimes: 10,
    nikels: 20,
    pennies: 100,
}
for (const coin in myMoney){
    console.log('${coin}:${myMoney[coin]}');
}
// TypeError: my money is not iterable.


// const myArray = [1, 2, 3];
// const arrTwo = myArr.splice(0,4).slice(0,2);
// arrTwo[0] = 9;
// console.log(arrTwo); 
// results: runtimeError, my array is not define

// (x) {
//     if(5===x){
//         return true;
//     }else{
//         return false;
//     }
//     }
//     console.log( truthy(6));
//     result; SyntaxError: unexpected token
// correction
function truthy(x){
    return x* x
}
  console.log(truthy(5));

// const race = "100m dash"
// const runners = ['usain Bolt', 'Asafa powell', 'Justin Gatlin'];
// //  solution
// const newArr = runners.map((runner)=>{
//     return runner + " " + 
// })

// difference bt syncronous programming and asynchronous
// Synchronous programming performs tasks one by one by blocking the main thread.
//  It only starts a new task if the previous one completes.
//  On the other hand, asynchronous programming can perform multiple tasks at the same time in parallel without blocking the main thread.
//   But both have their own use cases in programming.

// javascriptcode get excuted in two phases:
// excution contexts has two components and javascript code get execution in two phases
// Memory Allocation Phase: In this phase,
//  all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. 
// In the case of a function, 
// JavaScript copied the whole function into the memory block but in the case of variables, it assigns undefined as a placeholder.
// Code Execution Phase: In this phase, the JavaScript code is executed one line at a time inside the Code Component 
// (also known as the Thread of execution) of Execution Context. 

// const carOne = {
//     color: 'blue',
//     status: {
//       running: true,
//       passengers: 4,
//       wiperFluid: 'empty'
//     },
//     age: 5,
//     miles: 50000,
//     value: '8000'
//   }
//   const carTwo = {
//     color: 'green',
//     status: {
//       running: 'yes',
//       passengers: 2,
//       fuelTank: 'empty'
//     },
//     value: 9000
//   }
//   const combinedCar = {
//   ...carOne,
//   ...carTwo
//   }
//   console.log(combinedCar);

// //   JavaScript Destructuring Assignment
// //   const x = [1, 2, 3, 4, 5];

// // The destructuring assignment is a unique syntax that helps “to unpack” objects or arrays into a group of variables.
// //  Destructuring can also operate efficiently with complex functions, default values, and more.
// // The destructuring assignment uses the following syntax:
  
  
//   const obj = {
//       name: 'faisal',
//       age: 34,
//       ispresent: true,

//   }
//   let faisalinfo = {...obj}
//   console.log(faisalinfo);
  
  
//  strings in javascript are immutable they can never change 
  
//   === sign return a boolean

  
  let foods = 
  [
{name: 'chicken', price:450},
{name: 'pillau', price:550},
{name: 'chips', price:250},
  ]
  let newFoods = foods.map((check)=>{return check.name});
  console.log(newFoods);
  
  