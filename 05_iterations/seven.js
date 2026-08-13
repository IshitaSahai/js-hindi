const mynums=[1,2,3,4,5,6,7,8,9,10]
//map is also a callback function 
// const newnums=mynums.map((num)=> num+10)
//using foreach
// mynums.forEach((num)=>{
//     console.log(num+10)
// })

//chaining:using any number of methods directly one after other
const newnums=mynums
            .map((num)=>num*10)
            .map((num)=>num+1)//map performs the operation on all elements of the array and returns them all unlike filter that only returns the elements that follow some specific condition 
            .filter((num)=>num>=40)//whatever will be the result of the previous method that'll be passed in the next method
console.log(newnums)

