/*
--- Promise ---
-> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
-> A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with 
    an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like
    synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply 
    the value at some point in the future.

-> A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
*/
/*
-> Mostly we consume the Promises
Making Promises -> It is an Object so making is similar to Object we make a instance of Promise() with {new} keyword     
-> This promise introduced in ES5, Before Promises in javascript we used Q and BlueBird like libraries to complete the 
    asynchronous tasks.This library appreciated and finally integrated in core NodeJs, also the performance is also better than 
    the previous libraires in NodeJs.
-> Promise() takes a callback as argument and it also prevents callback hell, this callback gives access of resolve and reject
    we can do DB calls, cryptograbhy, network as asynchronous tasks.
*/
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Asynchrounous Task is Completed !");
        resolve();
    }, 1000)
})

// We made Promise above, Now we have to consume the promise
/*
-> Now we can use .then which is directly related to resolve, .then() also accepts a callback which automatically recievev an 
    argument as which as the output from the above Promise.
-> We have to connect .then and resolve to exeute the .then or consumption part, We have to call resolve() in Promise to connect 
    .then. resolve() has parameters which can set things behind the scenes. After connecting them the .then() called as we 
    call resolve().
*/
promiseOne.then(() => {
    // console.log("Promise Consumed !");
})

// Another way to make promise without holding them into variable
new Promise((res, rej) => {
    setTimeout(() => {
        // console.log("Async Task 2 is Completed !");
        res();
    }, 1000)
}).then(() => {
    // console.log("Async 2 resolved !");
})

/*  Passing the data from Promise to .then() using resolve() passing the data which is mostly an object as parameter into it.
    Now we can get the data into .then() from callabck 
*/
const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        res({username: "Roshan", email: "roshan@123"})
    }, 1000)
})

promiseThree.then((res) => {
    // console.log(res);
})

// Using resolve and reject according to error or file accessing 
const promiseFour = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            res({username: "roshan", pass: "roshan@123"})
        }
        else{
            rej("Error: Something went Wrong !")
        }
    }, 1000)
})
.then((user) => {
    console.log(user);

    // If we want username from user we cannot store the value of this .then and print the username ->
    // return user.username;

    // We are unable to access the username of user because we can't do it like this we have to use .then() chaining and return 
    // this value for next .then()
    return user.username;

    // Now we can do chaining of .then()
})
.then((username) => {
    // Getting data from above .then()
    console.log(username);
})
// When we use reject we have to use .catch() to through an error which comes from reject() as parameter
.catch((error) => {
    console.log(error);
})
// Finally - Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). 
// The resolved value cannot be modified from the callback. This will execute when the Promise or async task is completed.
.finally(() => {
    console.log("The promise is resolved or rejected !");
})


// --- Another Way To Handle Promise ---
// ---- Async Await ----
// It waits program to complete, if it completes then they move forward

// Promise Five
const promiseFive = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            res({username: "Roshan", pass: "123"})
        }
        else{
            rej("Something Went Wrong !")
        }
    }, 1000)
});

// To make a funtion asynchronous we use {async} brfore that function to indicate that function aas asynchrounous 
async function consumePromiseFour(){
    // await - It is used to wait for the task to be completed then move forward and used handle the promise
    // const response = await promiseFive
    // console.log(response);

    // Async Await cannot handle error directly, and when we use Promise then error can be occured. So we can use try-catch block
    // By using try-catch we can handle error gracefully which gives cleaner code
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log("ERROR: Something Went Wrong !");
    }

}
// now we have to call the above function 
consumePromiseFour();


// User Async Await Promise
const getAllUsers = async() => {
    // fetch is an time consuming task and we don't how much time it will take therefore we used await here
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        // .json is also taking time therefore we used await here also
        const data = await res.json()
        console.log((data));
    } catch (error) {
        console.log("ERROR: User not Fetched in Async");
    }
}
// getAllUsers();

// User with .then and .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("ERROR: User not Fetched in .then()");
})
