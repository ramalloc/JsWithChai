/* JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects
  create shallow copies, rather than deep copies).

  A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as
  those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may 
  also cause the other object to change too.

  A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as 
  those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be
  assured you're not causing the other object to change too.
*/

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice
/*
-> Slice doesn't change the original array it just get the copy of sub array in given range of array with range excluded.
-> But Splice changes the original array It expracts the elements or sub-array within a given range of array with range included.
*/
console.log("A ", myArr);
// A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)
console.log(myn1);
// [ 1, 2 ]

console.log("B ", myArr);
// As we can see there is no change in given below array.
// B  [ 0, 1, 2, 3, 4, 5 ] 


const myn2 = myArr.splice(1, 3)
console.log(myn2);
// [ 1, 2, 3 ]

console.log("C ", myArr);
// As we can see there is change in given below array by splice operation.
// C  [ 0, 4, 5 ]