import express from 'express';
import 'dotenv/config';
import connectDB from './config/Mongodb.js';
import { connectCloudinary } from './config/cloudinary.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import companyRouter from './Routes/companyRoutes.js';
import authRouter from './Routes/authRoutes.js';
import jobRouter from './Routes/jobRoutes.js';
import { clerkWebHooks } from './Controllers/webhooks.js';

await connectDB();
await connectCloudinary();

const app = express();

app.use(express.json());
app.use(cookieParser());

// Handle preflight requests (MUST come before routers)

const whitelist = ["https://job-portal-vg3e.vercel.app"]; // your frontend
app.use(
  cors({
    origin(origin, cb) {
      // allow same-origin/no-origin (like curl/health checks)
      if (!origin || whitelist.includes(origin)) return cb(null, true);
      cb(new Error("Not allowed by CORS"));
    },
    methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // only if you use cookies/auth
  })
);
// Always let OPTIONS preflights through
app.options("*", cors());

app.get('/', (req, res) => res.send('Server is Live!'));

app.use('/company', companyRouter);
app.use('/auth', authRouter);
app.use('/job', jobRouter);
app.post('/webhooks', clerkWebHooks);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});