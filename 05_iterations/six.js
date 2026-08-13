const coding=['js','rb','java']

//for each loop doesn't return any value that's y the o/p of console.log(values) is undefined and only the value is printed for the print statement inside the function
// const values=coding.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(values)

const nums=[1,2,3,4,5,6]
//filter function returns the values unlike foreach//filter function also takes a callback function 
//in the callback function of filter, each value is accessed and a condition has to be applied based on which the values will be returned 
// const newnums=nums.filter((num)=>num>4)//parenthesis will return the value by default implicitly//arrow function which has a single line 
// const newnums=nums.filter((num)=>{
    // num>4//if a scope is started using curly braces then the value isn't returned implicitly, return statement has to be used in order to return the value 
//     return num>4
// })
// console.log(newnums)

//adding conditions in foreach loop
// const newnums=[]
// nums.forEach((num)=> {
//     if(num>4){//as it doesn't return anything so 'if' statement has to be used 
//         newnums.push(num)
//     }
// })
// console.log(newnums)

//filter examples
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userbooks=books.filter((book)=> book.genre==='History')
let userbooks=books.filter((book)=> {
    return book.publish>=2000 && book.genre==='History'
    }
)
//or
userbooks=books.filter((book)=> book.publish>=2000 && book.genre==='History')
console.log(userbooks)

