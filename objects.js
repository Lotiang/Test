let info = {
// strings
name: 'Lotiang',

// numbers
age: 36,
// boolean
isMale: true,
// arrays
marks : [50,45,30,35,25,20],
reverse: reverse

}
console.log(info.name);
console.log(info.age);
console.log(info.isMale);
console.log(info.marks);
console.log(info.marks[3])
console.log(info.name.charAt(info.name.length - 1))
console.log(info);
info.name2 ='Nyathio'
console.log(info);

reverse:
function reverse(str){
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--){
     reversed =reversed + str[i]
    }
    return reversed
  }
  console.log(info.reverse('Lotiang'));

  let car = {
      name:'ferrari',
      wheels:3,
      const:'35 kenya million',
      numberOfWheels:function(){
          return this.wheels + 1
      }
  }

info.car = car
console.log(car.wheels);
console.log(car.numberOfWheels());


let car = {
    name:'ferrari',
    wheels:4,
    cost:'35 kenya million',
    ferrariInfo:function(){
        console.log('name is ${this.name} and the cost is ${this.cost}');
    }
}

info.car = car
console.log(car.wheels);
console.log(car.ferrariInfo());


// for...in
const names = {
    fname: 'Lotiang',
    sname: 'Nyathio',
    lname: 'Lobalu',
}
for (const name in names){
    // console.log(name);
    // console.log(names[name]);
    console.log(`${name} is ${names[name]}` .toUpperCase());
}

// for...of
let animals = ['cows', 'cats', 'dogs', 'donkey']
for([index,animal] of animals.entries()) {
    console.log(index,animal);
    for(let i = 0; i < animals.length; i++) {
        if(animals[i]=== 'dogs'){
            debugger
        }
    console.log(animals(i));
    }
 
    // const hero = {
    //     alis:'Robbin',
    //     name: 'Batman', 
    //     catchphrase: 'We will fight',
    //     message: function(){
    //         return `${this.alis} and, ${this.name}, ${this.catchprase}`
    //     },
    // }
    // console.log(hero.message);

