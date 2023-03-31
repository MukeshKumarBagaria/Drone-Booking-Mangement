import express from 'express';
import {connect} from './config/database.js'
import User from './models/user.js';
const app = express();

app.listen(3000, async () => {
    console.log('server started');
   await connect();
   console.log("database connected successfully")

  
   console.log(user);
});