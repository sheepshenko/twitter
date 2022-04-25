const User = require("./../models/User")

class UserService{

    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user){
        return Object.values(user)
    }

    static updateUsername(user, newusername){
        user.setUsername = newusername
    }
}


module.exports = UserService