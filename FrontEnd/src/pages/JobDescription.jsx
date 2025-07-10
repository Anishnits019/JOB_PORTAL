import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../context/Appcontext'
import { assets, jobsData } from '../assets/assets'
import { Navbar } from '../components/Navbar'
import moment from 'moment'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const JobDescription = () => {
  const { id } = useParams()
  const [jobData, setJobData] = useState(null)
  const { setAppliedJobs } = useContext(AppContext)
  const navigate = useNavigate()
  useEffect(()=>{
       const fetchJobDetails = async () => {
    try {
      const  response  = await axios.get(`http://localhost:5000/job/${id}/description`)
      console.log('starts')
      if(response.data.success){
        console.log('end')
        console.log(response.data.job)
          setJobData(response.data.job)
      }
      
    } catch (error) {
      console.error("Error fetching job:", error)
    }
  }
  fetchJobDetails()
  },[id])
  
 

  const handleApply = () => {
    setAppliedJobs(prev => [...prev, id])
    navigate('/application-confirmation')
  }

  if (!jobData) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-gray-500">Loading job details...</p>
    </div>
  )

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
  {jobData && (
    <div className="w-[60%] mx-auto">
      {/* Job Header - Naukri Style */}
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 mb-6">
        <div className="p-6 flex flex-col md:flex-row gap-6">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <img
              src={assets.company_icon}
              alt={jobData.companyName}
              className="w-16 h-16 object-contain border rounded-md"
            />
          </div>
          
          {/* Job Title and Basic Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{jobData.jobTitle}</h1>
                <div className="flex items-center text-gray-600 mt-1">
                  <img src={assets.suitcase_icon} className="w-4 h-4 mr-1" />
                  <span className="text-sm">{jobData.companyName}</span>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition duration-150"
                      onClick={()=>navigate(`/job/${id}/apply-job`)}>
                  Apply Now
              </button>
            </div>

            {/* Horizontal Info Bar */}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <div className="flex items-center text-gray-600">
                <img src={assets.location_icon} className="w-4 h-4 mr-1" />
                <span>{jobData.location?.city || 'Not specified'}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <img src={assets.money_icon} className="w-4 h-4 mr-1" />
                <span>{jobData.salary || 'Not disclosed'}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <img src={assets.experience_icon} className="w-4 h-4 mr-1" />
                <span>{jobData.experience || 'Not specified'}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <img src={assets.education_icon} className="w-4 h-4 mr-1" />
                <span>{jobData.education || 'Not specified'}</span>
              </div>
              
            </div>

            {/* Posted Date */}
            <div className="mt-3 text-sm text-gray-800 flex flex-row gap-1 space-x-2">
              Apply before:<span className='text-gray-500 mr-1 '>{moment(jobData.lastDateToApply).format('DD MMM YYYY')}</span>
              Openings:<span>{jobData.postings || 'Not specified'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Layout for Job Details */}
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
        <div>
          {/* Job Description */}
          <div className="md:col-span-2 mb-4 ">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Job Description</h2>
            <p className="text-gray-700 text-sm">{jobData.description}</p>
            
            {jobData.responsibilities && jobData.responsibilities.length > 0 && (
              <>
                <h3 className="text-md font-medium text-gray-800 mt-4 mb-2">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {jobData.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {jobData.opportunities && jobData.opportunities.length > 0 && (
              <>
                <h3 className="text-md font-medium text-gray-800 mt-4 mb-2">Job Opportunities:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {jobData.opportunities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className='mb-4 '>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Job Details</h2>
            <div className="space-y-3 text-sm">
              <div className='flex gap-1 '>
                <h3 className="font-medium text-gray-800">Role:</h3>
                <p className="text-gray-500">{jobData?.jobTitle|| 'Not specified'}</p>
              </div>
              <div className='flex gap-1 '>
                <h3 className="font-medium text-gray-800">Employment Type:</h3>
                <p className="text-gray-500">{jobData.category?.join(', ') || 'Not specified'}</p>
              </div>
              <div className='flex gap-1 '>
                <h3 className="font-medium text-gray-800">Work Mode:</h3>
                <p className="text-gray-500">{jobData.workMode || 'Not specified'}</p>
              </div>
              <div className='flex gap-1 '>
                <h3 className="font-medium text-gray-800">Shift Timings:</h3>
                <p className="text-gray-500">{jobData.timings?.join(', ') || 'Not specified'}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Benefits</h3>
                <p className="text-gray-500">{jobData.benefits?.join(', ') || 'Not specified'}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Incentives</h3>
                <p className="text-gray-500">{jobData.incentives?.join(', ') || 'Not specified'}</p>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className="mt-6">
  <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">Skills</h2>
  <div className="flex flex-col md:flex-row gap-6">
    {/* Left Column - Skills */}
    <div className="flex-1">
      <div className="flex flex-wrap gap-2">
        {jobData.skillsRequired.map((skill, index) => (
          <span 
            key={index} 
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
    
    {/* Right Column - Apply Button */}
    <div className="md:w-48 flex-shrink-0 flex md:justify-end items-start">
      <a 
        href={`mailto:${jobData.applyLink}`}
        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-150 text-center"
      >
        Quick Apply
      </a>
    </div>
  </div>
</div>

          {/* Job Metadata */}
          
        </div>

        {/* Bottom Apply Button */}
        
      </div>
    </div>
  )}
</div>
    </>
  )
}