import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Ensure .env is loaded

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER, // your Brevo login (email address)
    pass: process.env.SMTP_PASS  // your Brevo SMTP API key
  }
});

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP Connection Failed:', error);
  } else {
    console.log('✅ SMTP Server Ready to take messages');
  }
});

export default transporter;
