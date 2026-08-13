//reduce method 
const nums=[1,2,3]

//reduce function has access to an accumulator and the current value of the array 

// const total=nums.reduce(function (acc,currval){
//     console.log(acc,currval)
//     return acc+currval//every returned value is passed to the accumulator, the initial value of the accumulator is only used once at the start 
// },0)//the value after the function scope tells the initial value from which we need to initialize the value of the accumulator

//using arrow function:-
const total=nums.reduce((acc,curr)=>acc+curr,0)
console.log(total)

const shoppingcart=[
    {
        itemname:"js",
        price:3000
    },
    {
        itemname:"python",
        price:4939
    },
    {
        itemname:"mobile dev",
        price:5000
    },
    {
        itemname:"data science",
        price:12000
    }
]

const totalval=shoppingcart.reduce((acc,item)=>(acc+item.price),0)
console.log(totalval)
