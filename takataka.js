// PROMISE

let promise = new Promise(function(resolve, reject) {
    setTimeout(()=>resolve('done!'), 1000);
    
});

promise.then(
    result => alert(result),
    error => alert(error)
);

let promise = new Promise(function(resolve, reject) {
    setTimeout(()=>reject(new Error('whoops!')), 1000);
    
});

promise.then(
    result => alert(result),
    error => alert(error)
);

 function calculator() {
     this.read = function(){
         this.a = +prompt('a?', 0);
         this.b = +prompt('b?', 0);
     };
     this.sum = function(){
         return this.a + this.b;
     }
     this.mul = function(){
        return this.a * this.b;
     };

 }

 let calculator = new Calculator();
 calculator.read();
 alert('sum=' + calculator.sum());
 alert('mul=' + calculator.mul());