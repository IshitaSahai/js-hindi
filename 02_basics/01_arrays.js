//arrays

const myArr=[0,1,2,3,4,5]//object //resizable and can be a mix of datatypes 

console.log(myArr[0])
//array copy operations create shallow copies(ie. the copies don't have a same reference point) rather tha deep copies(ie. the copies that don't share the same reference point as the original array)
const myHeros=["shaktimman","naagraj"]
const myArr2=new Array(1,2,3,4)


//array methods

myArr.push(6)
console.log(myArr)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)
 
myArr.unshift(0)//gets added to the start of array 
console.log(myArr)
myArr.shift()//pops the value at the start of the array 
console.log(myArr)
console.log(myArr.includes(9))
console.log(myArr.indexOf(3))
const newArr=myArr.join()//Adds all the elements of an array into a string, separated by the specified separator string.If omitted, the array elements are separated with a comma.
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice, splice

console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr)

const myn2=myArr.splice(1,3)//in splice the original array gets manipulated ie. the portion of the array that's spliced gets removed from the original array and only the remaining elements are left in the array. Also, the last element in the range is also included in the spliced elements and it's also removed along with other spliced elements in the range  
console.log("C ",myArr)
console.log(myn2)
