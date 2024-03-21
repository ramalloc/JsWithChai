/*
-> JavaScript is a prototype-based language — an object's behaviors are specified by its own properties and its prototype's 
    properties. However, with the addition of classes, the creation of hierarchies of objects and the inheritance of properties
    and their values are much more in line with other object-oriented languages such as Java. 
-> In many other languages, classes, or constructors, are clearly distinguished from objects, or instances. In JavaScript, 
    classes are mainly an abstraction over the existing prototypical inheritance mechanism — all patterns are convertible to 
    prototype-based inheritance. Classes themselves are normal JavaScript values as well, and have their own prototype chains. 
    In fact, most plain JavaScript functions can be used as constructors — you use the new operator with a constructor function 
    to create a new object.
*/

/*
-> 
*/


// --- Object Literals ---
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


// --- Constructor ---
/*
-> We use constructor earlier like - 
    const promiseOne = new Promise()
    const dateRightNow = new Date()
-> This {new} keyword is a constructor function, constructor function allows us to make multiple instances from one object literal.
-> In many situations like Date() Promise() we need new instances, we don't want to affect old values we want new instances.
    So {new} used to make new context and this is called constructor function.
-> Below We make a function and we will use {this} and {new} keyword
*/

function User(username, loginCount, isLoogedIn) {
    // username = username
    /* 
    -> In production grade app we write the variables same as parameter, but how our function decides that which is variable of this
        funtion and which is parameter, Therefore we use {this} keyword before declaring the variable of function.
        {this} indicates that the attached variable is belongs to the current function context.
    -> {this} ketword also contains many information in itself, So when we used {this} with any variable, the variable and it's details
        passed in the {this} context information. 
    */
    // Below we declared the variables with {this} and parameters
    this.username = username;
    this.isLoogedIn = isLoogedIn;
    this.loginCount = loginCount;

    // Now we will return {this} only 
    // return this

    // If we do not return {this} although {this} returned implicitly if we are using {new} to call function.
    // But if we are not using {new} then we have to return {this} explicitly.
}

/*
-> Now we will call the function and pass the parameters also store in a variable called userOne
-> Then we will print the userOne and we will see there are many information which comes from {this} but in last we have 
    our data.
*/

const userOne = User("Roshan", 12, true);
console.log(userOne);

/*
-> Now we will call the same function and store it another variable called userTwo and we will not print userTwo aalthough
    we will print userOne.
*/
const userTwo = User("Akash", 10, false);
console.log(userOne);

/*
-> Now we can see the userTwo Overwrites the information of useOne. Therefore we use {new} keyword, It provides us the instance
    of that function or current context. And then if we make another variable and call the same function with {new} keyword
    we got new instance of that function which has its own context and we will see we are not getting extra information that we 
    getting from {this}, we are getting only required data that we passed.
*/
const userThree = new User("Harsh", 17, true);
console.log(userThree);


// -- Functioning of {this} and {new}
/*
-> When we use {new} an empty object has been created which is called instance
-> Then a constructor function called because of {new} which passes the arguments in function.
-> Now all the arguments injected in {this} 
-> Then data returned to us from function 
*/
