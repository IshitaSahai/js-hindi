///immediately involed function expression
//when we need that the pollution due to global scope shouldn't affect any function then we use iife in order to prevent the pollution due to global scope variables or anything in global scope that may pollute the function

// function c(){
//     console.log("db connected")
// }

// c()
//executing the function immediately without the function call and using double parenthesis 
//()()=> inside first brackets there'll be function and via second brackets there'll be an equivalent function call without the use of the fn name for making the call

//iife- used to execute a function immediately and protect it from the pollution caused due to the declarations and variables of the global scope
(function c(){
    console.log("db connected")
})();

//writing using arrow function

//simple iife unnamed:
( ()=>{
    console.log("db connected 2")
})();//error comes in case of writing an arrow fn or a normal one without using a semi colon to end the previous one as the iife function gets executed immediately but it doesn't know where to stop the context so there's a need to end the line using semi colon in which the function is written


(function c(){
    console.log("db connected 3")
})();//named iife 

//iife with a parameter 
(function c(name){
    console.log(`db connected ${name}`)
})("ishi");//it's a named iife as it has a name 

