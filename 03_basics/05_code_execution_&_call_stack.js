//javascript execution context:- how will js run the whatever file we've created-
//the file is run/executed by js in 2 phases 
//whenever a code file is given to js, first of all the global execution context is made and it's kept inside the variable "this" ie. CODE->GLOBAL EC(this keyword contains it) 
//value of "this" inside the browser is a "window object"
//everything in js is executed inside a single thread:-
//3 types of execution contexts:-
//global execution context 
//functional execution context 
//eval execution context:property of global obj

//2 phases of js in which the code runs/executes:-1) memory creation phase/creation phase: only the memory space is allocated for the variables that are declared they're not executed 2) execution phase: execution work takes place 
//eg:-
let val1=10
let val2=5
function add(num1,num2){
    let total=num1+num2
    return total
}
let result1=add(val1,val2)
let result2=add(10,2)
//step1: global execution context: all the code runs via global execution and is allocated in 'this' keyword 
//step2:- 2 phases: memory phase: all variables are gathered and allocated space in the memory eg of line by line execution:
//1) memory phase 
// val1->undefined, val2->undefined 
//add->fn definition
//result1->undefined
//result2->undefined
//2)execution phase 
//val1<-10
//val2<-5
//line 48-nothing happnes in add fn as there's nothing to execute and fn definition has already been assigned in memory phase 
//add creates its own execution context which consists of a new variable environment + an execution thread 
//memory and execution phase will be made every no. of times the function is made:-
//memory phase: val1->undefined, val2->undefined,
// total->undefined 
//execution context: num1<-10, num2<-5, total<-15 
//total is returned to the global execution context 
//the execution context gets deleted after its work is done
//after that the value is assigned to the variable result1 then the same process gets repeated for result2 function call as well

//call stack:contains global execution context at first then the functions that are called come in it and go out of call stack as soon as it gets executed  