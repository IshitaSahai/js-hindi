class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`${this.username} is username`)
    }

    //adding unique id to the user as soon as it's created 
    //in the situations where we don't wanna give the access of this method to all the objects that have been instantiated from this class : done using static keyword 
    static createid(){
        return `123`
    }
}

const ishi=new user("ishi")
// console.log(ishi.createid())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new teacher("iphone","iphone@phone.com")

iphone.logme()
console.log(iphone.createid())//when a function is declared as static, even the instance of the child of the class that has the static function doesn't get access to that static method 



