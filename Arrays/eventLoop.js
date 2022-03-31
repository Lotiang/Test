
// javascripts is a single threaded synchronous programming language 
// It means that the main thread where JavaScript code is run, 
// runs in one line at a time manner and there is no possibility of running code in parallel.

// call stack is a data structure which records besically where in the program we are, if we step into a function,
//  we put something in the stack and if we return from the function, we pop it off the stack
// in async and sync programming eventLoop look at the stack and look at the task queue
//  and if the stack is empty its take the first thing on the queue and pushes it on to the stack which effectively runs it.


// Only when the call stack is empty will the JavaScript engine look to see if there's anything in the Task Queue. 
// What that means is that if there's a frame on the call stack that's taking forever, nothing on the Task Queue will get processed.
//  This whole process is called the "Event Loop".
