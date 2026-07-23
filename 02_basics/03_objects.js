//2 ways to declare an object=> as a literal and as a constructor
//singleton=>object made from a constructor=>it's an object of single type:// Object.create//constructor method
//if an object is made using any other method(using literals), it's not a singleton object, it has multiple instances 

//object literals:declared like var

const mySym=Symbol("key1")//declaring symbol to use it by adding in object keys 

//has key values pairs//object literals  
const JsUser={
    name:"ishi",
    "new namme":"ishii",
    [mySym]:"mykey1",//way to use a symbol in an object 
    age:19,
    location:"up",
    email:"ishi@google.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Saturday"]
}
//only one way to access elements in this unlike objects in which both keys and values can be defined 
// myArr=["h","i"]
// console.log(myArr[0])

//accessing object using dot operator 
console.log(JsUser.age)
// accessing object using keys
console.log(JsUser["new namme"])//has to be written as a string as internally the keys are interpreted as a string in an object's key value pairs 

console.log(JsUser[mySym])//accessing symbol from an object//no other method to access symbol other than square brackets

JsUser.email="ishi@chatgpt.com"//overwrtiting values

//locking values 
// Object.freeze(JsUser)
console.log(JsUser)
JsUser.email="ishi@microsoft.com"//changes won't apply after freezing 
console.log(JsUser)

//adding functions in the object

JsUser.greeting=function(){
    console.log("hello js user");
}

console.log(JsUser.greeting)//output:-[Function (anonymous)]
// console.log(JsUser.greeting())//calls function and returns its value 

JsUser.greeting2=function(){
    //string interpolation 
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2());
