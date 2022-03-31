const promise = new Promise((resolve, reject) =>{
    console.log('now we have the data 😀😀')
    setTimeout(() => {
      resolve({ email: "alamin@gmail.com",  password:"123hfhf"})
    }, 5000)
  })
  promise.then((data) => {console.log(data)})
 
//   how to catch errors on promises
  