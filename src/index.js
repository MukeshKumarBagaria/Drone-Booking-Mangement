import express from 'express';
import {connect} from './config/database.js'
import UserService from './services/user-service.js'
const app = express();

app.listen(3000, async () => {
    console.log('server started');
   await connect();
   console.log("database connected successfully")


   const userService=new UserService();
   userService.create({
    name:"adfsgh",
    email:"anusfdhgkush@gmail.com",
    password:"3e4r43",
    aadharNo:2323345232456783,
    phoneNo:3433456434343434
   });
    userService.destroy('642aa9c7e8e42a1a8bad4f3d');

});