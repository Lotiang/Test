//Debugging assertion()
  // console.assert print out the message when the result are wrong but print nothing when results are true.
  // assertion pass, no error message.
  // formula object[key]=value
  // obj = {
  //   index 0 key: 'value'
  //   index 1 key: 'value'
  // }
  // console.assert('one'===1, 'wrong result')

  // Example
  const info1 = {
    name: 'Lotiang',
    age: 26,
    
  }
  let age = 'age'
  info1[age] = 27;
  console.log(info1);

  const info2 = {
    name: 'Lotiang',
    age: 27,
 }
  console.assert(JSON.stringify(info1)===JSON.stringify(info2),'wrong results');


//   const info2 = {
//     name: 'Lotiang',
//     age: 28,
    
//   }
//   info[age] = 29,
//   console.assert(info1 === info2 'wrong results');


  // swapping in javascript()

// x = 13
// y = 14
// temp = x
// x = y
// y = temp
// clg(x)
// clg(y)
// using temporary values.
 
a = 2,
b = 3,
temp = a, 
a = b
b = temp
console.log(a);
console.log(b);

let array1 = [1,2,3,4];
let array2 = [5,6,7,8];
temp = array1
array1 = array2;
array2 = temp;
console.log(array1);
console.log(array2);

//   we can swap using destructuring eg,
a = 10;
b = 20; 
[a, b] = [b, a];
console.log(a)
console.log(b)