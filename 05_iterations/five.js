//arrays: for of, objects: for in
//for each loop
const coding=['js','rb','java']
//for each loop is a higher order function 
//as it expects a callback function, it won't be having any name and since it's written inside an array so the values of the array will be passed as a parameter in it
// coding.forEach(function (val) {
//     console.log(val)    
// });
//writing using an arrow function
// coding.forEach((item)=>{
//     console.log(item)
// })
//passing a function inside foreach
// function print(item){
//     console.log(item)
// }
// coding.forEach(print)
//foreach has access to 3 parameters 
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

//array with objects:-
const mycoding=[
    {
        languagename:"js",
        languagefile:"js"
    },
    {
        languagename:"java",
        languagefile:"java"
    }
]
mycoding.forEach((item)=>{
    console.log(item.languagefile)
})

