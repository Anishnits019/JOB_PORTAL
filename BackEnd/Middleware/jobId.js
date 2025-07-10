import express from 'express'
import jwt from 'jsonwebtoken'
import companyModel from '../Models/Company.js'; // Adjust path as needed

export const protectJob=async(req,res,next)=>{
      const {jobId}=req.cookies
      if(!token){
          return res.status(401).json({ // Added HTTP status code
            success: false,
            message: 'Authorization token missing. Please login again.'
        });
    }
      
    try{

        
            const job=await jobModel.findById(jobId);
            if(!job){
            return res.status(404).json({ success: false, message: "User doesn't exist" });
            }
            req.job = {job}
            next()

        }
    catch(error){
        return res.json({success:false,message:error.message})
    }
    
}