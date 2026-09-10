class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username);//automatically looks which class is being extended then it'll look for constructor in that class and then the username will be set in that class and its access is also in this class too
        this.email=email
        this.password=password
    }

    addcourse(){
        console.log(`${this.username} added the course`)
    }
}


const teach=new teacher("teacher","teacher@gmail.com","123")//constructor teacher cannot be invoked without new keyword 

teach.addcourse()

const tea=new user("user")

// tea.addcourse()//doesn't have access to addcourse

tea.logme()
teach.logme()//child has access to parents' properties and methods but the parent doesn't have 

console.log(teach==tea)

console.log(teach===teacher)
console.log(teach instanceof teacher)
console.log(teach instanceof user)
