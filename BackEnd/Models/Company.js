import mongoose from 'mongoose'

const companyModel=mongoose.model('Company',new mongoose.Schema(
{
    name:{
        type:String
    },
    email:{
    type:String,
    required:[true,'email is required'],
    match:[/^[A-za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/]
    },
    password: {
  type: String,
  required: [true, 'Password is required'],
  minlength: [8, 'Password must be at least 8 characters long'],
  maxlength: [128, 'Password must be at most 128 characters long'],
  validate: {
    validator: function (value) {
      if (!/[A-Z]/.test(value)) {
        throw new Error('Password must contain at least one uppercase letter');
      }
      if (!/[a-z]/.test(value)) {
        throw new Error('Password must contain at least one lowercase letter');
      }
      if (!/[0-9]/.test(value)) {
        throw new Error('Password must contain at least one digit');
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        throw new Error('Password must contain at least one special character');
      }
      return true;
    },
  },
    },
    CIN:{
      type:String,
      required:[true,'CIN no is required'],
      match:[/^[A-Z0-9]+$/]  
    },
    PAN:{
      type:String,
      required:[true,'PAN no is required'],
      match:[/^[A-Z]{5}[0-9]{4}[A-Z]$/] 
    },
    isVerified: {
    type: Boolean,
    default: false,
    }

}));

export  default companyModel

