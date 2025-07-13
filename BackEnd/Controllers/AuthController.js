import redis from '../config/redis.js';
import transporter from '../config/nodemailer.js';
import verifyModel from '../Models/CompanyVerify.js';
import bcrypt from 'bcrypt'
import companyModel from'../Models/Company.js'
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
        company:{
            _id:company._id,
            name:company.name,
            email:company.email,
            image:company.image,
        }
      })
      
    }catch(error){
        return res.json({succes:'false',message:error.message})
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

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    
    // Get existing data first
      await redis.set(`otp:${email}`, otp, { ex: 300 }); // 5 minutes

    // Email sending remains same
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: 'Verify Your Email',
      html: `<p>Your OTP is <strong>${otp}</strong>. It will expire in 5 minutes.</p>`,
    });

      return res.json({ 
        success: true, 
        message: 'OTP sent successfully',
        nextStep: '/otp-verify' 
      });
  } catch (err) {
    console.error('Send OTP Error:', err);
    return res.status(500).json({ success: false, message: err.message });
  }
}
export const verifyEmail = async (req, res) => {
  const {email,otp}=req.validatedData

  if (!otp || !email ) return res.status(400).json({ success: false, message: 'Email and OTP required' });

 
   const storedOTP = await redis.get(`otp:${email}`);
  if (!storedOTP) return res.status(404).json({ 
    success: false, 
    message: 'OTP expired or not found' });

  if (storedOTP !== otp.toString()) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid OTP' 
      });
    }
     await redis.del(`otp:${email}`);

  return res.json({ 
        success: true, 
        message: 'OTP  successfully',
        nextStep: '/set-password' 
      });
};
export const setPassword = async (req, res) => {
  const { email, password } = req.validatedData;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'password are required',
    });
  }

  try {
    // Get ALL existing fields first
    const userData = await redis.hgetall(`user-session:${email}`);

    if (userData.password) {
      return res.status(400).json({
        success: false,
        message: 'Password already set',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Update while preserving existing data
    await redis.hset(`user-session:${email}`, {
      ...userData,          // Keep all existing fields
      password: hashedPassword,  // Add new password
      passwordSet: 'true'    // Add flag
    });

    return res.status(200).json({
      success: true,
      message: 'Password set successfully',
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
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

    res.json({ success: true, company }); // ✅ Now matches frontend expectation
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};



