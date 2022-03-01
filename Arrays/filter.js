// filters(array)
const food = [
    {name:'chicken', price:450},
    {name:'orange', price:200},
    {name:'green', price:150},
]
let prices = [450, 200, 150];
let expensiveFoods = prices.filter((check)=>{
return check>150
})
console.log(expensiveFoods);

const food1 = [
    {name:'chicken', price:450},
    {name:'orange', price:200},
    {name:'green', price:150},
]
let filteredFoods = food1.filter((check) =>{
    return check.price>150
})
console.log(filteredFoods);