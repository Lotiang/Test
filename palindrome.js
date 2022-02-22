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

// let catFamily = ("Lion").split("").reverse().join("")
// console.log(catFamily);

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

const myMoney = {
    quarters: 4,
    dimes: 10,
    nikels: 20,
    pennies: 100
}

for (const coin of myMoney){
    console.log('${coin}:${myMoney[coin]}');
}
