// Scope for nested blocks where child block can access the the data of parent block but parent cannot access the child's block data
function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// Declaration of functions and holding function in a variable it, and affects of it. 

/* Below We just used the funciton in log before declaration, So as seen we can use the funciton before declaration when we
    declare the function.
*/

console.log(addone(5))
function addone(num) {
    return num + 1
}


// Below we used the function before function initialized and holded in a variable.
// As we can see log cannot access the function because it is not declared or exists
console.log(addTwo(5));
const addTwo = function (num) {
    return num + 2
}

/* So when we hold a function in a variable we cannot access it as before, But in normal function we access the 
    function before declaration. This is called hoisting. 
*/