//for
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
}

// for (let i = 1; i <=10; i++) {
    // console.log(`outer loop ${i}`)
    // for (let j = 1; j <=10; j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`)
        // console.log(i+"*"+j+"="+i*j);
//     }
// }

let myarray=["one","two","three"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    // console.log(element)
}

//break and continue

for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log(`detected 5`)
        break;
    }
    console.log(`val of i is ${i}`)
}
for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log(`detected 5`)
        continue;//skip rest of the loop 
    }
    console.log(`val of i is ${i}`)
}