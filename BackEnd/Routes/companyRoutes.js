import express from 'express'
import { verifyAndRegister,logout,login,addjobid,addjob,addjobdetails,addjobpay,addjobdetaileddescription,getjobdata,getjobtitles,getlocation,editjobdata,postjob,managejob } from "../Controllers/CompanyController.js"
import {protectCompany} from '../Middleware/company_middleware.js'
// import upload from '../Middleware/multer.js';

const  companyRouter=express.Router()

companyRouter.post('/verifyandregister',verifyAndRegister);
companyRouter.post('/login',login)
companyRouter.post('/logout',logout)
companyRouter.patch('/add-job-id',addjobid)
companyRouter.get('/job/jobtitles',getjobtitles)
companyRouter.get('/job/areas',getlocation)
companyRouter.patch('/job/:id',addjob)
companyRouter.patch('/job/:id/details',addjobdetails)
companyRouter.patch('/job/:id/benefits',addjobpay)
companyRouter.patch('/job/:id/edit',addjobdetaileddescription)
companyRouter.get('/job/:id',getjobdata)
companyRouter.patch('/job/:id/edit-job',editjobdata)
companyRouter.post('/job/:id/post-job',postjob)

companyRouter.get('/manage-jobs',protectCompany,managejob)

export default companyRouter
