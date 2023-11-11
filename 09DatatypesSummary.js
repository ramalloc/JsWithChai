
/* 
---There are only two Data types in Javascript---
1. Primitive
2. Non-Primitive

-> Data ypes descides on the basis that how the data is Stored in the memory and the data get accessed from the memory.
*/


// --Primitive--
/*
-> Primitive data types are also known as call by value data type.
-> When we call the Primitive data type we got copy of data not the actual data or reference of data. 
-> And If we make changes in data it occurs in the copied data not in actual data.
-> Primitive Data Types are :-
    String, Number, Boolean, null, undefined, Symbol, BigInt
*/
// /*

// Number
const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null

// -> undefigned
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

// ->  It returns false because id and anotherId is Different
console.log(id === anotherId); 


// BigInt
const bigNumber = 3456543576654356754n


console.table(["Type of Number is : " + typeof scoreValue,
                "Type of Boolean is : " + typeof isLoggedIn,
                "Type of null is : " + typeof outsideTemp,
                "Type of undefigned is : " + typeof userEmail,
                "Type of Symbol is : " + typeof id,
                "Type of BigInt is : " + typeof bigNumber]);
// */



// -- Non-Primitive/Reference 
/*
-> These are the data types which allocates refernce in the memory
-> Reference Data types
    Array, Objects, functions
*/
// /*

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

// The type of function is function but in the deeper level it is Object Function
const myFunction = function(){
    console.log("Hello world");
}
console.table(["Type of Array is : " + typeof heros ,"Type of Object is : " + typeof myObj,
                "Type of Function is : " + typeof myFunction]);
// */