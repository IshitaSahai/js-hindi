const obj={
    js:'javascript',
    cpp:'c++'
}

for (const key in obj) {
    // console.log(key)//prints all keys 
    // console.log(obj[key])//prints all the values of the obj
    console.log(`${key}:${obj[key]}`)
}

//for in loop on arrays

const prog=['js','rb']

for (const key in prog) {//drawback of for in: it gives keys by default and not the value 
    // console.log(key)//key by default starts from 0 and goes on like the index in an array 
    console.log(prog[key])
}

const map=new Map()
map.set('IN','India')
map.set('fr','france')
map.set('IN','India')
//map is not iterable using for in loop that's y nothing is printed when we try to iterate it and print its keys/values
