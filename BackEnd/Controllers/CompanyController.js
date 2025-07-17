import companyModel from '../Models/Company.js'
import bcrypt from 'bcrypt'
import JobModel from '../Models/Jobs.js'
import VerifyModel from '../Models/CompanyVerify.js'
import jobTitleModel from '../Models/JobTitle.js'
import AreaModel from '../Models/location.js'

// import cloudinary from '../config/cloudinary.js'
import jwt from 'jsonwebtoken'
import redis from '../config/redis.js';

export const verifyAndRegister = async (req, res) => {
  const { email, CIN, PAN, sessionId } = req.body;
  console.log(req.body)
  try {
    
    const company = await VerifyModel.findOne({
      $or: [{ PAN }, { CIN }]
    });

    if (!company) {
      return res.status(404).json({
        success: false,
        errors: [{ field: 'form', message: 'Company not found with provided PAN and CIN' }]
      });
    }

    const hashedPassword = await redis.hget(`user-session:${sessionId}`, 'password');

    if (!hashedPassword) {
      return res.status(400).json({
        success: false,
        errors: [{ field: 'form', message: 'Session expired. Please start again.' }]
      });
    }

    const newCompany = new companyModel({
      name:company.companyName,
      email,
      password:hashedPassword,
      CIN,
      PAN,
      isVerified: true
    });

    await newCompany.save();

    const token = jwt.sign(
      { id: newCompany._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '7d' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      maxAge: 24 * 60 * 60 * 1000
    });

    return res.status(201).json({
      success: true,
      company:{
          name:company.companyName,
          isVerified: true
      }
    });
  }
  catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      success: false,
      errors: error.message
    });
  }
};

