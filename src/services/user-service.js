import UserRepository from '../repository/user-repository.js'

class UserService{

    constructor(){
        this.userRepository= new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("error while creating user in user-service layer",error)
        }
       
    }

}

export default UserService;