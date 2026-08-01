const user={
    username:"ishita",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`)//to refer to the current context(current value) we use this keyword ie. to access the variables and stuff of the current scope 
        // console.log(this)//prints all the variables in their current state of object 
    }
}

// user.welcomeMessage
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this)//gives an empty object as output as there's no context of any object globally 

//if console.log(this) is executed inside the browser then it'll give the output as window object which is used as the global object in the browser whereas in node env(here) the output is empty object 

//this can't be used inside functions in order to get the value of the current context of the variables of the function-eg:
// function one(){
//     let username="ishita"
//     console.log(this)//it gives some values as output inside a function
//     // console.log(this.username)//undefined 
// }

// one()

//way of declaring functions using arrow functions:-
// const one=function(){
//     let username="ishita"
//     console.log(this)//same result
//     console.log(this.username)
// }

const one=()=>{
    let username="ishita"
    console.log(this)//it returns an empty object here 
    // console.log(this.username)
}

one()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

//implicit return 
// const addTwo=(num1,num2)=> num1+num2//no need of return keyword 
// const addTwo=(num1,num2)=> (num1+num2)//no need of return keyword 

//parenthesis are imp as while trying to return value of an object, it won't be printed without using the parenthesis 
const addTwo=()=>({username:"ishita"})

console.log(addTwo())