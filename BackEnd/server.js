import express from 'express'
import 'dotenv/config';
import connectDB from './config/Mongodb.js'
import { connectCloudinary } from './config/cloudinary.js';
import cookieParser from 'cookie-parser';
import companyRouter from './Routes/companyRoutes.js'
import authRouter from './Routes/authRoutes.js';
import jobRouter from './Routes/jobRoutes.js'
import cors from 'cors'
import { clerkWebHooks } from './Controllers/webhooks.js';

await connectDB()
await connectCloudinary()

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
}))

app.get('/', (req, res) => res.send('Server is Live!'))
app.use('/company', companyRouter)
app.use('/auth', authRouter)
app.use('/job', jobRouter)
app.post('/webhooks', clerkWebHooks)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('Server is running')
})