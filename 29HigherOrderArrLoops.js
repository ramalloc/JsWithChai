// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

const details = {
    name: "Ram",
    class: 12
}

// For..Of doesn't work with Objects
// for (const iter of details) {
//     // console.log(iter);
// }

// -- Map --
// Map is an object in itself, its declaration srarts with keyword {new} like below ->
/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.
It stores value in continous as passed and contains no replicas.
 */ 
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

// If we want to iterate map single key value in an array means iteration of map will return arrays. 
for (const key of map) {
    // console.log(key);
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
 */

// If want to print key-value pairs only then we have to destructure the map 
for (const [key, value] of map) {
    // console.log(key, " :- ", value);
}
/*
IN  :-  India
USA  :-  United States of America
Fr  :-  France
*/



// -- Iterating Arrays --
const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift for apple'
}

// TO iterate the object we have For..In Loop
for (const key in myObj) {
    // console.log(`${key} is for ${myObj[key]}`);
}

// For..In loop on array
const prog = ["js", "cpp", "rb", "swift"]
for (const key in prog) {
    // console.log(key);
}
// Here we are getting keys 0, 1, 2.. We are not getting direct value like for..of loop
for (const key in prog) {
    // console.log(prog[key]);
}


// For..In loop on Map
for (const key in map) {
    // console.log(key);
}
// We are not getting anything because Map is not iteratable.


//  ---- For..Each Loop ----
const coding = ["js", "cpp", "rb", "swift", "java", "cpp"]
// Direct Method to Iterate array or an Object by Its Prototype
coding.forEach(function (item) {
    // console.log(item);
})
// Arrow callback function
coding.forEach((item) => {
    // console.log(item);
})

// We can pass outside function in forEach loop as higher order function
function printMe(item){
    // console.log(item);
}
// Passing the reference of outside function
coding.forEach(printMe)

// For each loop consists many things in parameters like value, key, array list
const detailedArray = (value, key, arrList) => {
    console.log(value, key, arrList);
} 
// coding.forEach(detailedArray)


// For Each for Array of Objects
const myArrayOfObj = [
    {
        languageName: "Java",
        Syntax: "java"
    },
    {
        languageName: "C++",
        Syntax: "cpp"
    },
    {
        languageName: "Python",
        Syntax: "py"
    },
    {
        languageName: "Javascript",
        Syntax: "js"
    }
]

myArrayOfObj.forEach((item) => {
    console.log(item.languageName, " syntax is : ", item.Syntax);
})






 
