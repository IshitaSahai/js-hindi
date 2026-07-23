//Dates

let myDate=new Date();
console.log(myDate.toString())//Mon Jul 20 2026 06:22:03 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())//Mon Jul 20 2026
console.log(myDate.toISOString())//2026-07-20T06:22:03.017Z
console.log(myDate.toLocaleString())//7/20/2026, 6:22:03 AM
console.log(myDate.toLocaleDateString())//7/20/2026
console.log(myDate.toLocaleTimeString())//6:22:03 AM
console.log(myDate.toTimeString());//06:22:03 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toJSON())//2026-07-20T06:22:03.017Z
console.log(typeof myDate)

// let myCreatedDate=new Date(2023,0,23)//months start from 0 in js if declaring it in a single digit as it's in an array 

// let myCreatedDate=new Date(2023,0,23,5,3)//to get date along with time ie. 5:03:00 AM 
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())
// let myCreatedDate=new Date("2023-01-14")
let myCreatedDate=new Date("01-14-2023")//mm:dd:yy
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp);//milliseconsds value from 1st jan 1970 till now 

console.log(myCreatedDate.getTime())//converts to milliseconds 
console.log(Math.floor(Date.now()/1000))//converting milliseconds to seconds without deccimal values

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())//will return the month number starting from 0
console.log(newDate.getMonth()+1)//in order to get the minth number starting from 1 
console.log(newDate.getDay())//returns day number starting from 1=monday

// `${newDate.getDay()} and the time is `

newDate.toLocaleString('default',{
    weekday: "long",
})//we define an object under this method and that too with many parameters 