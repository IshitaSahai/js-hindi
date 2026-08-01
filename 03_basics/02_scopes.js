// let a=10
// const b=20
// var c=30

var c=300//gets overwritten even if its value is changes inside of the if block 
let a=400

//curly braces define the scope but not when they're used with the objects
if(true){
    let a=10
    const b=20
    var c=30//gives 30 even out of the if block
    c=30//gives 30 even out of the if block
    // console.log("inner: ",a)
}

// console.log(a)
// console.log(b)
// console.log(c)

// for(let i=0;i<a.length;i++){
//     const el=a[i]
// } 

function one(){
    const username="ishita"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)//error as website has a scope only inside the function two 

    // two()
}

one()

if(true){
    const username="ishita"
    if(username=="ishita"){
        const website=" youtube"
        // console.log(username+website)
    }
    // console.log(website)
}

// console.log(username)

// +++++++interesting++++++

addone(5)//no error
function addone(num){
    return num+1
}

addone(5)//no error

addTwo(5)//error
const addTwo=function(num){//variable holding a function 
    return num+2
}

// addTwo(5)//no error