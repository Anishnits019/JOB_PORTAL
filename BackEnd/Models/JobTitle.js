import mongoose from 'mongoose';

const jobTitleModelSchema = new mongoose.Schema({
  index: { 
    type: Number, 
  },
   jobTitle: {
    type: String,
    required:true,
  
}});

const jobTitleModel = mongoose.model('jobtitle', jobTitleModelSchema );

export default jobTitleModel;