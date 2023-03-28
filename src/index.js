import express from 'express';
import {connect} from './config/database.js'
import User from './models/user.js';
const app = express();

app.listen(3000, async () => {
    console.log('server started');
   await connect();
   console.log("database connected successfully")

   const user = await User.create({
    name:"ankush",
    email:"ankuesh@gmail.com",
    aadharNo:232323232323,
    phoneNo:2323232323
   })

});