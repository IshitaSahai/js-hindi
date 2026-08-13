//array specific loops:-
//for of

// ["","",""]
// [{},{},{}]
const arr=[1,2,3,4,5]

// for (const element of object) {//object here doesn't mean js object//it means that the loop works on any iterable thing which is refered to as object 
    
// }

for (const num of arr) {
    console.log(num)
}

const greet="hello"
for (const greeting of greet) {
    console.log(greeting)
} 

const map=new Map()
map.set('IN','India')
map.set('fr','france')
map.set('IN','India')
// console.log(map)//contains unique elements

//for of loop on maps
for (const key of map) {
    console.log(key)
}//gives key val pairs in the form of arrays

for (const [key,val] of map) {
    console.log(key,':-',val)
}//destructuring array 

const myobj={
    'game1':'nfs',
    'game2':'spiderman'
}

// for (const [key,val] of myobj) {
//     console.log(key,':-',val)
// }//it doesn't work for maps




