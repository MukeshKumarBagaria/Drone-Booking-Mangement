import User from "../models/user.js";

class UserRepository {

    async create(data) {
        try {
            const user = User.create(data);
            return user;
        } catch (error) {
            console.log("error while creating user in user repo", error);
            throw error;
        }
    }

    async destroy(id) {
        try {
            const user = User.findByIdAndRemove(id);
            return user;
        } catch (error) {
            console.log("error while deleting user in user repo", error);
            throw error;
        }
    }

    async get(id) {
        try {
            const user = User.findById(id);
            return user;
        } catch (error) {
            console.log("error while getting user in user repo", error);
            throw error;
        }
    }

    async update(id,data){
        try {
            const user=User.findByIdAndUpdate(id,data,{new:true});
            return user;
        } catch (error) {
            console.log("error while updating user in user repo", error);

        }
    }

}

export default UserRepository; 