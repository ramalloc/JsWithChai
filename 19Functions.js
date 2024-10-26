
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// The below is just reference of function
// sayMyName

// Below is Execution of funciton
// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// We hold the value of addTwoNumbers in result
// const result = addTwoNumbers(3, 5)
/* But the below console shows the value of Result is undefined because the function is not returning the value it is just 
    printing the the addition
*/
// console.log("Result: ", result);

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// The below will shows the value because function is returning something
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam") {
    // Checking the parameter in function
    if (!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}


// This shows "hitesh just logged in"
// console.log(loginUserMessage("hitesh"))

// This will print "just logged in", not showing username because we passed an empty string
// console.log(loginUserMessage(""))

// The below will give undefined because we didn't pass anything in argument.
// console.log(loginUserMessage()) 




// function calculateCartPrice(val1, val2, ...num1) {
//     return num1
// }

function calculateCartPrice(...obj) {
    return obj
}

const obj3 = {
    1: "Hey",
    2: "Hi"
};

console.log(calculateCartPrice(obj3))
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));