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
    name:"jmkdsfjk",
    email:"anukush@gmail.com",
    password:"343",
    aadharNo:23232323,
    phoneNo:343434343434
   })
  
  
});