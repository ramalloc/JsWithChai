// Memory in JS
// Stack -> Primitive datatypes uses Stack Memory
/*
    Whenever We declare a primitive datatype variable It stores in Stack memory.
    And If we peform any operation on the value of that primitive datatype variable's value we get the copy of that value.
    If We store the primary(first) variable in a secondary(second) variable, and tried to change the value of secondary variable
    primary variable doesn't affected because secondary variable stores only copy of the primary variable
*/
let primVar = "UnChangable";
let primVar2 = primVar;

primVar2 = "Changable"
console.log(primVar);
console.log(primVar2);

   

    // Heap -> Non-Primitive datatypes uses Heap Memory
/*
    Whenever We declare a non-primitive datatype variable It stores the value of that variable in in Heap memeory.
    We get the reference of that value. 
    And If We store the primary variable in a secondary variable, and tried to change the value of secondary variable,
    primary variable gets affected because secondary variable stores the reference of the primary variable.
*/
let obj1 = {
    email: "rj@123",
    pass: 12345678
}

let obj2 = obj1;
obj2.email = "none@123";

console.log(obj1);
console.log(obj2);
// Changed { email: 'none@123', pass: 12345678 }