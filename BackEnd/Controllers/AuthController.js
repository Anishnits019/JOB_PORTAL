import redis from '../config/redis.js';
import transporter from '../config/nodemailer.js';
import verifyModel from '../Models/CompanyVerify.js';
import bcrypt from 'bcrypt'
import companyModel from'../Models/Company.js'
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken'
export const employerLogin=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json({succes:'false',message:'Please fill the required details'})
    }
    try{
    const company=await companyModel.findOne({email});
    if(!company){
         return res.json({succes:'false',message:'User did not exist'})
    }

       const ispasswordMatch=await bcrypt.compare(password,company.password);

       if(!ispasswordMatch){
         return res.json({succes:'false',message:'password is wrong'})
       }
  
       const token=jwt.sign({id:company._id},process.env.JWT_SECRET_KEY,{expiresIn:'7d'});

     res.cookie('token', token, {
     httpOnly: true,
     sameSite: 'lax', 
     secure: false, 
     maxAge: 24 * 60 * 60 * 1000
     });
       return res.json({
        success:true,
         token:token
      })
      
    }catch(error){
        return res.json({succes:'false',err:error.message})
    }

}
export const logout=async(req,res)=>{
    try{
        res.clearCookie('token',{
            httpOnly:true,
            secure:"lax",
            sameSite:"true",
        })
        return res.json({sucess:true,message:'Logged Out'})
    }
    catch(error){
                res.json({success:false,message:'Missing Details'})

        }
}
export const sendVerifyOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: 'Email is required' });

    const cleanEmail = email.toLowerCase().trim();

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const sessionId = uuidv4();
  
      await redis.hset(`user-session:${sessionId}`, {
      email: cleanEmail,
      otp,
      verified: 'false',
      otpSentAt: new Date().toISOString(),
    });

    await redis.expire(`user-session:${sessionId}`, 3600);

    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: 'Verify Your Email',
      html: `<p>Your OTP is <strong>${otp}</strong>. It will expire in 5 minutes.</p>`,
    });

      return res.json({ 
        success: true, 
        sessionId,
        message: 'OTP sent successfully',
        nextStep: `/otp-verify?sessionId=${sessionId}` 
      });
  } catch (err) {
    console.error('Send OTP Error:', err);
    return res.status(500).json({ success: false, message: err.message });
  }
}
export const verifyEmail = async (req, res) => {
  try {
    // Use req.body if validatedData is not available
    const { email, otp } = req.validatedData || req.body;
    const {sessionId} =req.body
    console.log(email)
    console.log(otp)
    console.log(sessionId)
    
    if (!otp || !email || !sessionId) {  // Added sessionId check
      return res.status(400).json({ success: false, message: 'Email, OTP, and Session ID are required' });
    }

    const cleanOtp = otp.toString().trim(); // Ensure OTP is string and trimmed

    const storedOTP = await redis.hget(`user-session:${sessionId}`, 'otp');
    
    console.log('Stored OTP:', storedOTP, "(Type:", typeof storedOTP + ")");

    if (!storedOTP) {
      return res.status(404).json({ 
        success: false, 
        message: 'OTP expired or not found' 
      });
    }

    // Compare strictly (both should be strings)
    if (storedOTP.toString().trim() !== cleanOtp) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid OTP' 
      });
    }

    // Delete the correct key (user-session instead of otp)
    await redis.hdel(`user-session:${sessionId}`,'otp');  // Fixed key

    return res.json({ 
      success: true, 
      message: 'OTP verified successfully',
      nextStep: `/set-password?sessionId=${sessionId}` 
    });
  } catch (err) {
    console.error('Verify OTP Error:', err);
    return res.status(500).json({ success: false, message: err.message });
  }
};
export const setPassword = async (req, res) => {
  try {
    const { email, password } = req.validatedData || req.body;
    const {sessionId} =req.body
    if (!email || !password || !sessionId) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    // Check if user exists (optional, if you track users in Redis)
    const userExists = await redis.exists(`user-session:${sessionId}`);
    if (!userExists) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found. Verify email first.' 
      });
    }

    // Check if password already set
    const currentPassword = await redis.hget(`user-session:${sessionId}`, 'password');
    if (currentPassword) {
      return res.status(400).json({ 
        success: false, 
        message: 'Password already set' 
      });
    }

    // Hash and store password
    const hashedPassword = await bcrypt.hash(password, 10);
    await redis.hset(`user-session:${sessionId}`, {
      password: hashedPassword,
      passwordSet: 'true',
      updatedAt: new Date().toISOString(),
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Password set successfully',
      nextStep: `/verify-company?sessionId=${sessionId}` 

    });
  } catch (err) {
    console.error('SetPassword Error:', err);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
};
export const AuthState = async (req, res) => {
  try {
    const company = await companyModel.findById(req.company.companyId)
      .select('name email isVerified');
    
    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found' });
    }

    res.json({ success: true, company });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};



