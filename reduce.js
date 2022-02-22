// reduce
const food = [
    {name:'chicken', price:450},
    {name:'orange', price:200},
    {name:'green', price:150},
]
let prices = [450, 200, 150];
let totalPrice = prices.reduce((prev,next)=>{
return prev + next
})
console.log(totalPrice);

const food1 = [
    {name:'chicken', price:450},
    {name:'orange', price:200},
    {name:'green', price:150},
]
let totalPrice1 = prices.reduce((prev,next) =>{
    return prev + next
})
console.log(totalPrice1);