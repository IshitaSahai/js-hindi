//as there didn't used to be any classes priviously so they're set using functions only
//function based syntax
function User(email,password){
    this._email=email;
    this._password=password

    //we use the functions get and set as we use it inside the class 
    //as the function is a function as well as an object so we can use the properties of th object here:-defineProperty is a property of getter and setter 
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(val){
            this._email=val
        }
    })//ie. Object.defineProperty(context,property to be overwritten, object in which we can define the properties that we need to have
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(val){
            this._password=val
        }
    })
}

const tea=new User("tea@tea","tea")
console.log(tea.email)


