const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Push performs operation on existing array and push the array as an element in the existing array.
// marvel_heros.push(dc_heros)

// We have to access the array like this
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Concat is a method to merge two arrays. It returns an array which we have to hold in different array variable.
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// -- Spread Operator --
// By using Spread Operator (...) the array is no more an array it all element gets individual.
// in last we merge them in a new array varaible
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// If Below situation arises where array contains nested array in itself.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// To handle above situation we use array method called flat which flatten the array, it takes no. of depths as parameter.
// Here used infinity as parameter means it will take care the depth of array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// Array.isArray gives boolean that the given input is array or not.
console.log(Array.isArray("Hitesh"))

// If we want to convert String into array then we can use Array.from() method and pass the string in the method.
console.log(Array.from("Hitesh"))
// [ 'H', 'i', 't', 'e', 's', 'h' ]

/* But we can't convert the object directly into array, it needs the information that which data of object should be contained 
 in array means we have to pass that key or value should be included in array.
*/
console.log(Array.from({ name: "hitesh" })) // interesting
const obj1 = {
    name: "Rahul",
    score: 20
}
console.log(Array.from(Object.keys(obj1)));
// [ 'name', 'score' ]

console.log(Array.from(Object.values(obj1)));
// [ 'Rahul', 20 ]


// If we want to make an array from existing element then we can use method Array.of() which takes the element individually.
let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));