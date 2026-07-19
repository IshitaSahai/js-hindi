const score=400//automatically the type has been defined as number 
// console.log(score)

const balance=new Number(100.3498)//especially casted the type as number 
// console.log(balance)

// console.log(typeof (balance.toString()))

// console.log(balance.toString().length)

// console.log(balance.toFixed(2))//to be used while creating ecommerce applications

// const otherNumber=123.8966
// console.log(otherNumber.toPrecision(3))//3 specifies the number of digits on which we are using precision, it'll give precision on those digits and round off other digits 
const otherNumber=1123.8966
// console.log(otherNumber.toPrecision(3))

const hundreds=10000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))

// ***********MATHS***********

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3,4,5,5,6));
console.log(Math.max(4,6,8,8));
console.log(Math.random());//value is between 0 and 1
console.log(Math.random()*10+1)//to be sure that the val will be >1 anyhow to avoid the case of eg:0.00454 
console.log(Math.floor(Math.random()*10)+1)//taking the lower limit

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)//to get the val greater than min (1 has been added to prevent the case same as mentioned in line 32)

