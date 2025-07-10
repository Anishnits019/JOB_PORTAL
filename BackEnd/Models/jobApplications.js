import mongoose from 'mongoose';
// Schema for a single job post
const jobApplicationSchema = new mongoose.Schema({
  userId:
  {type: String,
  required: true,
  ref:'user'
  },
  companyId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'company',
    required:true
  },
   companyId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'job',
    required:true
  },
  status:{type:String,default:Pending}
});

const JobApplication = mongoose.model('jobApplication', jobApplicationSchema);
export default JobApplication;
