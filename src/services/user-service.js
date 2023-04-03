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
    async destroy(id) {
        try {
            const user = await this.userRepository.destroy(id);
            return user;
        } catch (error) {
            console.log("error while deleting user in user-service layer", error)
        }

    }
    async get(id) {
        try {
            const user = await this.userRepository.get(id);
            return user;
        } catch (error) {
            console.log("error while getting user in user-service layer", error)
        }

    }
    async update(data,id) {
        try {
            const user = await this.userRepository.update(id, data, { new: true });
            return user;
        } catch (error) {
            console.log("error while updating user in user-service layer", error)
        }

    }
}

export default UserService;