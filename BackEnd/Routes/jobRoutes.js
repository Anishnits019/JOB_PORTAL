import express from 'express'
import { getjobs,filterjobs,getjobbyId,submitApplication } from "../Controllers/JobControllers.js"

const  jobRouter=express.Router()

jobRouter.post('/getjob', getjobs);
jobRouter.post('/filterjob', filterjobs);
jobRouter.get('/:id/description',getjobbyId)
jobRouter.post('/:id/apply-job', submitApplication);

export default jobRouter
