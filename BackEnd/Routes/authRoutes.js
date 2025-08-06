import express from 'express'
import{
    employerLogin,
    employerLogout,
    sendVerifyOtp,
    verifyEmail,
    setPassword,
    AuthState
    } from '../Controllers/AuthController.js'
import {email_validation,company_validation,
password_validation,otp_validation} from '../Middleware/validation.js'
import { protectCompany } from '../Middleware/company_middleware.js';

const authRouter=express.Router()
authRouter.post('/employeer-login',employerLogin)
authRouter.post('/employeer-logout',employerLogout);
authRouter.post('/send-verify-otp',email_validation,sendVerifyOtp);
authRouter.post('/verify-email',otp_validation,verifyEmail);
authRouter.post('/set-password',password_validation,setPassword)
authRouter.get('/check-auth',protectCompany,AuthState)

export default authRouter

