import mongoose from 'mongoose';

const areaModelSchema = new mongoose.Schema({
  city: { 
    type:String, 
  },
   state: {
    type: String,
}});

const areaModel = mongoose.model('city', areaModelSchema );

export default areaModel;