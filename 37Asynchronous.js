/*
-> Javascript is a synchronous in narute means it executes the code line by line, one by one
-> It is single threaded menas Single-threaded processing is the execution of one command at a time in a sequential manner within
    a single process. It's like a single worker handling all tasks in a queue one after the other, therefore it is slower than 
    others which have multiple threads. But only javascript engine doesn't found it always found with a run time environment like -
    browser, NodeJs etc. And this is called Default Javascript
*/  
/*  
    In OS reading the file by any program is very expensive task because the program cannot read the file, to read the file 
    we have to give the context to the kernel then kernel read that file then execution gives back to the program.
    Blocking code, also known as synchronous code, executes instructions one at a time in sequential order. Non-blocking code is
    code that doesn't guarantee line by line execution. Blocking code prevents other code from executing until it finishes, 
    while non-blocking code allows other code to execute without waiting.

-- Blocking Code --
-> Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation 
    completes. This happens because the event loop is unable to continue running JavaScript while a blocking operation is 
    occurring.
-> It block the flow of program, like if nodejs read a file from OS then JS have to wait and can't do anything further.

-- Non-Blocking --
-> It refers to the program that does not block the execution of further operations. Non-Blocking methods are executed 
asynchronously. Asynchronously means that the program may not necessarily execute line by line. The program calls the
function and move to the next operation and does not wait for it to return.
-> It doesn't block the execution, like if nodejs read a file from OS then JS can do their further tasks.

* Their are different use cases to use them *
*/

/*
--- Event Loop ---
-> There are Js Engine, WebAPI or runtime Environment, Register Callback, Task Queue, High Prioority Queue or Promise Queue  
-> When a program wxecutes a callstack formed which contains Global execution context and functions loaded in call stack after it.
-> When a asynchronous function called the call transfres to Asynchronous API like setTimeout, setIntervel etc. which needs to
    executes after sometime or at any event so the events registered in {Register Callback}.
-> So when ever the event occurs {Register Callback} which consists the callback for that event transfers the callback in 
    Task Queue. And then Task Queue Add those call backs into the Call Stack again to complete the program.
-> APIs like fetch() which have promises has different Task Queue which is High Priority Queue or Promise Queue which works 
    same as Task Queue but it has higher priority.
*/