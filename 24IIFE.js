// -> An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// These funcitons invoked right after its declaration
// It is like arrow function without returning something

/*
-> We used to write these kind of functions to implement our database connection or to connect database as application started.
-> The local scope got polluted from gloabal scope means in local scope there can be any variable which can affects by global 
    scope by having same name or absence of value etc. So this wouldn't happen therefore we make a different scope by making
    a IIFE. 
*/

// Normal function 
function start(){
    console.log("DB CONNECTED...")
}
// start();

// IFFE
// We wrapped the normal function in a round bracket and call that function after its declaration liek this -> (func)()
// Named IIFE
(function startDB(){
    console.log("DB CONNECTED BY IIFE...")
})();

// We cannot declare another iife function without ending the earlier iife funtion by adding semicolon(;) in last.

// We can implement the IIFE with arrow function
// Normal IIFE
(() => {
    console.log(`DB Connected by arrow function`);
})()

// But we can implement normal functions after it without adding semicolon.
function start2(){
    console.log("DB CONNECTED...")
}
start2();

// Passing parameter in IIFE -> We can pass the parameter as usual funcitons like in calling
// *** Also We have to end the earlier functions by explicitly adding semicolon in last before writing IIFE function after that,
((name) => {
    console.log(`DB Connected by ${name}`);
})("Roshan")