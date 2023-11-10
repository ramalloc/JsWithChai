// Conversion of Data Types

// Below is a number
let num = 22  
// console.log(typeof(num));

// Below is a string
let str = "22"  
// console.log(typeof(str));

// Below is a string
let alphaNum = "22abc"  
// console.log(typeof(alphaNum));

// -> Convert String Data Type to Number
let strToNum = Number(alphaNum)
// console.log(typeof(strToNum));
// str contains numbers and string also but after converging string to number the data types will become number
// instead of it contains alphabets

// console.log(strToNum);
// strToNum value is NaN (Not a Number)


// -> null and undefingned datatype to Number datatype
let numNull = null
let nullToNum = Number(numNull);
// console.log(nullToNum);
// It returns 0

let numUndef = undefined
let undefToNum = Number(numUndef);
// console.log(undefToNum);
// It returns NaN

// -> Boolean to Number
let truBoolNum = true
let trBlToNum = Number(truBoolNum);
// console.log(trBlToNum);
// It is returning 1

let falBoolNum = false
let flBlToNum = Number(falBoolNum);
// console.log(flBlToNum);
// It si returning 0


// -> Any Datatype to Boolean
let trNum = 1
let boolTrNum = Boolean(trNum);
console.log(boolTrNum);
// trNum = natural Number; It return true always
// trNum = "Any String"; It return true always

let flNum = 0
let boolFlNum = Boolean(flNum)
// console.log("value at boolFlNum is : ",boolFlNum)
// console.log("Type of boolFlNum is : ",typeof boolFlNum)

// trNum = 0; It return false always
// trNum = ""; Empty String returns false always
// trNum = null; It return false always
// trNum = undefigned; It return false always
// trNum = NaN; It return false always



// -> Any Datatype to String
// Number to String
let numb1 = 43
let numbToStr = String(numb1);
// console.log("value at numbToStr is : ",numbToStr)
// console.log("Type of numToStr is : ",typeof numbToStr)

// Bool to String
let blTr = true;
let blTrToStr = String(blTr) 
// console.log("value in String of blTrToStr is : ",blTrToStr);
// console.log("Type of of blTrToStr is : ",typeof blTrToStr);

let blFl = false
let blFlToStr = String(blFl) 
// console.log("value in String of blFlToStr is : ",blFlToStr);
// console.log("Type of of blFlToStr is : ",typeof blFlToStr);

// -> undefigned and null to String
let nullVar = null
let nullToStr = String(nullVar);
console.log("value in String of nullToStr is : ",nullToStr);
console.log("Type of of nullToStr is : ",typeof nullToStr);


let undefVar = undefined
let undefToStr = String(undefVar);
console.log("value in String of undefToStr is : ",undefToStr);
console.log("Type of of undefToStr is : ",typeof undefToStr);
