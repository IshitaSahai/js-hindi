//E6 
//no need to create object then function //we can directly use class and then add properties and functions in it
// class user{
//     //as soon as the new keyword is used, the constructor gets called automatically 
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     //method definition inside a class:-
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userr=new user("user","user@gmail.com", "123")

// console.log(userr.encryptPassword())
// console.log(userr.changeusername())

//behind the scenes
function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

user.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

user.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}


const userr=new user("tea","tea@gmail.com", "123")

console.log(userr.encryptPassword())
console.log(userr.changeusername())
