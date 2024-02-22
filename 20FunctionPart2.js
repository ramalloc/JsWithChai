// Application of Cart - Here we are adding the price of items as ites are carting

// Here We will learn rest operator {...} it is same as pread operator but the use case is different in different situation
// Rest operator bundles the data into an array
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))


// Passing Objects in Function-->
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


// Passing Array in Function -->
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));