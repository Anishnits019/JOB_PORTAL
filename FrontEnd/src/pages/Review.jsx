import React,{useState,useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import { Benefits } from '../components/Benefits';
import { Location } from '../components/Location';
import {Incentives} from '../components/Incentives';
import { Description } from '../components/Description';
import {Postings} from '../components/Postings'
import {JobTitle} from '../components/JobTitle'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { AppContext } from '../context/Appcontext';
import {Category} from '../components/Category'
import {Timings} from '../components/Timings'
import {Hiring} from '../components/Hiring'
import {Footer} from '../components/Footer'
export const Review = () => {
 const {jobId}=useParams()
 const navigate=useNavigate()
 const {addJob,setAddJob,popUpKey,setPopUpKey} =useContext(AppContext)
  const handleChange =async()=>{
    try {
      const response = await axios.post(
        `http://localhost:5000/company/job/${jobId}/post-job`,
         {jobData: addJob,  
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if(response.data.success){
        navigate(`/dashboard`);
      } 
    } catch (err) {
      console.error('Error saving job:', err);
    }
  }
  const openPopUp=()=>{
        if(!popUpKey) return null;
        return(
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40  transition-opacity duration-300'>
        <div className={`
    bg-white rounded-xl shadow-2xl  w-[60%] mx-4 overflow-hidden border border-gray-200
    transform origin-center transition-all duration-300
    ${popUpKey ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
     `}>
    {popUpKey === 'title' && (
      <div>
        {/* Header */}
        <div className="bg-gradient-to-r  px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Edit the Job Post</h1>
            <button 
              onClick={() => setPopUpKey(null)}
              className="p-1   transition-colors duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <JobTitle keyName="title" jobId={jobId}/>

          {/* Footer with Save button */}
          
        </div>
    </div>
    )}
    {popUpKey === 'benefits' && (
      <div>
        {/* Header */}
        <div className="bg-gradient-to-r  px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Edit the Job Post</h1>
            <button 
              onClick={() => setPopUpKey(null)}
              className="p-1   transition-colors duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <Benefits keyName="benefits" jobId={jobId}/> 
          {/* Footer with Save button */}
        
        </div>
    </div>
    )}
    {popUpKey === 'description' && (
      <div>
        {/* Header */}
        <div className="bg-gradient-to-r  px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Edit the Job Post</h1>
            <button 
              onClick={() => setPopUpKey(null)}
              className="p-1   transition-colors duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <Description keyName="description" jobId={jobId}/>


          {/* Footer with Save button */}
          
        </div>
    </div>
    )}
    {popUpKey === 'address' && (
      <div>
        {/* Header */}
        <div className="bg-gradient-to-r  px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Edit the Job Post</h1>
            <button 
              onClick={() => setPopUpKey(null)}
              className="p-1   transition-colors duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <Location keyName="location" jobId={jobId}/>

          {/* Footer with Save button */}
          
        </div>
    </div>
    )}
    {popUpKey === 'incentives' && (
      <div>
        {/* Header */}
        <div className="bg-gradient-to-r  px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Edit the Job Post</h1>
            <button 
              onClick={() => setPopUpKey(null)}
              className="p-1   transition-colors duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <Incentives keyName="incentives" jobId={jobId}/>


          {/* Footer with Save button */}
          
        </div>
      </div>
    )}
    {popUpKey === 'postings' && (
      <div>
        {/* Header */}
        <div className="bg-gradient-to-r  px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Edit the Job Post</h1>
            <button 
              onClick={() => setPopUpKey(null)}
              className="p-1   transition-colors duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <Postings  keyName="postings" jobId={jobId}/>


          {/* Footer with Save button */}
          
        </div>
      </div>
    )}
    {popUpKey === 'timings' && (
      <div>
        {/* Header */}
        <div className="bg-gradient-to-r  px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Edit the Job Post</h1>
            <button 
              onClick={() => setPopUpKey(null)}
              className="p-1   transition-colors duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <Timings keyName="timings" jobId={jobId}/>

          {/* Footer with Save button */}
          
        </div>
      </div>
    )}
    {popUpKey === 'category' && (
      <div>
        {/* Header */}
        <div className="bg-gradient-to-r  px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Edit the Job Post</h1>
            <button 
              onClick={() => setPopUpKey(null)}
              className="p-1   transition-colors duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <Category keyName="category" jobId={jobId}/>
          
        </div>
      </div>
    )}
    {popUpKey === 'recruitment' && (
      <div>
        {/* Header */}
        <div className="bg-gradient-to-r  px-6 py-4 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black">Edit the Job Post</h1>
            <button 
              onClick={() => setPopUpKey(null)}
              className="p-1   transition-colors duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <Hiring keyName="hiring" jobId={jobId}/>
        </div>
      </div>
    )}
    
  </div>
</div>

        )
  }
        
    const RenderFunction=({keyName})=>{
        return(
      <svg
    className="w-4 h-4 cursor-pointer"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    onClick={()=>setPopUpKey(keyName)}
    >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  </svg>)}
  useEffect(() => {
  const fetchData = async () => {
    try {
    const response = await axios.get(`http://localhost:5000/company/job/${jobId}`)
      if (response.data?.success) {
        setAddJob(response.data.job);
        console.log(response.data.job); // not addJob directly
      }
    } catch (error) {
      console.error("Error fetching job:", error);
    }
  };
  fetchData();
}, [jobId,setAddJob]);

  return (
    <>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {openPopUp()}
      <h1 className="text-3xl font-bold mb-6">Job Posting Review</h1>
      
      <div className="space-y-6">
        {/* Job Title */}
        <div className="flex justify-between">
          <dt className="font-medium text-gray-700 min-w-[120px]">Job Title:</dt>
          <dd><span className="text-gray-400">{addJob.title}</span></dd>
        <RenderFunction keyName="title" />
        </div>

        {/* Open Positions */}
        <div className="flex justify-between">
          <dt className="font-medium text-gray-700 min-w-[120px]">Open Positions:</dt>
          <dd>{addJob.postings}</dd>
          <RenderFunction keyName="postings" />
        </div>

        {/* Address */}
        <div className="flex justify-between">
          <dt className="font-medium text-gray-700 min-w-[120px]">Address:</dt>
          <dd>{addJob.location.address}</dd>
          <RenderFunction keyName="address" />
        </div>

        {/* Job Categories */}
        <div className="flex justify-between">
          <dt className="font-medium text-gray-700 min-w-[120px]">Job Type:</dt>
          <dd>
            <span className="text-gray-400">{addJob.category}</span>
          </dd>
          <RenderFunction keyName="category" />
        </div>

        {/* Timings */}
        <div className="flex justify-between">
          <dt className="font-medium text-gray-700 min-w-[120px]">Work Schedule:</dt>
          <dd>
            <span className="text-gray-400">{addJob.timings}</span>
          </dd>
        <RenderFunction keyName="timings" />

        </div>

        {/* Recruitment  */}
        <div className="flex justify-between">
          <dt className="font-medium text-gray-700 min-w-[120px]">Hiring Timeline:</dt>
          <dd><span className="text-gray-400">Not specified</span></dd>
        <RenderFunction keyName="recruitment" />
        </div>

        {/* Incentives */}
        <div className="flex justify-between">
          <dt className="font-medium text-gray-700 min-w-[120px]">Incentives:</dt>
          <dd>
            <span className="text-gray-400">{addJob.incentives}</span>
          </dd>
          <RenderFunction keyName="incentives" />
        </div>

        {/* Benefits */}
        <div className="flex justify-between">
          <dt className="font-medium text-gray-700 min-w-[120px]">Benefits:</dt>
          <dd>
            <span className="text-gray-400">{addJob.benefits}</span>
          </dd>
        <RenderFunction keyName="benefits" />

        </div>
        <div className="flex justify-between">
          <dt className="font-medium text-gray-700 min-w-[120px]">Description:</dt>
          <dd className="whitespace-pre-line">
            <span className="text-gray-400">{addJob.description}</span>
          </dd>
          <RenderFunction keyName="description" />
        </div>
      </div>
      <div className="flex justify-end pt-4 space-x-2 border-t border-gray-100">
            <button
              onClick={()=>setPopUpKey(null)}
              className="px-6 py-2.5   text-black font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Cancel 
              
            </button>
            <button
              onClick={handleChange}
              className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Save 
              
            </button>
          </div>
        
    </div>
    <Footer/>
    </>
  );
};