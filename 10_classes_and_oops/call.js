//when a function has another function call inside it then the problem arrises when this keyword is used inside the function as a confusion arrises that 'this' will now point to the inner function call or the outer function, in such a case, 'this' points to the global execution context and it's still a problem that exists in js
//eg:-
function setusername(username){
    //complex calculation DB calls
    this.username=username
    console.log("called")
}

function createuser(username,email,password){
    setusername(username)//the method is called using this function as well but the values aren't assigned in it and as soon as the function call gets complete, the function is removed from the call stack and all of the variables that are set/declared in it are disappeared //so we don't just need to let the variables disappear, we need to store the reference somewhere //if we simply try to call the function using this then it's not called only the reference is passed, in order to call it explicitly, we need to use .call
    setusername.call(this,username)//we can pass the context of the current function by passing this as the first parameter in the function call so that even if it disappears from the call stack, the username that it sets is available in the context of the present function //if we call using (this,username) then all the parameters are set in the context of the present function 
    this.email=email
    this.password=password
}

const ch=new createuser("ishita","ishita@fb.com",123)
console.log(ch)

//.call passes the current execution context in some other function by using 'this' keyword in the function call of the other function that's done using .call so that whatever is set in that other function is assigned in the current execution context instead of disappearing 