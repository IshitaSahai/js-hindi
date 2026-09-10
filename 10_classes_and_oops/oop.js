//object in js is the object literal and it's the basic unit

// const user={
    //properties
    // username:"hitesh",
    // logincounnt:8,
    // signedin:true,
    //methods
    // getuserdetails: function(){
        // console.log("got user details from db")
        // console.log(`username: ${this.username}`)//to take the things from the same context 
        // console.log(this)//current context 
    // }
// }

// console.log(user.username)
// console.log(user.getuserdetails())

//this keyword is used to describe the current context 

//in the node env, the global execution context doesn't contain anything but in the browser, the global execution context of the browser contains a window object that's a global object of the browser 




//CONSTRUCTOR FUNCTION
// const promise1=new Promise()//new keyword is a constructor function which allows to create multiple instances from a single object literal, it creates a new context so the previous values don't get overwritten every time it's used for a different purpose 

function user(username,logincount,isloggedin){
    this.username=username//;eft portion is the variable and right is the argument value getting set in it
    this.logincount=logincount
    this.isloggedin=isloggedin

    //methods can also be created 
    this.greeting=function(){
        console.log(`welcome ${this.username}`)
    }//abstraction: user doesn't know how greeting is working internally 
    return this//returning this is an implicit code and it gets returned automatically either we return it or not but it's a good practice to write it 
}

const user1=new user("ishi",11,true)//encapsulation

const user2=new user("ishii",12,false)//encapsulation

// console.log(user1)

//constructor function gives a new instance each time and whatever we write in that is up to us

//when a new keyword is used:- 1) first of all an empty object is created that's k/a an instance/object
//2) a constructor function is called, all the arguments are packed in it
//3) all the arguments are injected in 'this' keyword
//4) we get all of them in the function


console.log(user1.constructor)//constructor property is a reference about the itself ie. [Function: user] here which indicates the reference of the self 
console.log(user2.constructor)

