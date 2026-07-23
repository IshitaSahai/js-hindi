//objects declaration using constructors:singleton objects

const tinderUser=new Object()//singleton object:using constructors  

// const tinderUser={}//non singleton object:using literals

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ishita",
            lastname:"sahai"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)
//optional nesting:done usually during api calls by checking if the value exists//eg:-
// console.log(regularUser.fullname?.userfullname.firstname)

const obj1={1:"a",2:"b"}//can be used to get object methods by executing in console 
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
// console.log(obj3)//doesn't merge both objects but puts both the objects in a new object obj3

// const obj3=Object.assign(obj1,obj2)//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.//here obj1==obj3

// const obj3=Object.assign({},obj1,obj2)//{} acts as a target to copy everything from the source objects//there can be multiple objects to be merged so this syntax is better as all get merged to a new object otherwise if all are written without {} then the 1st obj will act as the target and all others will  act as the source objects 
// console.log(obj3);

//syntax that will be used most:-
const obj3={...obj1,...obj2}
console.log(obj3)

//when the values willl come from database as an array of objects(generally)
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    },
    {

    }
]

console.log(users[0].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser))//Returns the names of the enumerable string properties and methods of an object.//returns an array containing the keys of the object specified in the brackets 

console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))//array of arrays containing the keys as the first value and the values as the second values in the nested array 

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//to  be used when we need to access a value from the object for which we aren't sure if it exists or not 

console.log(tinderUser.hasOwnProperty('isLogged'));

//destructing objects:-
const course={
    coursename:"js",
    price:"999",
    courseInstructor:"h"
}

//in order to extract value from course 

//normal syntax:
// console.log(course.courseInstructor)

//general syntax:-curly braces=>destructuring 
const {courseInstructor}=course
const {courseInstructor:instructor}=course

console.log(courseInstructor)
console.log(instructor)

//json:-
// {
//     "name":"is",
//     "courseName":"js",
//     "price":"free"
// }

//APIs in the form of an array 
[
    {},
    {},
    {}
]

//  {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }