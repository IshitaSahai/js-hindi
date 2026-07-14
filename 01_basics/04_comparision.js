// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

//comparisions with different datatypes shouldn't be done
// console.log("2">1)//datatype should be same
// console.log("02">1)//if datatype is different then the result isn't predictable 

// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)
// == works differently and > >= < <= work differently, so in null>=0 null is converted  to a number 0 but in others it converts to a different form giving an unpredicted behaviour 

// console.log(undefined==0)
// console.log(undefined>0)
// console.log(undefined<0)
// console.log(undefined>=0)
//all give false 

// equality(==,===) and comparision check(>,<,<=,>=) have different methods of working 

// strict check
console.log("2"===2)//checks the datatype of the value as well
