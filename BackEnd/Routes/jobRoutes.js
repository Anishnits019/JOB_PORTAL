import express from 'express'
import { filterjobs,getjobbyId,submitApplication } from "../Controllers/JobControllers.js"
import upload from '../config/multer.js'

const  jobRouter=express.Router()

jobRouter.post('/filterjobs', filterjobs);
jobRouter.get('/:id/description',getjobbyId);
jobRouter.post('/:id/apply-job',upload.single('resume'), submitApplication )
export default jobRouter
