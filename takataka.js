// PROMISES

const promise = new Promise(function(resolve, reject) {
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

{/* <h2>JavaScript Promise</h2>

<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// some code (try to change x to 5)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
</script> */}


// 'this' keyword
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

 //function to get user email and password(CALLBACK FUNCTIONS)
function getUser(email, password, callbackFn, isUserAvailable) {
  if(data.user !== "") {
    isUserAvailable ===      true
  }
  console.log("my data is coming ")
  setTimeout(() => {
    callbackFn({ email, password})
  }, 1000)
}
//function to get user fname and lname
function getUserName(email, callbackFn) {
  setTimeout(() => {
    callbackFn("Francline Odiella")
  },2500)
}
function getUserDetails( callbackFn) {
  setTimeout(() => {
    callbackFn({height: 6.0, national: "S-Sudan"})
  },2500)
}
const user = getUser("franco@gmail.com", '123sgrt', (user) => {
  console.log(user)
  getUserName(user.email, (name) => {
    console.log(user.email, name)
  })
  getUserDetails((ud) => {
    console.log(ud)
  })
})
console.log("last :grin::grin::grin:")