export const addjobid=async(req,res)=>{
  const {jobId}=req.body
  try{
  const newjob = new JobModel({
      jobId
    })
    await newjob.save()
    return res.json({
      success:true,
      message:'Job posted successfully',
    })

    

  }catch(error){
    res.json({
      success:false,
      message:error.message
    })
  }
}
export const addjob=async(req,res)=>{
  
    const { jobData, jobId } = req.body;
    const { title, description, location } = jobData;
    const { city, area, pinCode, address } = location || {};

  if (!title || !description || !city || !area || !pinCode || !address) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }
  try{
  const updatedJob =await JobModel.findOneAndUpdate(
        {jobId},
        {
          $set:{
            title,
            description,
            location:{
                city,
                area,
                pinCode,
                address
            },
        }},
        {new: true },
      ) 
       if(!updatedJob){
            return res.status(201).json({
            success: false,
            message: 'Job didnot posted successfully!',
          
        });
       } 
       res.status(200).json({
            success:true,
            message: 'Job posted successfully!',
           
      })}
      catch(error){
        res.json({success:false,message:error.message})
      }
}
export const addjobdetails = async (req, res) => {
  const { jobData, jobId } = req.body;
  const { category, timings, postings, recruitment } = jobData;
  
  
  if (!category || !timings || !postings || !recruitment) { // Fixed spelling
    return res.status(400).json({ 
      success: false, // Fixed spelling
      message: 'Please fill all required details' 
    });
  }
  
  try {
    const updatedJob=await JobModel.findOneAndUpdate(
      {jobId},
      {
      $set:{
      category,
      timings,
      postings: Number(postings),
      recruitment 
      }
    },
    {new: true },
    )
    if(!updatedJob){
            return res.status(201).json({
            success: false,
            message: 'Job didnot posted successfully!',
        });
      }
      return res.status(201).json({
      success: true,
      message: 'Job posted successfully!',
    });

  }catch (error) {
    return res.status(500).json({ // Added return
      success: false,
      message: error.message
    });
  }
}
export const addjobpay = async (req, res) => {
  const { jobData, jobId } = req.body;
  const { incentives, benefits } = jobData;

  // Only check that fields exist (empty arrays allowed)
  if (!incentives || ! benefits) {
    return res.status(400).json({
      success: false,
      message: 'Both incentives and benefits fields are required'
    });
  }

  try {
    const updatedJob =await JobModel.findOneAndUpdate(
        {jobId},
        {
          $set:{
            incentives,
            benefits
        }},
        {new: true },
      ) 
    

    if(!updatedJob){
            return res.status(201).json({
            success: false,
            message: 'Job didnot posted successfully!',
        });
      }
      return res.status(201).json({
      success: true,
      message: 'Job posted successfully!',
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
export const addjobdetaileddescription=async(req,res)=>{
  const { jobData, jobId } = req.body;
  const { detailedDescription } = jobData;
     if(!detailedDescription){
        return res.json({
          sucess:'false',
          message:'Please fill the details please'})
      }
      try{
        const updatedJob =await JobModel.findOneAndUpdate(
        {jobId},
        {
          $set:{
            detailedDescription 
        }},
        {new: true },
      ) 
        
      if(!updatedJob){
            return res.status(201).json({
            success: false,
            message: 'Job didnot posted successfully!',
        });
      }
      return res.status(201).json({
      success: true,
      message: 'Job posted successfully!',
    });
      }
      catch(error){
        res.json({success:false,message:error.message})
      }
}
export const getjobdata = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({  // 400 for bad request
            success: false,  // Fixed typo
            message: 'Job ID is required'
        });
    }

    try {
        const JobData = await JobModel.findOne({ jobId: id });
        
        if (!JobData) {
            return res.status(404).json({  // 404 for not found
                success: false,
                message: 'Job not found',
            });
        }
        
        return res.status(200).json({
            success: true,
            message: 'Job retrieved successfully', 
            job: JobData,
        });
    } catch (error) {
        return res.status(500).json({  
            success: false,
            message: error.message
        });
    }
}
export const editjobdata = async (req, res) => {
    const {id} = req.params
    const updatedField = req.body;
    if (!id) {
        return res.status(400).json({  
            success: false,  
            message: 'Job ID is required'
        });
    }
    if (!updatedField || Object.keys(updatedField).length==0) {
        return res.status(400).json({  
            success: false,  
            message: 'Job ID is required'
        });
    }

    try {
        const JobData = await JobModel.findOneAndUpdate(
          { jobId: id },
          {
          $set:
            updatedField
        },
          {new:true}
        );
        
        if (!JobData) {
            return res.status(404).json({ 
                success: false,
                message: 'Job not found',
            });
        }
        
        return res.status(200).json({
            success: true,
            message: 'Job retrieved successfully', 
        });
    } catch (error) {
        return res.status(500).json({  
            success: false,
            message: error.message
        });
    }
}
export const postjob=async (req,res)=>{
    const {id} = req.params
    const updatedField = req.body;
    if (!id) {
        return res.status(400).json({  
            success: false,  
            message: 'Job ID is required'
        });
    }
    if (!updatedField || Object.keys(updatedField).length==0) {
        return res.status(400).json({  
            success: false,  
            message: 'Job ID is required'
        });
    }

    try {
        const JobData = await JobModel.findOneAndUpdate(
          { jobId: id },
          {
          $set:
            updatedField
        },
          {new:true}
        );
        
        if (!JobData) {
            return res.status(404).json({ 
                success: false,
                message: 'Job not found',
            });
        }
        
        return res.status(200).json({
            success: true,
            message: 'Job retrieved successfully', 
        });
    } catch (error) {
        return res.status(500).json({  
            success: false,
            message: error.message
        });
    }
}
export const getjobtitles = async (req, res) => {
  try {
    const jobTitles = await jobTitleModel.find({}).select('index JobTitle -_id' ).sort({ index: 1 }); ;
    
    if (!jobTitles || jobTitles.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No job titles found'
      });
    }
    
    return res.status(200).json({
      success: true,
      jobTitles: jobTitles
    });
    
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching job titles'
    });
  }
}
export const getlocation = async (req, res) => {
  try {
    const Areas = await AreaModel.find({}).select('city state -_id' ).sort({ index: 1 }); ;
    
    if (!Areas || Areas.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No job titles found'
      });
    }
    
    return res.status(200).json({
      success: true,
      Areas: Areas
    });
    
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching job titles'
    });
  }
}
export const managejob = async (req, res) => {
  const { companyId } = req.company;

  try {
    const postedJobs = await JobModel.find({companyId:companyId }).populate({
      path:'company',
      select:'-password -__v'
  });

    if (!postedJobs.length) {
      return res.json({ 
        success: false,
        message: 'No jobs posted' });
    }

    return res.json({
      success: true,
      jobs:postedJobs
    });
  } catch (error) {
    res.json({ 
      success: false,
       message: error.message });
  }
}
