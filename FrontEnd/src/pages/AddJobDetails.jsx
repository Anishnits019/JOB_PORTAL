
import React, { useContext, useState,} from 'react';
import { useNavigate,useParams} from 'react-router-dom';
import { AppContext } from '../context/Appcontext';
import { Navbar } from '../components/Navbar';
import axios from 'axios';

export const AddJobDetails = () => {
  const navigate = useNavigate();
  const {jobId}=useParams();
  const { addJob, setAddJob } = useContext(AppContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const categories={
    FullTime: 'Full Time',
    Permanent: 'Permanent',
    Freelance: 'Freelance',
    Contract:  'Contract',
    Temporary: 'Temporary',
    Volunteer: 'Volunteer'
  } 
  const timings={
    DayShift: 'Day Shift',
    MorningShift: 'Morning Shift',
    RotationalShift: 'Rotational Shift',
    NightShift: 'Night Shift',
    EveningShift: 'Evening Shift',
    WeekendAvailability:'Weekend Availability',
    FixedShift: 'Fixed Shift'
  }
  const [jobType, setJobType] = useState({
    FullTime: false,
    Permanent: false,
    Freelance: false,
    Contract: false,
    Temporary: false,
    Volunteer: false
  });

  const [jobTimings, setJobTimings] = useState({
    DayShift: false,
    MorningShift: false,
    RotationalShift: false,
    NightShift: false,
    EveningShift: false,
    WeekendAvailability: false,
    FixedShift: false
  });

  const handleJobType = (key) => {
    const newState = { ...jobType, [key]: !jobType[key] };
    setJobType(newState);
    setAddJob((prev) => ({
      ...prev,
      category: newState[key]
        ? [...prev.category, categories[key]]
        : prev.category.filter((item) => item !== categories[key])
    }));
  };

  const handleJobTimings = (key) => {
    const newState = { ...jobTimings, [key]: !jobTimings[key] };
    setJobTimings(newState);
    setAddJob((prev) => ({
      ...prev,
      timings: newState[key]
        ? [...prev.timings, timings[key]]
        : prev.timings.filter((item) => item !== timings[key])
    }));
  };

  const handlePostings = (e) => {
    const { value } = e.target;
    setAddJob((prev) => ({
      ...prev,
      postings: value
    }));
  };

  const handleRecruitemnetTime = (e) => {
    const { value } = e.target;
    setAddJob((prev) => ({
      ...prev,
      recruitment: value
    }));
  };

  const handleContinue = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.patch(
  `${import.meta.env.VITE_BASE_URL}/company/job/${jobId}/details`,
  {
    jobData: addJob,
    jobId: jobId
  },
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
);

      if(response.data.success){
        navigate(`/job/${jobId}/benefits`);
      } 
    } catch (err) {
      console.error('Error saving job:', err);
    }
    finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-[60%] mx-auto p-6 bg-white rounded-lg">
        <div className="min-h-screen">
          <div className="py-6 px-4">
            <h1 className="text-3xl font-bold text-black">Add Job Description</h1>
          </div>

          <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg mt-4">
            {/* Job Type */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-4">Job Type</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.entries(categories).map(([key,label]) => (
                  <div
                    key={key}
                    onClick={() => handleJobType(key)}
                    className={`flex items-center whitespace-nowrap rounded-full px-4 py-2 cursor-pointer ${
                      jobType[key]
                        ? 'border-2 border-black bg-white'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-black mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {jobType[key] ? (
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      )}
                    </svg>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              {/* Job Timings */}
              <h2 className="text-xl font-bold text-black mb-4">Timings</h2>
              <div className="flex flex-wrap gap-3">
            {Object.entries(timings).map(([key,label]) => (
                  <div
                    key={key}
                    onClick={() => handleJobTimings(key)}
                    className={`flex items-center whitespace-nowrap rounded-full px-4 py-2 cursor-pointer ${
                      jobTimings[key]
                        ? 'border-2 border-black bg-white'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-black mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {jobTimings[key] ? (
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      )}
                    </svg>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Details */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-4">Job Details</h2>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2">Number of Postings</label>
                <input
                  name="postings"
                  value={addJob.postings}
                  onChange={handlePostings}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="mb-4">
                <label className="block text-black font-bold mb-2">Recruitment Time</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  onChange={handleRecruitemnetTime}
                  value={addJob.recruitment}
                >
                  {[
                    'Less than 1 week',
                    'Between 3-4 weeks',
                    'Within two months',
                    'More than 3 months'
                  ].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit */}
            
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
      </div>
    </>
  );
};




// Reusable input field component

