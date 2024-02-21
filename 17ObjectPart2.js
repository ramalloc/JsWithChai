// Below is singleton object
// const tinderUser = new Object()


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// We can make nested objects as well
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// We can access the objects properties with {.}
// console.log(regularUser.fullname.userfullname.firstname);


// Merginf of Objects
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// THe below will just combine the objects, do not merge the arrays. It(obj3) contains two objects in it
// const obj3 = { obj1, obj2 }

/* We can merge the objects with the help of Objects.assign(), It takes two parameters - 1st is target and and second is source.
 We take target as empty object so that if there are source more than one object then all source object can assign into empty 
object.
*/
// const obj3 = Object.assign({}, obj1, obj2, obj4)


// Mostly we use Spread Operator to merge the objects
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);


// Values comes from Database as array of abiects.
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// We can access the object's properties in array like below
users[1].email


// console.log(tinderUser);

// Object.keys(_object_name_) return the array of keys of properties, and we can perform operations upon it.
// console.log(Object.keys(tinderUser));
// [ 'id', 'name', 'isLoggedIn' ]

// Object.values(_object_name_) return the array of values of properties, and we can perform operations upon it.
// console.log(Object.values(tinderUser));
// [ '123abc', 'Sammy', false ]


// Object.entries(_Object_name_) return array of array of every property of objects.
// console.log(Object.entries(tinderUser));
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// hasOwnProperty() returns that the given key is present in the object or not, it is true or false
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

