//understanding prototype via examples:-
let myname="ishi      "

// console.log(myname.length)

//we want a property named "truelength" to be there which gives the true length of the string without the extra spaces:-
console.log(myname.truelength)


let myhero=["thor","spiderman"]

let heropower={
    //properties:-key val pairs:-
    thor:"hammer",
    spiderman:"sling",

    //defining methods:-
    getspiderpower: function(){
        console.log(`spidy power is: ${this.spiderman}`)
    }
}

//injecting .ishi method in it using Object so that whenever any object is declared by default that functionality is available with all of those objects
// heropower.ishi()

Object.prototype.ishi=function(){
    console.log("ishi is present in all objects")
}

heropower.ishi()

//as arrays also pass via object parent so this functionality should be available withh arrays also

myhero.ishi()

//now, if anything is injected in the child(eg:array) then does it by default gets added to the object as well(like it happened vice versa rn):-

Array.prototype.heyishi=function(){
    console.log("hello")
}

myhero.heyishi()
// heropower.heyishi()//doesn't have access to the method injected to the 

//conclusion of this injection thing:- the power is shared only with the children if the parent contains that power but if any of the children has any power then it's not shared with its siblings bby default 


//inheritance:-

const user={
    name:"is",
    email:"is@google.com"
}
const teacher={
    makevideo:true
}

const teachingsupport={
    isavailable:false
}

const tasupport={
    makeassignment:"js assignment",
    fulltime:true,
    __proto__:teachingsupport
}

//every object is a new instance and they don't share anything in common except that the default properties are common in all

//if there's any situation in which we need multiple objects to share a same property: eg:- username:"ishi" so we have prototype for that //it can be done inside an object as well as outside it
//this is prototypal inheritance in which we can access the properties of some other object 

teacher.__proto__=user

//modern syntax:-
Object.setPrototypeOf(teachingsupport,teacher)//allowing teachingsupport to access the properties of teacher //Sets the prototype of a specified object o to object proto or null. Returns the object o.//basically teh work of __proto__


let anotherusername="chauco  "

//we needed a method truelength inside the string to pass on the method to all the strings:-
String.prototype.truelength=function(){
    console.log(`${this}`)//anotherusername has reference to chauco//whoever calls the function will be assigned in 'this'
    console.log(`true length is: ${this.trim().length}`)
}

anotherusername.truelength()

"ishi".truelength()
"icetea".truelength()
