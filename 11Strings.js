// Strings are Objects type Data type

// Traditionally We initialize and uses Strings like below
const num = 12;
const str = "Roshan";
console.log(str + "'s room no is : " + num);
// The above method is not a good practice to iniitilize and use a string


// The Below method is a good practice and advanced way to deal with String with the use of objects.
// The below way provides more methods to perform on String
const str1 = new String('Roshan');
console.log(str1);

// We can access each alphabets of string with the help of above method
console.log(str1[0]); 
console.log(str1[1]); 
console.log(str1[2]); 
console.log(str1[3]); 
console.log(str1[4]); 
console.log(str1[5]); 

// We can know the prototype pf it 
console.log(str1.__proto__);

//  Another Methods on String
console.log(str1.toUpperCase());

const str3 = new String('Helloo')

// The charAt() returns the index of the given character.  
console.log(str3.charAt(2));

// The indexOf() returns the character at the given index of the String .  
console.log(str3.indexOf('t'));
// returning -1 if character doesn't exists

// subString() make a substring within the given range
const newString = str3.substring(0, 4)
console.log(newString);

// slice() also returns a substring but we can also pass -ve values here which runs in cyclic manner.
const anotherString = str3.slice(-8, 4)
console.log(anotherString);

// trim() removes the whitespaces from the String
const newStringOne = "   Raghav    "
console.log(newStringOne);
console.log(newStringOne.trim());

// The below is a sanatized code which includes codes at place of space because our browser doesn't supports whitespaces.
const url = "https://hitesh.com/hitesh%20choudhary"
// replace(), It replace the already exists characters by given characters in the string
console.log(url.replace('%20', '-'))

// includes() returns boolean. It is used to check that the String have the searching values or not.
console.log(url.includes('sundar'))

// Now if we want to convert the string into array based on some characters.
// The array will contain the Strings with comma separated.
const str4 = new String('Roshan-Kumar-Gupta');
// Here we are using '-' as base.
console.log(str4.split('-'));
// It returns [ 'Roshan', 'Kumar', 'Gupta' ]