import express from 'express'
import{
    sendVerifyOtp,
    verifyEmail,
    setPassword,
    AuthState
    } from '../Controllers/AuthController.js'
import {email_validation,company_validation,
password_validation,otp_validation} from '../Middleware/validation.js'
import { protectCompany } from '../Middleware/company_middleware.js';

const authRouter=express.Router()

authRouter.post('/send-verify-otp',email_validation,sendVerifyOtp);
authRouter.post('/verify-email',otp_validation,verifyEmail);
authRouter.post('/set-password',password_validation,setPassword)
authRouter.get('/get-company',protectCompany,AuthState)

export default authRouter

