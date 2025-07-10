import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    _id:{type:String, required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    password:{type:String,required:true,unique:true}

})
const userModel=mongoose.model('user',userSchema);
export default userModel