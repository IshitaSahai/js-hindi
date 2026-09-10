//promise:-task that has been given but won't get completed immediately, it'll get attached to the queue but it can't be loaded immediately and it can't be completed rn,
//promise OBJECT represents the eventual completion/faliure of an asynchronous operation and its resulting value  

//before the introduction of promises in core js, when it wasn't possible to use the fetch catch finally etc, at that time, bluebird was a library that helped to use all these functionalities
//now these aren't needed to be used at all


//creating promises:-//promises take a callback function in them and they also reduce the callback hell ie. callback inside the callback

//promise takes a callback function inside it, the function has 2 parts ie. resolve, reject=> either the promise will be completed or it will get rejected 
const promiseone= new Promise(function(resolve,reject){
    //tasks that can be done in promises
    //do an async task
    //db calls,cryptogralhy, network related tasks
    setTimeout(function(){
        console.log("async task is complete")
        //this method has some interesting things and also sets some parameters behind the scenes 
        resolve()//via this the promise consumption code gets executed 
    },1000)


})//y are we using the resolve and reject, what actually has it done

//promise consumption:-
//.then has a direct relation with resolve 
//.then takes a callback function
//the function automatically receives an argument that has the value that has been returned in the callback function of the promise 
promiseone.then(function(){
    console.log("promise consumed")
})
//resolve and .then need to be connected in order to consume the promise // in order to connect them a method k/a resolve needs to be called 
 

//doing the same thing without storing it in a varibale:-
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async taks2")
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})

//3rd promise
const promise3=new Promise(function(resolve,reject){
    //data may hv come from some network and we may need to fetch that data
    setTimeout(function(){
        //this fn may hv done a lot of work, may hv brought data from some network/filesystem
        resolve({username:"is", email:"is@example.com"})//it may also contain the data in the form of parameters//usually the data is in the form of the objects 
    },1000)
})

//consuming promise:-
//whatever is passed inside resolve as a parameter is by default accessible inside the .then callback function as a parameter during the promise consumption 
promise3.then(function(user){//we are by default expecting something in return from the resolve 
    console.log(user)//whatever parameters are passed in resolve, we get all of them inside the promise consumption function call
})


//4th promise
const promise4=new Promise(function(resolve,reject){
setTimeout(function(){
    // let error=true
    let error=false
    if(!error){
        resolve({username:"ishi", password:123})
    }else{
        reject('ERROR: Something went wrong')
    }
},2000)
})

//method to escape from callback hell
//any number of .then and .catch can be used, its not only one .then and .catch
// const username=promise4.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch(function(error){
//     console.log(error)//error comes from the reject
// }).finally(()=> console.log("The promise is either resolved or rejected"))//the value that's returned from the .then() block of the chain at the start is passed on to the next .then() block of the chain  
// console.log(username)//not possible to get the data from the .then by using a variable to store it and then using it  

//so, the chaining of .then can be used so that the data inside it can be obtained 

//if promise is resolved then .then will get the value otherwise .catch will get the value if any error comes 

//promise 5
const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"js",password:123})
        }else{
            reject("ERROR: js went wrong")
        }
    },1000)
})


//promises don't need to be handeled using .then and .catch copulsorily they can be handeled using async and await
//it waits for the work to get completed, if the work gets completed then it  moves fwd otherwise it gives the error then and there only 
//the error doesn't get handled in it gracefully but it's used in the places where the database connection hasn't been established so we don't wanna move fwd 
//that's y we need to use try catch in order to handle the error in it
async function consumepromise5(){
    try{
    const response=await promise5//whatever comes from promise5 either an error or anything, that'll be stored inside response 
    console.log(response)
    }catch(err){
        console.log(err)
    }
}

consumepromise5()
//as promise5 is an object, it can't be completed like this=> promise5()

// async function getallusers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()//if we don't use await in response.json then it'll not get executed, response.json() takes a long time to get exexuted so it also needs to be used with await 
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }

// getallusers()


//same above function using then catch block
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=> console.log(error))

//a fetch promise only rejects when a network error is encountered (usually when there's a permissions issue or similar) it doesn't reject on http errors(404 etc) 
//ie. fetch promise rejects only when the request couldn't be sent by the browser otherwise in case of http requests also it doesn't reject and it's not sent in reject but is sent as a response

//fetch syntax:-fetch(//work,//object)
//the internal mechanism is divided into 2 parts:-
//the work gets completed in 2 parts:- one part goes to reserve space in the memory for the variables and the other part goes for handling the api request of browser/node

//1) reserves space in the memory:- data(any name):- 2 arrays are there: 1) onfulfilled(resolution of promise), 2) onrejection(rejection of the promise)//both of these are arrays, in these arrays it's not allowed to directly push the values, they're outside our range and are the private fields and can't be accessed //data is also a private field
//2)api request of browser/node:- handles web browser based api/node based api: a network request goes via a resource provided by the browser/node js env,we get a network //either the data goes on the network or doesn't go// if any response is received from the network request then it goes in the onfulfilled array(ie. the resolved of the promise) //if the request wasn't able to be sent or it got stuck somewhere at the middle or no response comes then only it goes to the onrejection array (ie. the rejection of the promise)  otherwise the errors also go to the onfulfilled array as it's a response //the data remains reserved in the memory with its initial value as empty //when the work will be done from network request then both of the arrays get the functions and these functions are responsible to  fulfill the empty data, once the data is fulfilled then it's the responsibility of data to fulfill the response that's available in the global memory


