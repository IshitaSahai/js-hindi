const descripter=Object.getOwnPropertyDescriptor(Math,"PI")//2nd arg is the key for which we need to see the value //tells abt some of the hidden things of the object 
// console.log(Math.PI)

// Math.PI=5
// console.log(Math.PI)//remains same doesn't get overwritten

console.log(descripter)
//{
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
//this way we can also define our own hardcoded values so that if someone uses our library/framework then we can give the hardcoded values that they can never change

//ways of creating an object

// const myobj=Object.create(null)

const tea={
    name:'ginger',
    price:250,
    isavailable:true,

    orderctea:function(){
        console.log("code ft gya")
    }
}

console.log(tea)

console.log(Object.getOwnPropertyDescriptor(tea))//undefined as we're not passing the property of which we need the description

console.log(Object.getOwnPropertyDescriptor(tea,"name"))

//changing the properties as per our preference 
Object.defineProperty(tea,'name',{
    // writable: false,
  enumerable: false//now loop can't be used over it//some of the properties may not become the part of the loop 
})

// console.log(Object.getOwnPropertyDescriptor(tea,"name"))

for (let [key,val] of Object.entries(tea)) {
    if(typeof val!=='function'){
    console.log(`${key} ${val}`) 
    }
}//tea isn't iterable as it is an object and the iterability of an object depends upon the situation so we should use Object.entries(tea) in order to iterate it by default 