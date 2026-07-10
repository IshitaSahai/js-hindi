const accountId=1443//this value can't be changed

//2 ways to declare variables:-let, var
//let-resolves the problem of scope 
//var-has the problem of scope, if changed anywhere in the code the value gets changed everywhere else in the code as well
let accountEmail="ishi@google.com"
var accountPassword="1233"
accountCity="jaipur"
let accountState//if not assigned any value then it's undefined 
console.log(accountState)
// accountId=2//not allowed

accountEmail="hc@hc.com"
accountPassword="2424123"
accountCity="bengaluru"
console.log(accountId);


/*
prefer not to use var bcoz of issue in block scope and functional scope
*/
// console.table([accountEmail,accountId,accountPassword,accountCity]) 