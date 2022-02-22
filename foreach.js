// foreach
const food = [
    {name:'chicken', price:450},
    {name:'orange', price:200},
    {name:'green', price:150},
    {name:'chips', price:100},
    {name:'juice', price:50},

]
let prices = [450, 200, 150, 100, 50];
let totalPrice = prices.forEach((prev,next)=>{
return prices -20
})
console.log(totalPrice -20);

const food1 = [
    {name:'chicken', price:450},
    {name:'orange', price:200},
    {name:'green', price:150},
]
let totalPrice1 = prices.reduce((prev,next) =>{
    return prev + next
})
console.log(totalPrice1);