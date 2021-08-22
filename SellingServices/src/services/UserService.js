export default class UserService {
    constructor(){
        this.users = []
    }
    
    add(user){
        if (typeof(user)=="object") {
            this.users.push(user)
        }
    }

    list(){
        return this.users
    }

    remove(user){
        for(let i = 0;i<this.users.length;i++){
            if (user.id === this.users[i].id) {
                this.users.splice(i,1)
            }
        }
    }
}