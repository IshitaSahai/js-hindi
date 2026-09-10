class User{
    //email and _email are different
    constructor(email,pass){
        this.email=email
        this.pass=pass
    }

    //_email is a private property that only we can access inside our class we're giving it outside by our own choice only and this is also a new syntax of using them otherwise previously we used to use the properties in order to make things private 
    get email(){
        return this._email.toUpperCase()//return always has to be there in getters even though it's an empty value 
    }

    set email(val){
        this._email=val//return statement is never used for setters
    }
    //jitne bhi properties hm bnate h unke names as getters adn setters bn jaate h automatically:-
    get pass(){//the name of the getter and setter should be the same as that of the property
        //if someone is trying to access the value of password then he'll get the value of password in uppercase as it's been changed here 
        // return this._pass.toUpperCase()//now the constructor is setting the value of email and not the password as we hv overwritten it totally

        return `${this._pass}ishi`
    }
    //if there's no setter and only the getter then it'll give error as if we make any one of them the other one also needs to be there
    //without the setter the values that we try to set outside of the function won't be able to set in the variables and will give the error

    //if we use both the constructor and set altogehter then it'll give error as both of them try to set the password and there'll be a sort of race between them and the error will be there ie. the maximum call stack size exceeded 
    set pass(val){
        //we make a completely new value of password as now the val of properties is set using getter and setter and not the constructor 
        this._pass=val//here just the value of pass has been saved in the db 
    }
}

// const user=new User("ishi@ai","123")
const user=new User("ishi@ai","abc")

console.log(user.pass)
//there're many cases in which we don't wanna tell the password or we wanna return the encrypted password //there're many cases in which we've made a class and hv the properties and methods in that but we don't wanna give the access to all or if we give the access then we wanna do some customised code in that in those cases getters and setters come into use
//eg: if we don't wanna give the access of password to anyone then we can use getters and setters for that 
//we can put getters and setters on any of the variables and properties of the class 

console.log(user.email)
