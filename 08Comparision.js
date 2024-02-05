// -> While comparision the data with each other we will get to see the implicit conversion of data by compiler


// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// --> We should avoid the below comparision methods

// console.log("2" > 1); -> It returns true, because it converts "2" into 2; String to Number
// console.log("02" > 1); -> It returns true, because it converts "02" into 2; String to Number

// console.log(null > 0); -> It returns false, because when we compare {null} with comparision opertaors(>,<,>=,<=) 
// it converts null to 0

// it doesn't converts null to any number
// console.log(null == 0); // -> It returns false, because when we compare {null} with equal opertaor(==) 

// it converts null to 0, and returns true
// console.log(null >= 0);

// The below returns false
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// Strict equals (===), It checks strictly with the data type also
// console.log("2" === 2);