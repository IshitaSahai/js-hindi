const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash"]

// marvel_heros.push(dc_heros)//push pushes the entire array into the original array(marvel_heros) instead of merging the new array into the original array 

// console.log(marvel_heros)

// console.log(marvel_heros[3][1])

// const new_arr=marvel_heros.concat(dc_heros)// Combines two or more arrays. This method returns a new array without modifying any existing arrays unlike push which modifies the existing array.
// console.log(new_arr)

//spread operator:difference from concat is that:-in concat only one value can be added at a time but in spread multiple values can also be added at the same time
const new_arr=[...marvel_heros, ...dc_heros]
console.log(new_arr)

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr=another_arr.flat()//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_arr)
const real_another_arr_with_depth=another_arr.flat(Infinity)
console.log(real_another_arr_with_depth)

console.log(Array.isArray("ishi"))

console.log(Array.from("ishi"))//Creates an array from an iterable object.
console.log(Array.from({name:"ishi"}))//will give an empty array if it's not able to convert the specified value to an array, in order to convert this to an array, we need to specify which value is needed to be put in array ie. the key or the value etc

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//Returns a new array from a set of elements.