const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Destructuring the Object --> 
// We can access the values of object by below {.} method
// course.courseInstructor

// But We can also use the below method to destructure the object
const {courseInstructor} = course
// Using this method we can access value of object directly in other function/usage like below. 
// console.log(courseInstructor);

// We can also use the property as from another name like below. 
const {courseInstructor: instructor} = course
console.log(instructor);


// JSON -->
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]