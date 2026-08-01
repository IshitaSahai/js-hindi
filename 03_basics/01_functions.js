// console.log("i")
// console.log("s")
// console.log("h")
// console.log("i")

function sayMyName(){

    // console.log("i")
    // console.log("s")
    // console.log("h")
    // console.log("i")

}

// sayMyName()//parenthesis after fn name is its execution and only the fn name is k/a its reference ie.

// sayMyName //fn isn't executed 

// function addTwoNumbers(number1, number2){//parameters are passed in function definition 
    // console.log(number1+number2)
// }

// addTwoNumbers()//NaN
// addTwoNumbers(3,4)//7//arguments are passed in function 
// addTwoNumbers(3,"4")//34
// addTwoNumbers(3,"a")//3a
// addTwoNumbers(3,null)//3

//storing in a variable 
// const result=addTwoNumbers(3,5)

// console.log("result: ",result)//undefined as the function doesn't return any value 

function addTwoNumbers(number1, number2){
    // let result=number1+number2
    // console.log("i")
    return number1+number2
    console.log("i")//unreachable
}

const result=addTwoNumbers(3,5)//a fn with a return value can be stored in a variable whereas the one with a return value can't 

// console.log("result: ",result)

function loginUserMessage(username="sam"){//a default value can be given in order to completely avoid the condition of getting no username in that case it never executes the if block
    if(username===undefined){//!username 
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("ishita")//fn got executed  but its value isn't printed as it just returns a value and it isn't in console, also there's no variable out of the fn that stores and prints it or simply prints it 
console.log(loginUserMessage("ishita"))

//if no value has been assigned as an argument then it returns undefined ie. the value hasn't been defined 
console.log(loginUserMessage())

//when we don't know how many items can be passed as arguments
// function calculateCartPrice(num1){
//     return num1;
// }

function calculateCartPrice(...num1){//rest operator:pack all items in a bundle and return in an array 
    return num1;
}

function calculateCartPrice(val1, val2, ...num1){//in this case 1st and 2nd values will go to val1 and val2 and the rest will go in num1 in the form of an array  
    return num1;
}

// console.log(calculateCartPrice(200,400,500,2000))

const user={
    username:"ishi",
    prices:199//problem may come if prices is used and the type safety needs to be checked 
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,400,600]))

