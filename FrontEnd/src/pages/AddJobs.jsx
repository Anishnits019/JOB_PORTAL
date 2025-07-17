import React, { useContext, useCallback, useState,useEffect} from 'react';
import { AppContext } from '../context/Appcontext';
import { useNavigate,useParams} from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import axios from 'axios';
import { BlockReason } from 'firebase/vertexai';

// Constants for maintainability
const LOCATION_FIELDS = ['city', 'area', 'pinCode', 'address'];

export const AddJobs = () => {
  const { jobId } = useParams(); 
  const { addJob,setAddJob,title,area,setArea} = useContext(AppContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null)
  const [showSuggestions, setShowSuggestions] = useState(false);



  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    setAddJob(prev => ({
      ...prev,
      ...(LOCATION_FIELDS.includes(name) ? {
        location: {
          ...(prev.location || {}), // Safeguard against undefined location
          [name]: value
        }
      } : {
        [name]: value
      })
    }));
    if(name=="title"){
          setShowSuggestions(true)
    }
  }, [setAddJob]);

  const handleContinue = useCallback(async () => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Validate required fields
      if (!addJob.title || !addJob.description || 
          !addJob.location?.city || !addJob.location?.address) {
        throw new Error('Please fill all required fields');
      }

      const response = await axios.patch(
        `http://localhost:5000/company/job/${jobId}`,
        {jobData: addJob,  // Complete
         jobId: jobId ,
         withCredentials: true,
        },
        {
          headers: { 
            'Content-Type': 'application/json',
            
          }
        }
      );
      
      if (response.data.success) {
        navigate(`/job/${jobId}/details`);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.response?.data?.message || err.message || 'Failed to submit job');
    } finally {
      setIsSubmitting(false);
    }
  }, [addJob, navigate]);
  const filteredtitles = title.filter(
  (item) =>
    item.JobTitle &&
    addJob.title &&
    item.JobTitle.toLowerCase().startsWith(addJob.title.toLowerCase())
);
  return (
    <>
      <Navbar/>
      <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm">
  <div className="space-y-8">
    <div className="pb-6 border-b border-gray-100">
      <h1 className="text-3xl font-bold text-gray-900">Add Job Description</h1>
      <p className="mt-2 text-gray-600">Fill in the details to create a new job posting</p>
    </div>

    {error && (
      <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-start">
        <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        <div>{error}</div>
      </div>
    )}

    <div className="space-y-6">
      {/* <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-500 mb-2">Example: "Senior Frontend Developer"</p>
          <input
            name="title"
            value={addJob.title || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required
          />
        </div>
        
      </div> */}
      <div className="space-y-4 relative">
          
           <p className="text-xs text-gray-500 mb-2">Example: "Senior Frontend Developer"</p>
            <input
            name="title" 
            value={addJob.title || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            required/>
          {showSuggestions&& filteredtitles.length>0&&(
              <ul className=' w-full absolute border'>
          {filteredtitles.slice(0,5).map((title,index) => (
            <div 
            key={index+1}
            name="title"
            className={` w-full bg-white text-lg p-2 hover:bg-gray-400 cursor-pointer`}
            onClick={()=>{setAddJob((prev)=>({...prev,title:title?.JobTitle})),
                          setShowSuggestions(false)
            }}>
              {title?.JobTitle}
            </div>
          ))}
          </ul>
          )}
          
          
          
        </div>
        
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Description <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-500 mb-2">Describe your company and work environment</p>
          <textarea
            name="description"
            value={addJob.description || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            rows={5}
            minLength={30}
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
          <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Job Location
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              name="city"
              type="text"
              value={addJob.location?.city || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Area
            </label>
            <input
              type="text"
              name="area"
              value={addJob.location?.area || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pin Code
            </label>
            <input
              type="number"
              name="pinCode"
              value={addJob.location?.pinCode || ''}
              onChange={handleChange}
              length={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address <span className="text-red-500">*</span>
            </label>
            <input
              name="address"
              value={addJob.location?.address || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button
          type="button"
          onClick={handleContinue}
          disabled={isSubmitting}
          className={`py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Continue'
          )}
        </button>
      </div>
    </div>
  </div>
    
  
   
    </>
  )}
