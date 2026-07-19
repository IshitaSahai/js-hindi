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

// ****************************
// MEMORY TYPES:- STACK , HEAP
// stack is used in primitive datatypes
// heap is used in non primitive types
// whenever  stack memory is used we get a copy of the variable we declare whereas whenever a variable is in heap then we get the reference of the variable so all the changes take place in the original value of the variable 
let channel="hello"//primitive type  
let anothername=channel//it conntains the copy of the original value which is stored in it but when anothername is changed later the change is in the copy that's stored in anothername and not in the original value of channel 
anothername="jfbhrjfd"
console.log(anothername)
console.log(channel)

// object datatype 
let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
// all the non primitive types go to heap and when we take reference of that value, we get the reference of the original value and not the copy of the original value
let userTwo=userOne
userTwo.email="ishi@google.com"
console.log(userOne.email)
console.log(userTwo.email)
// all the changes that are made in the variable (to which we have assigned the original value) will be made in the original value as well and the original value will also get changed  