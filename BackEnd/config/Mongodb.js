import mongoose from 'mongoose'
// import dotenv from 'dotenv';

// dotenv.config(); 
const connectDB = async ()=> { 
    await mongoose.connect(`${process.env.MONGODB_URI}`)
     .then(() => console.log('✅ Connected to Database'))
    .catch(err => console.error('❌ MongoDB connection error:', err.message))
};
export default connectDB;