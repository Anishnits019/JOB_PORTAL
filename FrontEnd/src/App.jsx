import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Application} from './pages/Application'
import {ApplyJob} from './pages/ApplyJob'
import {Home} from './pages/Home'
import {AddJobs} from './pages/AddJobs'
import { ManageJobs } from './pages/ManageJobs'
import{ ViewApplications} from './pages/ViewApplications'
import {Dashboard} from './pages/Dashboard'
import {Joblisting} from './pages/Joblisting'
import {Login}from './components/Login'
import 'quill/dist/quill.snow.css'
import {OtpVerify} from './components/OtpVeify'
import {CompanyVerify} from './components/CompanyVerify'
import { SetPassword } from './components/setPassword'
import {AddJobDetails} from './pages/AddJobDetails'
import {AddPay} from './pages/AddPay'
import {AddJobPage} from './pages/AddJobPage'
// import { PreferencesPage } from './pages/PreferencesPage'
import {JobDescriptionEditor} from './pages/JobDescriptionEditor'
import {Review} from './pages/Review'
import { JobDescription } from './pages/JobDescription'
import {EmployerLogin} from './pages/EmployerLogin'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path="/search-jobs" element={<Joblisting/>}/>
        <Route path ="/applications" element={<Application/>}/>
        <Route path ="/employer-login" element={<EmployerLogin/>}/>
        <Route path="/job/:id/description" element={<JobDescription/>}/>
        <Route path="/job/:id/apply-job" element={<ApplyJob/>}/>
        <Route path='/add_jobs' element={<AddJobs/>}></Route>
        <Route path='/manage_jobs' element={<ManageJobs/>}></Route>
        <Route path='/view_jobs' element={<ViewApplications/>}></Route>
        <Route path='/employer-signup' element={<Login/>}></Route>
         <Route path='/otp-verify' element={<OtpVerify/>}></Route>
        <Route path='/verify-company' element={<CompanyVerify/>}></Route>
        <Route path='/set-password' element={<SetPassword/>}></Route>
        <Route path='/job/:jobId' element={<AddJobs/>}></Route>
        <Route path='/job/:jobId/details' element={<AddJobDetails/>}></Route>
        <Route path="/job/:jobId/benefits" element={<AddPay/>}></Route>
        <Route path="/job/:jobId/edit" element={<JobDescriptionEditor/>}></Route>
        <Route path="/job/:jobId/review" element={<Review/>}></Route>
        {/* <Route path='/set-prefrence' element={<PreferencesPage/>}></Route> */}
            <Route path='dashboard' element={<Dashboard/>}>
            <Route index element={<ManageJobs />} /> 
            <Route path='manage-jobs' element={<ManageJobs/>}></Route>
            <Route path='add-jobs'index element={<AddJobPage/>}></Route>
            <Route path='view-applications' element={<ViewApplications/>}></Route>
            </Route>
      </Routes>
       
    </div>
  )
}

export default App
