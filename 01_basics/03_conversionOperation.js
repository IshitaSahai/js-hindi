// let score=33
// let score="33abc"
// let score=null
// let score=undefined
// let score=true
let score="ishi"
// const {score}=req.body //no gurantee that the value is in integer form

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)//Nan-not a number is a special type 

// 33=>33
//"33abc"=> NaN but it'll have type as number
//true=>1; false=>0

// let isLoggedIn=1
// let isLoggedIn=""
let isLoggedIn="ishi"
let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//1=>true; 0=>false
//""=>false
//"ishi"=>true

let someNumber=33
let stringNumber=String(someNumber)
// console.log(stringNumber)
// console.log(typeof(stringNumber))

//**********operations***********
let value=3
let negval=-value
console.log(negval)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1="hello"
let str2="ishi"

let str3=str1+str2
console.log(str3)

console.log("1"+2)//12 as string is at first so all will be converted to string

console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")//if string is at the last then firstly the operations will be performed on the value that's at first then string part will get executed as it's to be executed

console.log(true)

console.log(+true)//conversion of true will be done 
console.log(+"")//empty parenthesis gives 0 but conversion is done on using + sign 

let num1, num2,num3
num1=num2=num3=2+2

let gameCounter=100
// gameCounter++
++gameCounter
console.log(gameCounter)

//prefix=values incremented first then assigned to var
//postfix=values incremented after assignment to var 