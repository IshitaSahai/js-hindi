const name="ishi"
const repocount=12

// console.log(name+repocount+"value")

console.log(`Hello my name is ${name} and my repocount is ${repocount}`)//better syntax 

//one more way to declare a string
const gameName=new String('ishi-hc')//string is an object here and not a normal string 

console.log(gameName[0])
console.log(gameName.__proto__)//way to access prototype method
console.log(gameName.length)
console.log(gameName.toUpperCase())//original string isn't changed as Primitive values are copied when assigned or passed to functions.
console.log(gameName.charAt(2))

console.log(gameName.indexOf('t'))

const newString=gameName.substring(0,4);//substring from index 0 to 3 
console.log(newString)

// const anotherString=gameName.slice(0,4)

// const anotherString=gameName.slice(-8,4)//it starts from the index=> len of string+(-ve idx written) ie. 7+(-8)=-1 as it's<0 it'll start from 0 otherwise it would've started from the index that'll be given as an output of 7+(-ve idx written)

// console.log(anotherString)

const anotherString=gameName.substring(-8,4)//substring doesn't obey the neggative indexing it always starts from 0 irrespective of the negative index that's written //we can't use -ve values in .substring function 

console.log(anotherString)

// const anotherString=gameNameSecurityPolicyViolationEvent(-8,0)

const newString1="    ishi     "
console.log(newString1)
console.log(newString1.trim())//removes starting and ending spaces as well as new line character

const url="https://ishi.com//ishi%20sahai"

console.log(url.replace('%20','-'))
console.log(url.includes('ishi'))
console.log(url.includes('sundar'))

//splitting string in array based on something(here -)
console.log(gameName.split('-'))

