// Interpreter detects the type of variable automatically, also detects the number type of variable
const num = 400;
console.log(num);

// But We can explecitly define the Number type of variable
const exp_num = new Number(400);
console.log(exp_num);

// We got Many Methods by defining the Number Explicitly 
// Changing number to String and getting the length of the Number

console.log(exp_num.toString().length);
