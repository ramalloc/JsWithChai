// Belwo we are defining an object which consists some elements which may be anything.
const user = {
    username: "Roshan",
    price: 3000,

    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to the course !`);
        console.log(this);
    }
    
}

// THIS -> 
/*
-> In JavaScript, the {this} keyword refers to an object. Which object depends on how {this} is being invoked (used or called).
The {this} keyword refers to different objects depending on how it is used:
-> In an object method, {this} refers to the object.
-> Alone, {this} refers to the global object.
-> In a function, {this} refers to the global object.
-> In a function, in strict mode, {this} is undefined.
-> In an event, {this} refers to the element that received the event.
-> Methods like call(), apply(), and bind() can refer {this} to any object.
-> {this} is not a variable. It is a keyword. You cannot change the value of {this}.
*/

// user.welcomeMsg()
// user.username = "Harsh"
// user.welcomeMsg()

// -> Now if we print the this in node global the output will be empty object ({}).
// console.log(this); 


// -> But if we print the {this} keyword in an object which is a local scope then we will get the current context / value/ properties. 
// user.welcomeMsg()

/* But if we log {this} in browser console then it gives Window Object. Before the stand alone javascript execution engines
    like - node, deno, bun etc. We couldn't execute javascript independently therefore in browser {this} keyword return 
    most global object in browser which is Window{}. 
*/


// Now when we log {this} in a function and in node envronment then it return many references of utility functions.
function inNodeFunc(){
    let username = "Roshan"
    console.log(this);

    // -> But We can't {this} here to get reference of any variable in function
    // console.log(this.username);
}

// calling function
// inNodeFunc()


// Arrow Function
const arrowFunc = () => {
    let  username = "Ram"
    // When we use {this} in an arrow function we get en empty object ({}). Means we don't have refrence of {this} in arrow function.  
    console.log(this);
    console.log(this.username);
}

// Calling arrow function
// arrowFunc()


// -> When we use paranthesis in arrow function ten we have to return something.
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// -> If we are writing on line code then return is implicitly called or returned something.
// const addTwo = (num1, num2) =>  num1 + num2


// -> But if we don't want to user return explicitly then we can write code block in round brackets for implicit return.
// const addTwo = (num1, num2) => ( num1 + num2 )

// We cannot return an object without wrapping it in round bracket.
const addTwo = (num1, num2) => ({username: "roshan"})


console.log(addTwo(3, 4))


