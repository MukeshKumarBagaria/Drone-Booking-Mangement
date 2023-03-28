import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
},
aadharNo:{
    type:Number,
    required:true
},
phoneNo:{
    type:Number,
    required:true
}
},{timestamps: true})

const User= mongoose.model("User",userSchema);

export default User;