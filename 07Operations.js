let value = 3
let negValue = -value
// The above will convert the above number into negative number
// console.log(negValue);

// Genr=eral Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // -> 12
// console.log(1 + "2"); // -> 12 

// If First element is String then all the values after it will be considered as String till the another datatype encounters 
// console.log("1" + 2 + 2); // -> 122

// If First element is Number then all the values after it will be considered as Number till the another datatype encounters 
// console.log(1 + 2 + "2"); // -> 32

// console.log( (3 + 4) * 5 % 3); // -> 2

// + before true and "" is valid but after them is not valid syntax
// console.log(+true); // -> 1
// console.log(+""); // -> 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
// console.log(num1)


let gameCounter = 100

// Below increment first then print
// ++gameCounter;
console.log(++gameCounter);

// Below print then increment therefore it is not printing incremented value
// gameCounter++;
console.log(gameCounter++);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion