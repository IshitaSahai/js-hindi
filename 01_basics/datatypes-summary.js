//categorization of data is on the basis of the fact how the data is stored and accessed in the memory 
//primitive: call by value : referernce of memory isn't given, they're copied somewhere and then given, original data isn't altered , changes are done in the copy of the original value and not the original value itself 
//7:- string, number, boolean, null, undefined, symbol, BigInt

const score=100//can be anyhting
const scorVal=200.4
const isLoggedIn=false;
const outsideTemp=null
let userEmail;//or let userEmail=undefined

//js is dynamically typed as it's variables don't require a datatype during its declaration, variables types are determined at the runtime and there's no need to declare the type of variable before using it and a variable can hold different values at different times eg: let x=20
// x=true
// whereas in case of statically typed language x=true after declaration of a variable will generate an error

const id=Symbol('123')//datatype-symbol
const anotherId=Symbol('123')

console.log(id==anotherId)


// const bigNo=389248513409978649344898925475689235n//on putting n after the no, it automatically makes it BigInt 
// console.log(typeof(bigNo))
//Reference/ non primitive: values whose reference can be allocated to us in the memory:- arrays, objects, functions

 const heros=["shaktiman","naagraj","doga"]
let obj={
    name:"ishi",
    age:20,
}//datatype can be anything: string, boolean, function, number, array, any other object


//declaring function like a var
const myfunc=function(){
    console.log("hello world");
} 

console.log(typeof bigNo)
console.log(typeof outsideTemp)//null's datatype is 'object' 
console.log(typeof scorVal)
console.log(typeof myfunc)//function returns a datatype function, it's called as 'object function' 
//all non primitive datatypes return their datatype as object
console.log(typeof heros)
console.log(typeof anotherId)

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object