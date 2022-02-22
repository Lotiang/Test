const numbers = [1,2,3,4,5,6,7,8,9,10];
const newArr = numbers.map((num) =>{
    return num - 3
})
console.log(newArr);

const names = ['Lotiang','Lizzy','Paul'];
const newArr1 = names.map((name) =>{
    return name +' '+ 'is in class'
})
console.log(newArr1);

let cars = ['Toyota', 'Land Rovers', 'Tesla', 'Nissan'];
let availableCar = cars.map(obj =>obj);
console.log(availableCar);
