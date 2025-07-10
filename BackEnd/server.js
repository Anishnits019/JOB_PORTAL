import express from 'express'
// import '../config/Instrument.js'
import 'dotenv/config';
import  connectDB  from './config/Mongodb.js'
import { connectCloudinary } from './config/cloudinary.js';
import cookieParser from 'cookie-parser';
import companyRouter from './Routes/companyRoutes.js'
import authRouter from './Routes/AuthRoutes.js';
import jobRouter from './Routes/jobRoutes.js'
import cors from 'cors'
import { clerkWebHooks } from './Controllers/webhooks.js';
await connectDB()
await connectCloudinary()
const app=express()

app.use((req, res, next) => {
  if (req.method === 'GET') return next();
  express.json()(req, res, next);
});
app.use(cookieParser());

const allowedOrigins=[
    "http://localhost:5173",
]
app.use(cors({
    credentials: true, 
    origin:allowedOrigins
}));

app.use('/company',companyRouter)
app.use('/auth',authRouter)
app.use('/job',jobRouter)
app.post('/webhooks',clerkWebHooks)
// app.post('',clerkWebHooks)
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('Server is running')
})