import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/Appcontext';

export const OtpVerify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = useContext(AppContext);
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({
    otp: '',
    form: '',
    message: ''
  });

  // Block unauthorized access and back navigation
  useEffect(() => {
    // Check if email exists in state (prevent direct access)
    if (!location.state?.email) {
      navigate('/login', { replace: true });
      return;
    }

    window.history.pushState(null, '', window.location.pathname);

  }, [navigate, location.state?.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtp(value);
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const otpverify = async () => {
    const email = location.state?.email;
    try {
      const response =await axios.post(
        'http://localhost:5000/auth/verify-email',
        { otp: otp, email: email },
        { headers: { 'Content-Type': 'application/json' } }
      );
       if(response.data.success){
      navigate('/set-password', {
        state: { email:email },
        replace: true
      });
    }

    } catch (err) {
      console.log(err);
      if (!err.response) {
        setErrors((prev) => ({
          ...prev,
          form: 'Network error - please check your connection.'
        }));
      } else if (err.response.data?.errors) {
        err.response.data.errors.forEach((e) => {
          if (e.field === 'otp') setErrors((prev) => ({ ...prev, otp: e.message }));
        });
      } else if (err.response.status >= 500) {
        setErrors((prev) => ({
          ...prev,
          form: 'Server error. Please try again later.'
        }));
      } else {
        setErrors((prev) => ({ ...prev, otp: err.response.data.message }));
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Image - Visible on all screens */}
      <div className="lg:hidden w-full px-10 py-10 flex items-center justify-center">
        <img
          src="/enter-otp-concept-illustration_86047-735.avif"
          alt="Job search"
          className="w-full h-auto rounded-2xl"
        />
      </div>

      <div className="hidden lg:grid grid-cols-2 mt-10 mx-40">
        {/* Background image - only on large screens */}
        <div className='w-[100%] p-8'>
          <img
            src="/enter-otp-concept-illustration_86047-735.avif" 
            alt="AWS illustration"
            className="hidden lg:block w-auto opacity-90 pointer-events-none h-full w-full rounded-2xl"
          />
        </div>

        <div className="m-8 lg:m-12 p-8 lg:p-12 bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl">
          {errors.form && <p className='text-red-500 text-sm mt-3'>{errors.form}</p>}

          <div className="flex justify-center my-8">
            <h1 className="text-3xl font-bold text-indigo-700">Insider Jobs</h1>
          </div>

          <h2 className="text-xl font-bold text-center mb-6">Sign Up</h2>
          <div className="space-y-1 text-center">
            <p>Making sure you are secure — it's what we do.</p>
            <p className="mt-2">
              We sent a verification code to {location.state?.email} (not you?)
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Verification Code</h3>
              <input
                type="text"
                className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${errors.otp ? 'ring-red-400' : 'ring-indigo-400'}`}
                placeholder="Enter your verification code"
                value={otp}
                name='otp'
                onChange={handleChange}
                maxLength={6}
              />
              {errors.otp && <p className='text-red-500 text-sm mt-3'>{errors.otp}</p>}
            </div>

            <button 
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200"
              onClick={otpverify}
            >
              Verify
            </button>

            <div className="border-t border-gray-200 my-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};