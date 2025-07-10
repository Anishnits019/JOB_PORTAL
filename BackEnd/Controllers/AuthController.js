import redis from '../config/redis.js';
import transporter from '../config/nodemailer.js';
import verifyModel from '../Models/CompanyVerify.js';
import bcrypt from 'bcrypt'
import companyModel from'../Models/Company.js'

export const sendVerifyOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: 'Email is required' });

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    
    // Get existing data first
    const existingData = await redis.hgetall(`user-session:${email}`);
    
    // Set only OTP while preserving other fields
    await redis.hset(`user-session:${email}`, {
      ...existingData,
      email,  // Maintain email
      otp     // Only update OTP
    });

    await redis.expire(`user-session:${email}`, 600); // 5 min

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

 
  const userData = await redis.hgetall(`user-session:${email}`);

  if (!userData.otp) return res.status(404).json({ 
    success: false, 
    message: 'OTP expired or not found' });

  if (userData.otp !== otp) { 
    return res.status(401).json(
      { success: false,
      message: 'Invalid OTP' });
  }
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



