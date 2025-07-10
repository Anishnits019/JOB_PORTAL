import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../components/Navbar";

export const ApplyJob = () => {
  const {id}=useParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    correspondence_address: '',
    permanent_address: '',
    educational_qualification: '',
    experience: '',
    current_salary:'',
    expected_salary:'',
    // resume: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applied, setApplied] = useState(false);

  const handleChange = (e) => {
    const { name, value,  } = e.target;
    setFormData(prev => ({
      ...prev,
      [name] : value
    }));
  }; 
    const handleSubmit=async()=>{
          e.preventDefault();
      try{
      const response = await axios.post(`http://localhost:5000/job/${id}/apply-job`, {
          ...formData,
          jobId: id  // Include job ID in the payload
        }, {
        headers: {
          'Content-Type': 'application/json'  // Change to JSON
        }
      });


      if (response.status === 200) {
        console.log('done')
        setApplied(true);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (applied) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-md">
        <div className="text-center p-8 border-2 border-green-200 rounded-lg bg-green-50">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Application Submitted Successfully!</h3>
          <p className="text-gray-600">Thank you for applying to {jobData?.companyName || 'our company'}.</p>
          <p className="mt-2 text-sm text-gray-500">We'll review your application and get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 border border-gray-100">
        {/* <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Job Application</h2>
          {jobData?.companyName && (
            <p className="text-gray-600 mt-1">Applying to: {jobData.companyName}</p>
          )}
          {jobData?.jobTitle && (
            <p className="text-gray-600">Position: {jobData.jobTitle}</p>
          )}
        </div> */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-medium text-gray-900 bg-gray-100 p-2 mb-4  border-b border-gray-800">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth*</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-medium text-gray-900 bg-gray-100 p-2 mb-4  border-b border-gray-800">
                Address Information
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correspondence Address*</label>
                  <textarea
                    name="correspondence_address"
                    value={formData.correspondence_address}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Permanent Address*</label>
                  <textarea
                    name="permanent_address"
                    value={formData.permanent_address}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-medium text-gray-900 bg-gray-100 p-2 mb-4  border-b border-gray-800">
                Professional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Educational Qualification*</label>
                  <input
                    type="text"
                    name="educational_qualification"
                    value={formData.educational_qualification}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience*</label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
  {/* Experience Field */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Current Salary* (Annual)
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500">₹</span>
      </div>
      <input
        type="number"
        name="current_salary"
        value={formData.current_salary}
        onChange={handleChange}
        min="0"
        step="100000"
        placeholder="300000"
        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
      
    </div>
    <p className="mt-1 text-xs text-gray-500">
      Your current annual compensation
    </p>
  </div>

  {/* Expected Salary Field */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Expected Salary* (Annual)
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500">₹</span>
      </div>
      <input
        type="number"
        name="expected_salary"
        value={formData.expected_salary}
        onChange={handleChange}
        min="0"
        step="100000"
        placeholder="400000"
        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      </div>
    </div>
    <p className="mt-1 text-xs text-gray-500">Annual salary expectation</p>
  </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Resume Upload
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume (PDF/DOC)*</label>
                <div className="mt-1 flex items-center">
                  <label className="flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 hover:bg-gray-50 transition">
                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <span className="text-sm font-medium">
                      {formData.resume ? formData.resume.name : 'Choose file'}
                    </span>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </label>
                </div>
                <p className="mt-1 text-xs text-gray-500">PDF or DOC/DOCX (Max. 5MB)</p>
              </div>
            </section>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : 'Submit Application'}
            </button>
            
           
          </div>
        </form>
      </div>
    </div>
    </>
  );
};