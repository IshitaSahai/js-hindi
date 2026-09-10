//object based syntax:-
const user={
    //underscore shows that we're defining a private property that's not in the use of the normal users 
    _email:'h@hc.com',
    _password:"abc",

    //as we don't want our properties to be accessible to everyone so we should define getters and setters 
    get email(){
        return this._email.toUpperCase()
    },

    set email(val){
        this._email=val
    }
}



//we can use factory function here 
const tea=Object.create(user)//it means create an object on the base of the user and refer it in tea

console.log(tea.email)//email is a method but as it's a getter/setter so it doesn't let an object remain as an object it says that getters and setters are special methods that i'm keeping above the properties 

