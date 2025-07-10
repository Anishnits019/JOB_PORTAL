import React, { useContext, useCallback, useState } from 'react';
import { AppContext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import axios from 'axios';

// Constants for maintainability
const LOCATION_FIELDS = ['city', 'area', 'pinCode', 'address'];

export const AddJobs = () => {
  const { addJob, setAddJob } = useContext(AppContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Memoized change handler for better performance
  

  const handleContinue = useCallback(async () => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Validate required fields
      if (!addJob.title || !addJob.description || 
          !addJob.location?.city || !addJob.location?.address) {
        throw new Error('Please fill all required fields');
      }

      const response = await axios.post(
        'http://localhost:5000/company/add-job',
        addJob,
        {
          headers: { 
            'Content-Type': 'application/json',
            
          }
        }
      );
      
      if (response.data.success) {
        navigate('/add-job-details');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.response?.data?.message || err.message || 'Failed to submit job');
    } finally {
      setIsSubmitting(false);
    }
  }, [addJob, navigate]);

  return (
    <>
      <Navbar/>
      <div className="w-[60%] mx-auto p-6 bg-white rounded-lg">
        <div className="min-h-screen">
          <div className="py-6 px-4">
            <h1 className="text-4xl text-left font-bold">Add Job Description</h1>
          </div>

          <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg mt-8">
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}

            <div className="mb-8">
              <div className="mb-4">
                <label className="block text-gray-800 text-xl font-medium mb-2">
                  Company Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={addJob.description || ''}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  rows={4}
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-4">
                <label className="block text-gray-800 font-medium mb-2">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  name="title"
                  value={addJob.title || ''}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Job Location</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="city"
                    value={addJob.location?.city || ''}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Area
                  </label>
                  <input
                    name="area"
                    value={addJob.location?.area || ''}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Pin Code
                  </label>
                  <input
                    name="pinCode"
                    value={addJob.location?.pinCode || ''}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-800 font-medium mb-2">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="address"
                    value={addJob.location?.address || ''}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleContinue}
                disabled={isSubmitting}
                className={`py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg transition duration-200 w-full ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};