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

export const getjobs = async (req, res) => {
  const { title, city, page } = req.body;
  
  try {
    const query = [];

    // Match jobTitle with case-insensitive regex
    if (title) {
      query.push({
        jobTitle: {
          $regex: title,
          $options: 'i',
        },
      });
    }

    // Match location.city with case-insensitive regex
    if (city) {
      query.push({
        'location.city': {
          $regex: city,
          $options: 'i',
        },
      });
    }

    const filterJobs = await PostModel.find({ $and: query })
      

    if (!filterJobs || filterJobs.length === 0) {
      return res.json({ success: false, message: "No jobs found" });
    }

    return res.json({
      success: true,
      job: filterJobs,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const filterjobs = async (req, res) => {
  const { 
    title, 
    city, // Changed from location to match your schema
    page = 1,
    selectedLocation = [],
    selectedTimings = [],
    selectedCategories = [],
    selectedBenefits = [],
    selectedIncentives = []
  } = req.body;

  // const limit = 10;
  // const skip = (page - 1) * limit;

  try {
    const query = {};

    // Text search filters
    if (title) query.jobTitle = { $regex: title, $options: 'i' };
    if (city) query['location.city'] = { $regex: city, $options: 'i' };

    // Array filters
    if (selectedLocation.length > 0) {
      query['location.city'] = { $in: selectedLocation };
    }
    
    if (selectedTimings.length > 0) {
      query.timings = { $in: selectedTimings };
    }
    
    if (selectedCategories.length > 0) {
      query.category = { $all: selectedCategories };
    }
    
    // Array fields - must contain all selected values
    if (selectedBenefits.length > 0) {
      query.benefits = { $all: selectedBenefits };
    }
    
    if (selectedIncentives.length > 0) {
      query.incentives = { $all: selectedIncentives };
    }

    const filterJobs = await PostModel.find(query)
     

    return res.json({
      success: true,
      job: filterJobs, // Changed to plural 'jobs'
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
      // jobTitle,
      // company
    } = req.body;

    // Create new application without resume
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
      // jobTitle,
      // company,
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


  
  
  
