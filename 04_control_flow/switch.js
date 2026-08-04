//when a value of a single variable is to be checked multiple times 
// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }

const month=4
switch(month){
    case 1:
        console.log("jan")
        break;

    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("mar")
        break;
    default:
        console.log("default");
        break;
}
//if break isn't used then after the case in which the condition is met the whole code gets executed except the default case ie. from the case which matches the condition till all the conditions except the default condition
//if a string or any other datatype val has to be matched then string values can also be used in switch case statements in order to match it

 