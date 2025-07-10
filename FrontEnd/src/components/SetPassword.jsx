
import React, { useContext, useState,useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/Appcontext';

export const SetPassword= () => {
  const location  = useLocation();
  const navigate = useNavigate();
  const { formData } = useContext(AppContext);
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
         form: '',
         message:[]
       });
  const handlePasswordChange = (e) => {
    const {value}=e.target
    setPassword(value);
    setErrors(prev => ({ ...prev, message: [] }));
  
  }
  useEffect(() => {
      if (!location.state?.email) {
        navigate('/login', { replace: true });
        return;
      }
  
      window.history.pushState(null, '', window.location.pathname);
  
    }, [navigate, location.state?.email]);

  const verifyPassword = async () => {
        const email = location.state?.email;
    try {
      const response=await axios.post(
        'http://localhost:5000/auth/set-password',
        { password:password, email:email},
        { headers: { 'Content-Type': 'application/json' } }
      );
      if(response.data.success){
      navigate('/verify-company', {
        state: { email: email },
          replace: true

      });
    }
      
    } 
    catch (err) {
      if (!err.response) {

      setErrors((prev)=>
        ({...prev,
        form:'Network error - please check your connection'}));
      } 

      else if (err.response.data?.errors) {
      setErrors(prev => ({
      ...prev,
      message: err.response.data.errors
      .filter(e => e.field === 'password')
      .map(e => e.message)
      }));
      }

      else if (err.response.status >= 500) {
      setErrors((prev) => ({
        ...prev,
        form: 'Server error. Please try again later.'}));
      }
      else {
      setErrors((prev)=>({...prev,
        message: [err.response.data.message]
      }))
      }
    } 
  }
  return (
    <div className="min-h-screen">
      {/* Mobile View */}
      <div className="lg:hidden w-full px-10 py-10 flex items-center justify-center">
        <img
          src="/enter-otp-concept-illustration_86047-735.avif"
          alt="Password verification"
          className="w-full h-auto rounded-2xl"
        />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-2 mt-10 mx-40">
        <div className='w-[100%] p-8'>
          <img
            src="/enter-otp-concept-illustration_86047-735.avif" 
            alt="Password verification"
            className="hidden lg:block w-auto opacity-90 h-full rounded-2xl"
          />
        </div>

        <div className="m-8 lg:m-12 p-8 lg:p-12 bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl">
          {errors.form && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {errors.form}
            </div>
          )}

          <div className="flex justify-center my-8">
            <h1 className="text-3xl font-bold text-indigo-700">Insider Jobs</h1>
          </div>

          <h2 className="text-xl font-bold text-center mb-6">Password Verification</h2>
          <div className="space-y-1 text-center">
            <p>Secure your account with a strong password.</p>
            <p className="mt-2">
              {location.state?.email}
            </p>
          </div>

          <div className="space-y-6 mt-6">
            <div>
              <label className="font-medium mb-2 block">Password</label>
              <input
                type="password"
                className={`w-full p-3 border ${
                  errors.message.length>0 || errors.form ? 'border-red-400' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-indigo-400`}
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              {errors.message.length>0 && (
                errors.message.map((msg,index)=>(
                <p className='text-red-500 text-sm mt-1' key={index}>
                    {msg}
                </p>
              )))}
            </div>

            <button
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg disabled:opacity-70"
              onClick={verifyPassword}
            >
               Verify Password
            </button>

            <div className="border-t border-gray-200 my-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

