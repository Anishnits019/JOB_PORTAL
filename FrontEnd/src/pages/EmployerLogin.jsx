import React, { useState,useEffect,useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoadingSpinner } from '../components/Loading';
export const EmployerLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [message,setMessage]=useState('')
  const [errors, setErrors] = useState({
    email: '',
    form: ''
  });
  const [isLoading,setIsLoading]=useState(false); 

  const navigate = useNavigate();
  const {fetchCompany,company}=useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
   useEffect(()=>{
          setIsLoading(true);
          const timer=setTimeout(() => {
            setIsLoading(false);
          }, 400);
          return ()=>clearTimeout(timer);
        },[])
        console.log(company);
  useEffect(()=>{
        fetchCompany()
        if(company){
          navigate('/dashboard',{replace:true});
        }

      },[navigate])
  const LoginEmployee = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
  `${import.meta.env.VITE_BASE_URL}/auth/employeer-login`,
  { 
    email: formData.email,
    password: formData.password
  },
  { 
    headers: { 'Content-Type': 'application/json' } 
  }
);

      if(response.data.success){
      navigate('/dashboard',{ replace: true })
    }
    } catch (err) {
             
    if (!err.response) {
    // No internet or server unreachable (most common case)
    setErrors((prev) => ({
        ...prev,
        form: 'Network error - please check your connection.'
    }));
} 
    else if (err.response.data?.errors) {
    // Handle validation errors (e.g., 400 Bad Request)
    err.response.data.errors.forEach((e) => {
        if (e.field === 'email') setErrors((prev) => ({ ...prev, email: e.message }));
    });
}
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

  }
  console.log(company);
      if(isLoading) return <LoadingSpinner fullscreen={true}/>
 
return (
    <>
      <div className="min-h-screen">
        
        {/* Image - Visible on all screens */}
        <div className="lg:hidden w-full px-10 py-10 flex items-center justify-center">
          <img
            src="/undraw_secure-login_m11a.svg"
            alt="Job search"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        
        <div className="hidden lg:grid grid-cols-2 mt-10 mx-40">
          {/* Background image - only on large screens */}
          <div className='w-[100%] p-8'>
            <img
              src="/undraw_secure-login_m11a.svg" 
              alt="AWS illustration"
              className="hidden lg:block w-auto opacity-90 pointer-events-none h-full rounded-2xl"
            />
          </div>

          {/* Form Column */}
          <div className='m-8 p-8 bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl'>
            <div className="flex justify-center my-8">
              <h1 className="text-3xl font-bold text-indigo-700">Insider Jobs</h1>
            </div>

            <h2 className="text-xl font-bold text-center mb-6">Login</h2>

            {/* Display form-level error if exists */}
            {errors.form && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {errors.form}
              </div>
            )}

            <div className="space-y-6">
              {/* Name Field */}
              

             {/* Email Field */}
              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <input
                  type="email"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 ring-red-400' : 'border-gray-300 ring-indigo-400'
                  }`}
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                )}
              </div>
              <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.password ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
                }`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

              {/* Verify Button */}
              <button 
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200 disabled:opacity-70"
                onClick={LoginEmployee}
              >
                {'Login'}
              </button>

              <div className="border-t border-gray-200 my-6"></div>

              <p className="text-center">
                Doesn't  have an account?{' '}
                <button 
                onClick={()=>(navigate('/employer-signup'))} className="text-indigo-600 font-medium hover:underline">
                  Create a new account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};