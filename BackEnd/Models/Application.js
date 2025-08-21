import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({  // Personal Information
  name: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[A-za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/,'Please fill a valid email address']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^[0-9]{10,15}$/, 'Please enter a valid phone number']
  },
  dob: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  correspondence_address: {
    type: String,
    required: [true, 'Correspondence address is required'],
    trim: true,
    maxlength: [500, 'Address cannot exceed 500 characters']
  },
  permanent_address: {
    type: String,
    required: [true, 'Permanent address is required'],
    trim: true,
    maxlength: [500, 'Address cannot exceed 500 characters']
  },
  educational_qualification: {
    type: String,
    required: [true, 'Educational qualification is required'],
    trim: true,
    maxlength: [200, 'Qualification cannot exceed 200 characters']
  },
  experience: {
    type: Number,
    required: [true, 'Years of experience is required'],
    min: [0, 'Experience cannot be negative']
  },
  current_salary: {
    type: Number,
    min: [0, 'Salary cannot be negative'],
    default: null
  },
  expected_salary: {
    type: Number,
    required: [true, 'Expected salary is required'],
    min: [0, 'Salary cannot be negative']
  },

  jobId: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  },
  jobTitle: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  appliedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['submitted', 'under_review', 'shortlisted', 'rejected'],
    default: 'submitted'
  },
  resumeUrl:{
    type:String,
    required:[true,'Resume is required']
  }
}, {
  timestamps: true
})
const applicationModel = mongoose.model('jobapplication', applicationSchema);

export default applicationModel;