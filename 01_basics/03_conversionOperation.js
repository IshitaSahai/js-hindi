// let score=33
// let score="33abc"
// let score=null
// let score=undefined
// let score=true
let score="ishi"
// const {score}=req.body //no gurantee that the value is in integer form

console.log(typeof score)
console.log(typeof(score))

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)//Nan-not a number is a special type 

// 33=>33
//"33abc"=> NaN but it'll have type as number
//true=>1; false=>0

// let isLoggedIn=1
// let isLoggedIn=""
let isLoggedIn="ishi"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1=>true; 0=>false
//""=>false
//"ishi"=>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))

