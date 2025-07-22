import express from 'express'
import jwt from 'jsonwebtoken'
import companyModel from '../Models/Company.js'; // Adjust path as needed

export const protectCompany=async(req,res,next)=>{
      const {token}=req.cookies
      console.log(token)
      if(!token){
          return res.status(401).json({ 
            success: false,
            message: 'Authorization token missing. Please login again.'
        });
    }
      
    try{
        const tokenDecode= jwt.verify(token,process.env.JWT_SECRET_KEY)

        if(!tokenDecode){
            return res.json({success:false,message:'token is invalid'})
        }
            const company=await companyModel.findById(tokenDecode.id);
            if(!company){
            return res.status(404).json({ success: false, message: "User doesn't exist" });
            }
            req.company = {companyId:company._id }
            next()

        }
    catch(error){
        return res.json({success:false,message:error.message})
    }
        
}