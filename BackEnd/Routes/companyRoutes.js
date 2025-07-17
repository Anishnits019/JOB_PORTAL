import express from 'express'
import { verifyAndRegister,addjobid,addjob,addjobdetails,addjobpay,addjobdetaileddescription,getjobdata,getjobtitles,getlocation,editjobdata,postjob,managejob } from "../Controllers/CompanyController.js"
import {protectCompany} from '../Middleware/company_middleware.js'
// import upload from '../Middleware/multer.js';

const  companyRouter=express.Router()

companyRouter.post('/verifyandregister',verifyAndRegister);
companyRouter.patch('/add-job-id',protectCompany,addjobid)
companyRouter.get('/job/jobtitles',getjobtitles)
companyRouter.get('/job/areas',getlocation)
companyRouter.patch('/job/:id',protectCompany,addjob)
companyRouter.patch('/job/:id/details',protectCompany,addjobdetails)
companyRouter.patch('/job/:id/benefits',protectCompany,addjobpay)
companyRouter.patch('/job/:id/edit',protectCompany,addjobdetaileddescription)
companyRouter.get('/job/:id',protectCompany,getjobdata)
companyRouter.patch('/job/:id/edit-job',protectCompany,editjobdata)
companyRouter.post('/job/:id/post-job',postjob)

companyRouter.get('/manage-jobs',protectCompany,managejob)

export default companyRouter
