import React, { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { FiUpload, FiX, FiFileText, FiCheck } from "react-icons/fi";

export const ApplyJob = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    correspondence_address: '',
    permanent_address: '',
    educational_qualification: '',
    experience: '',
    current_salary: '',
    expected_salary: '',
    resume: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applied, setApplied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState('');

  // Drag and drop handlers
  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    setUploadError('');
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileValidation(files[0]);
    }
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileValidation(e.target.files[0]);
    }
  };

  const handleFileValidation = (file) => {
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!validTypes.includes(file.type)) {
      setUploadError('Only PDF, DOC, and DOCX files are allowed');
      return false;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must be less than 5MB');
      return false;
    }
    
    setFormData(prev => ({ ...prev, resume: file }));
    setUploadError('');
    return true;
  };

  const removeResume = () => {
    setFormData(prev => ({ ...prev, resume: null }));
    setUploadError('');
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value 
    }));
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.resume) {
      setUploadError('Resume is required');
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    });
    formDataToSend.append('jobid', id);

    try {
      const response = await axios.post(
        `http://localhost:5000/job/${id}/apply-job`, 
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data'  
          }
        }
      );

      if (response.status === 200) {
        setApplied(true);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setUploadError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (applied) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-md">
        <div className="text-center p-8 border-2 border-green-200 rounded-lg bg-green-50">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <FiCheck className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Application Submitted Successfully!</h3>
          <p className="text-gray-600">Thank you for your application.</p>
          <p className="mt-2 text-sm text-gray-500">We'll review your application and get back to you soon.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <section>
              <h3 className="text-lg font-medium text-gray-900 bg-gray-100 p-2 mb-4 border-b border-gray-800">
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

            {/* Address Information Section */}
            <section>
              <h3 className="text-lg font-medium text-gray-900 bg-gray-100 p-2 mb-4 border-b border-gray-800">
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

            {/* Professional Information Section */}
            <section>
              <h3 className="text-lg font-medium text-gray-900 bg-gray-100 p-2 mb-4 border-b border-gray-800">
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
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Annual salary expectation</p>
                </div>
              </div>
            </section>
            
            {/* Resume Upload Section */}
            <section>
              <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Resume Upload
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume (PDF/DOC/DOCX)*
                </label>
                
                {/* Drag and Drop Area */}
                <div 
                  className={`mt-1 border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                    isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {!formData.resume ? (
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <FiUpload className="w-12 h-12 text-gray-400" />
                      <p className="text-gray-700">
                        {isDragging ? 'Drop your resume here' : 'Drag & drop your resume'}
                      </p>
                      <p className="text-sm text-gray-500">or</p>
                      <label className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition">
                        Browse Files
                        <input 
                          type="file" 
                          className="hidden" 
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx" 
                        />
                      </label>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="flex items-center bg-white p-4 rounded-lg border border-gray-200 w-full max-w-md">
                        <FiFileText className="w-8 h-8 text-blue-500 mr-3" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{formData.resume.name}</p>
                          <p className="text-sm text-gray-500">
                            {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button 
                          onClick={removeResume}
                          className="ml-4 text-gray-400 hover:text-red-500 transition"
                        >
                          <FiX className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-sm text-green-600 flex items-center">
                        <FiCheck className="mr-1" /> File ready for submission
                      </p>
                    </div>
                  )}
                </div>
                {uploadError && (
                  <p className="mt-2 text-sm text-red-600">{uploadError}</p>
                )}
              </div>
            </section>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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