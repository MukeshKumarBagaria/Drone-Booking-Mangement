import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js'
import apiRoutes from './Routes/index.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(3000, async () => {
    console.log('server started');
   await connect();
   console.log("database connected successfully")
  
  
});


// https//www.gogole.com/api/v1/signup