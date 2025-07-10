import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY); // Store API key in .env
export default resend