import  express from "express";
import { createUser } from "../../controllers/auth-controller.js";


const router=express.Router();

router.post('/signup',createUser)

export default router;
