// For..Each loop doesn't return anything therefore we cannot implement any operation on the items of the loop



// ---- To return the values or to conditionally perform operation. Therefore we have some loops for it ----
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// -- filter --
// It also take callback as argument and returns an array

// *** It returns the values when it is true

// const newFltNum = myNum.filter((num) => num > 4)
// OR
// We are using scope below therefore we have to write return
const newFltNum = myNum.filter((num) => {
    return num > 4
})
// console.log(newFltNum);


// Applying Filter in an array of object below
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//   We want that books from above whose genre is History 
// const userBooks = books.filter((book) => book.genre === 'History');
// console.log(userBooks);

// Books that published after 2007
const userBooks1 = books.filter((book) => { return book.publish > 2007});
// console.log(userBooks1);


// --- map ---
// *** It returns the values wheather it is true or false
const myNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (const item of myNum) {
    // console.log(item);
}
// No change in original array using mao and filter function.

// Adding 10 inevery element
const newMyNum1 = myNum1.map((item) => item+10);
// console.log(newMyNum1);

// -- Chaining in Map --
// We can use map on a map again, use filter on a map and use map on filter this is called chaining.
// The input array or value for the next map or filter is the output array or value of previous map or filter.
const newMyNum2 = myNum1.
                    map((num) => num*10)
                    .map((num) => num + 5)
                    .filter((num) => num >= 40)

// console.log(newMyNum2);




// ---- Reduce ------
/*
-> We use reduce to make cart logic in e-commerce.

The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, 
in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer
across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value
may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next
element (index 1 instead of index 0).

*/

const itemNum = [1, 2, 3, 4, 5]
/* Reduce takes two parameters first accumulator and second is current value. When iteration starts accumulator got the initial
value and current value is the first element of array nad in second pass the accumulator got the returned value in from reduce
the initial value will not go again in accumulator, it goes only when iteration starts.
*/

// const cart = itemNum.reduce((accumulator, currentValue) => accumulator+currentValue, 0)
    // OR
const cart = itemNum.reduce((accumulator, currentValue) => {
    // console.log(`accu: ${accumulator} and curVal: ${currentValue}`);
    return accumulator + currentValue
}, 3)

// console.log(cart);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
