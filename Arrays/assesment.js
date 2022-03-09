
// Question 6:
'use strict';
/* swap values between two objects */
// -- declare variables (this is correct) --
const obj1 = { a: 'z', b: 2, c: 3 };
const obj2 = { a: 'x', b: 'y', c: 1 };
let temp;
temp = obj1[a: 'z', b: 2, c: 3];
obj1[a: 'z', b: 2, c: 3] = obj2[a: 'x', b: 'y', c:];
obj2[a: 'x', b: 'y', c:] = temp
console.log(obj1)
console.log(obj2)
// -- swap values (write this code) --
// -- assert values (this is correct) --
console.assert(deepCompare(obj1, { a: 1, b: 2, c: 3 }), 'object 1');
console.assert(deepCompare(obj2, { a: 'x', b: 'y', c: 'z' }), 'object 2');
// prettier-ignore
function deepCompare(actual, expect) {
  return actual === expect ||
    Object.is(actual, expect) || (Object(actual) === actual && Object(expect)
      === expect) && (Array.isArray(actual) && Array.isArray(expect) &&
        actual.length === expect.length && expect.every((expect, index) =>
