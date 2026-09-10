//PROTOTYPE IN JS:via this we get access to this keyword, classes, new keyword, and also the prototypal behaviour of js that allows inheritance


//Array-> object->null
//string->object->null
//properties that are in object are available to both strings and arrays //object is the parent and the string and arrays both have its properties//also, object doesn't have any parent, it's parent is null

//the default behaviour of js is prototypal behaviour 
//for searching anything js goes deep into the upper layers and keeps on doing it till it finds a null value and 'this' keyword also works by linking to this behaviour only 


function multiplyby5(num){
    return num*5;
}

// multiplyby5.power=2
// console.log(multiplyby5)
// console.log(multiplyby5.power)
// console.log(multiplyby5.prototype)//by default jo prototype ka context set hota h uss method ka 'this' empty parenthesis k form m mil rha h yha 

//all the properties of prototype along with the context of 'this' is available here in the prototype  

//all object things can be used with everything in js
//function is a function as well as an object //we can make a function an object ie. a function has the behaviour of function but it can also behave as an object as everything in js has its parent as an object so they can behave as an object


//as function is also an object, so if we want we can also insert some functionalities in it as well
//by default we get some functionalities via prototype //in same way we can inject the functionnalities of our own in the prototype of any object



function createuser(username,score){
    this.username=username
    this.score=score
}

createuser.prototype.increment=function(){
    // score++;//if we only write score++ without the use of 'this' then if multiple instances will be calling the same function then it won't get whose value to increase, so in order to let it know whose value to increase, we use 'this' keyword in order to make it understand that 'jisne bhi bulaya h uski value increase kro'=>'this'
    this.score++
}


createuser.prototype.printme=function(){
    console.log(`score: ${this.score}`)
}
const ch=new createuser("ch",25)//new keyword is essential as it tells the function that new properties have been inserted in the function //if the new keyword isn't used then the properties will be injected but the properties won't be added in any object 
//when new keyword is used, the new object is created and then prototype is injected in that object then all the methods are assigned in that as per the function definition

//the prototype is linked to the constructor of the function and the constructor is called and then all the values are linked to the constructor of the function and a new object is returned 
const tea=createuser("tea",250)

ch.printme()


/*
NEW KEYWORD FUNCTIONALITY:-

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

