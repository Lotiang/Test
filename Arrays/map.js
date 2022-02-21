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

const food = [
    {name:'chicken', price:450},
    {name:'orange', price:200},
    {name:'green', price:150},
]