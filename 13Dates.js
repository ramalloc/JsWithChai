// Dates
// It calculates the date from 1970
let myDate = new Date()

// MyDate is an instance of Date() means it is an object

// We don't get the date directly it contains many value which is not understable like below
// console.log(myDate);
// 2024-02-20T11:36:11.344Z

// To understand the date and use it efficiently we use below methods of Dates()

// console.log(myDate.toString());
// Tue Feb 20 2024 11:34:12 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());
// Tue Feb 20 2024

// console.log(myDate.toLocaleString());
// 2/20/2024, 11:34:12 AM

// console.log(typeof myDate);
// object

// -- Giving dates and time as parameter in Date()

// Below we are giving dates only and time becomes 12:00:00 by default
let myCreatedDate1 = new Date(2023, 0, 23)

// Below we are giving dates and time as well
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)

// We can pass the dates in String as well as normal dates
let myCreatedDate3 = new Date("2023-01-14")

// We can pass the dates in String like the below as well
let myCreatedDate4 = new Date("01-14-2023")


// console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());
// console.log(myCreatedDate4.toLocaleString());

// To get the timestamp of the time then we use Dates.now() method
// let myTimeStamp = Date.now()

// It gives result in miliseconds
// console.log(myTimeStamp);
// 1708429427337

// The instance have access of methods like getTime() which gives the timestamp when it is created 
// console.log(myCreatedDate1.getTime());

// We can convert the miliseconds into seconds dividing by 1000 with Maths floor method
// console.log(Math.floor(Date.now()/1000));

// The Date() instance have access of many method to retrieve data from Dates like to get month and day
let newDate = new Date()
// console.log(newDate);
// Month starts from 0 in Dates if are getting and passing directly in Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// toLocaleString is the method that we will use more, It takes two parameters 2st is interlisation which write {'default'} and 
// 2nd is an object and we can define there that what we need by pressing shortcut key (ctrl + space) in object.
console.log(newDate.toLocaleString('default', {
    weekday: "long",
})
)