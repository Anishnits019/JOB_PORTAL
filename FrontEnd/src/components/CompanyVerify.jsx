import React, { useState } from 'react';
import axios from 'axios';
import {useLocation,useNavigate } from 'react-router-dom';
export const CompanyVerify = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const [credentials, setCredentials] = useState({
  PAN: '',
  CIN: '',
    });
  
  const [errors, setErrors] = useState({
           form:'',
           cin:'',
           pan:''
         });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const upperCaseOnly = value.replace(/[^A-Z0-9]/g, ''); 

    setCredentials((prev) => ({ ...prev, [name]: upperCaseOnly }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const verifyCompany = async () => {
  
    try {

       const response=await axios.post('http://localhost:5000/company/verifyandregister',

        { CIN:credentials.CIN, 
          PAN:credentials.PAN,
          email:state?.email
        },
        { headers: { 'Content-Type': 'application/json' } }

      );

      if(response.data.success){
      navigate('/dashboard', {
        replace: true
      });
    } 
  }
     catch (err) {
     console.log("Full error response:", err);
    if (!err.response) {
    // No internet or server unreachable (most common case)
    setErrors((prev) => ({
        ...prev,
        form: 'Network error - please check your connection.'
    }));
} 
//     else if (err.response?.data?.errors) {
//     // Handle validation errors (e.g., 400 Bad Request)
//     err.response.data.errors.forEach((e) => {
//         if (e.field === 'CIN') setErrors((prev) => ({ ...prev, cin: e.message }));
//         if (e.field === 'PAN') setErrors((prev) => ({ ...prev, pan: e.message }));
//     });
// }
    else if (err.response.status >= 500) {
    // Server crashed (500, 503, etc.)
    setErrors((prev) => ({
        ...prev,
        form: 'Server error. Please try again later.'
    }));
}
     else {
    // Other errors (401, 404, etc.)
    setErrors((prev) => ({
        ...prev,
        form: 'Request failed. Please try again.'
    }));
}
}
  };

  return (
        <div className="min-h-screen">
      {/* Image - Visible on all screens */}
      <div className="lg:hidden w-full px-10 py-10 flex items-center justify-center">{/* Show only on mobile */}
        <img
          src="/document_verification.png"
          alt="Job search"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    <div className="hidden lg:grid grid-cols-2 mt-10 mx-40 ">
  {/* Background image - only on large screens */}
  
  <div className='w-[100%] p-8'>
    <img
    src="/document_verification.png" 
    alt="AWS illustration"
    className="hidden lg:block w-auto opacity-90 pointer-events-none  h-full w -full  rounded-2xl"
  />
  </div>

  
    <div className='m-8 p-8  bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl'>
      {errors.form && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {errors.form}
              </div>
      )}
    <div className="flex justify-center my-8">
      
      <h1 className="text-3xl font-bold text-indigo-700">Insider Jobs</h1>
    </div>

    
    <h2 className="text-xl font-bold text-center mb-6">Login</h2>

   
    <div className="space-y-6">
      
      <div>
        <h3 className="font-medium mb-2">CIN no.</h3>
        <input
          type="text"
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus ${errors.cin? 'ring-red-400':'ring-indigo-400'}`}
          placeholder="Enter your CIN number"
          label="CIN Number"
          name="CIN"
          value={credentials.CIN}
          onChange={handleChange}
          // onFocus={handleFocus}
          maxLength={21}
          required
        />
        {errors.cin && (
                  <p className='text-red-500 text-sm mt-1'>{errors.cin}</p>
                )}
      </div>

      <div>
        <h3 className="font-medium mb-2">Pan</h3>
        <input
          type="text"
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus ${errors.pan? 'ring-red-400':'ring-indigo-400'} `}
          placeholder="Enter your PAN number"
          label="PAN Number"
          name="PAN"
          maxLength={10}
          value={credentials.PAN}
          onChange={handleChange}
          // onFocus={handleFocus}
          required
        />
        {errors.pan && (
                  <p className='text-red-500 text-sm mt-1'>{errors.pan}</p>
                )}
      </div>

      {/* Verify Button */}
      <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200"
      onClick={verifyCompany}>
        Submit Details
      </button>

      
      <div className="border-t border-gray-200 my-6"></div>

      
      <p className="text-center">
        Already have an account?{' '}
        <a href="#" className="text-indigo-600 font-medium hover:underline">
          Sign in to existing AWS
        </a>
      </p>
    </div>
  </div>

</div>
</div>
  
  );
};
