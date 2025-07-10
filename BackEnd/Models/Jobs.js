import mongoose from 'mongoose';

 const jobSchema = new mongoose.Schema({
  jobId:{
    type: Number,
  },
  title: {
    type: String,
    trim:true,
    default: ''
   
  },
  description: {
    type: String,
    trim:true,
    default: ''

  },
  location: {
    city: {
      type: String,
      trim:true,
      default: ''
    },
    area: {
      type: String,
      trim: true,
      default: ''
    },
    pinCode: {
      type: String,
      trim:true,
      default: '',
    },
    address: {
      type: String,
      trim:true,
      default: ''
    }
  },
  category: {
    type: [String],
    enum: [
    'Full Time',
    'Permanent',
    'Freelance',
    'Contract',
    'Temporary',
    'Volunteer'
    ]
  },
  timings: {
    type: [String],
    enum: [
    'Day Shift',
    'Morning Shift',
    'Rotational Shift',
    'Night Shift',
    'EveningShift',
    'WeekendAvailability',
    'FixedShift'],
  
  },
  postings: {
    type: Number,
    default: ''
  },
  recuritment: {
    type: String,
    enum: [
    'Less than 1 week', // Updated to match frontend
    'Between 3-4 weeks',
    'Within two months',
    'More than 3 months'],
  },
  incentives: {
    type: [String],
    enum: ['Performance bonus', 'Yearly bonus', 'Commission pay', 'Overtime pay', 'Quarterly bonus','Shift allowance','Joining bonus']
  },
  benefits: {
    type: [String],
    enum: ['Health insurance', 'Provident Fund', 'Cell phone reimbursement', 'Paid sick time', 'Work from home', 'Paid time off','Food Provided','Life insurance']
  },
  
  detailedDescription: {
    type: String,
    default:''
  },

  contactEmail: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isComplete: { type: Boolean, default: false },
})
// Update the updatedAt field before saving
jobSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});
const JobModel = mongoose.model('jobs', jobSchema );
export default JobModel

