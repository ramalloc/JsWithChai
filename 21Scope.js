// Scope in Windows and Node is different

// var is globally available if anyone changes it in any block scope then it will change in global scope as well.
// Whereas let and const are scoped variable, therefore we don't use var.
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

