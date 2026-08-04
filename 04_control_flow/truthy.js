//truthy falsy values: values that are by default assumed to be true or false 
const user="i@ishi.ai"
if(user){
    console.log("user email")
}else{
    console.log("no user email")
}
//non empty str is assumed to be true
//empty str is assumed to be false
//empty array is assumed to be true
//falsy values: false, 0, -0, BigInt 0n,"", null, undefined, NaN
//truthy values: "0",  'false', " ", [], {}, function(){}
//checking array
const user1=[]
if(user1.length===0){
    console.log("array is empty")
}
const emptyobj={}
if(Object.keys(emptyobj).length===0){//Object.keys(objname) gives an array of keys 
    console.log("obj is empty")
}
//false==0//true
//false==''//true
//0==''//true

//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1=5 ?? 10//1st val is assigned
// val1=null??10//if val is null then assign a value to it instead of null//here 2nd val
// val1=undefined??15//same as above 
//if multiple functions are used for assigining a value to a variable then the function that will return the value at the first will be assigned in the variable ie.
val1=null?? 10??15 
console.log(val1)

//ternary operator
// condition?true:false
const icetea=100
icetea>=80?console.log(">=80"):console.log("<80")
