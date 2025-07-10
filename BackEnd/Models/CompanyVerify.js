import mongoose from 'mongoose';

const companyVerifySchema = new mongoose.Schema({
  companyName: { 
    type: String, 
  },
   CIN: {
    type: String,
    required: [true, 'CIN number is required'],
    maxlength: [21, 'CIN cannot exceed 21 characters'],
    match: [/^[A-Z0-9]+$/, 'CIN must be uppercase alphanumeric']
  },
  PAN: {
    type: String,
    required: [true, 'PAN number is required'],
    maxlength: [10, 'PAN cannot exceed 10 characters'],
    match: [/^[A-Z0-9]+$/, 'PAN must be uppercase alphanumeric']
  }
});

const VerifyModel = mongoose.model('company_verify', companyVerifySchema);

export default VerifyModel;