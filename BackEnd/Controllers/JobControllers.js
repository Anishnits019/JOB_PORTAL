import React from 'react'
import PostModel from '../Models/PostJob.js'
import applicationModel from '../Models/Application.js';
export const getjobbyId=async(req,res)=>{
    try{
        const {id}= req.params
        const jobdata=await PostModel.findById(id)
        if(!jobdata){
          return res.json({
            success:false,
            message:'Job is not get fetched'
        })
        }
        return res.json({
            success:true,
            job:jobdata
        })

  }
  catch(error){
    return res.json({success:false ,message:error.message})
  }
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export const filterjobs = async (req, res) => {
  const { 
    page,
    filters
  } = req.body;
  console.log(req.body)

  const limit = 10; 
  const skip = (page - 1) * limit;

  try {
    const query = {};

    if (filters.jobTitle) {
  const escapedTitle = escapeRegex(filters.jobTitle.trim());
  query.jobTitle = { // Changed from 'title' to 'jobTitle'
    $regex: escapedTitle,
    $options: 'i'
  };
}


    // if (filters.location) {
    //   const escapedCity = escapeRegex(filters.location.trim());
    //   query['location.city'] = { 
    //     $regex: `^${escapedCity}`,
    //     $options: 'i'
    //   };
    // }

  
    if (filters.locations && filters.locations.length > 0) {
      query['location.city'] = { $in: filters.locations };
    }
    if ( filters.timings && filters.timings.length > 0) {
      query.timings = { $in: filters.timings };
    }
    
    if (filters.categories && filters.categories.length > 0) {
      query.category = { $all: filters.categories };
    }
    
    // Array fields - must contain all selected values
    if (filters.benefits&& filters.benefits.length > 0) {
      query.benefits = { $all: filters.benefits };
    }
    
    if (filters.incentives && filters.incentives.length > 0) {
      query.incentives = { $all: filters.incentives };
    }
    
    const [jobs, total] = await Promise.all([
      PostModel.find(query)
        .sort({ createdAt: -1 }) 
        .skip(skip)
        .limit(limit),
      PostModel.countDocuments(query)
    ]);
    console.log(jobs.length)
    return res.json({
      success: true,
      job: jobs, 
      total:total
    });

  } catch (error) {
    console.error('Filter error:', error);
    return res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

export const submitApplication = async (req, res) => {
  try {
    const { 
      name,
      email,
      phone,
      dob,
      correspondence_address,
      permanent_address,
      educational_qualification,
      experience,
      current_salary,
      expected_salary,
      jobId,
    } = req.body;
     const resumeUrl = req.file.path; 
     console.log(req.body)
     console.log(resumeUrl)

     const application = new applicationModel({
      name,
      email,
      phone,
      dob: new Date(dob),
      correspondence_address,
      permanent_address,
      educational_qualification,
      experience: parseFloat(experience),
      current_salary: current_salary ? parseFloat(current_salary) : null,
      expected_salary: parseFloat(expected_salary),
      jobId,
      resumeUrl,
      appliedAt: new Date()
    });

    await application.save();

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: {
        applicationId: application._id,
        name: application.name,
        position: application.jobTitle
      }
    });

  } catch (error) {
    console.error('Application submission error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'You have already applied for this position'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};


  
  
  
