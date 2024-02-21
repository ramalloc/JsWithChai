/*
There are two ways to delare objects 1st is through constructor and 2nd is through literals

Constructors - When we make an object through constructor it is siingleton object  means it only one onjects.
The Singleton Pattern ensures that a class can only have a single instance throughout the lifetime of an application.

Literals - JavaScript Object Literal is a data type used to define objects in JavaScript with multiple iinstances.  
*/

// Singleton Object
// const obj = Object.create(null);

// Here we are using Literals
// It is a key-value pair, object take the key as string.

// Declaring Symbol which is s primitive data type and we want to use it in object.
const mySym = Symbol("key1")
// In object if we want to use symbol we can't use it directly as {mySym: "mykey1"}, we have to enter the key in square brackets
// like this -> [mySym]: "mykey1",


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing the Obect --> 
// We can access object data from {.}
// console.log(JsUser.email)

// We can access through {[]} square brackets as String.
// console.log(JsUser["email"])

// But as Object treats keys as String and if there is a key which is in  string already then we have to access the element 
// in square brackets as String
// console.log(JsUser["full name"])

// We can't access the Symbol data in Object like with square brackets as a String, We have to treat the data as Symbol
// with only square brackets without String Quotation
// console.log(JsUser[mySym])



// Changing the values of Objects

JsUser.email = "roshan@chatgpt.com"

// We can lock the values of an object, So we can freeze the object so that the values of object couldn't change.
// Object.freeze(JsUser)
JsUser.email = "roshan@microsoft.com"
// console.log(JsUser);


// We can add functions in objects it will treated as a variable
JsUser.greeting = function(){
    console.log("Hello JS user");
}

// We can know the properties(data) of refrenced object through {this} keyword with string interpolation and can use in function. 
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

