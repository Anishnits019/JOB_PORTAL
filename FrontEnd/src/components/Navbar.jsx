import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/Appcontext';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import axios from 'axios';
export function Navbar() {
  const { openSignIn } = useClerk();
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();
  const { company,setCompany } = useContext(AppContext);
  const [showProfile,setShowProfile]=useState(false);
  const handleLogout=async()=>{
    const response=await axios.post('http://localhost:5000/auth/employeer-logout',{
      withCredentials: true, // Needed for cookies/sessions
    } 
    )
    if(response.data.success){
      setCompany(null); 
      setShowProfile(false);
      navigate('/',{replace:true});
    }
  }
  const [isGuestMode, setIsGuestMode] = useState(true);
  const [isUserMode, setIsUserMode] = useState(false);
  const [isEmployerMode, setIsEmployerMode] = useState(false);
  
  
  useEffect(() => {
    if (!isLoaded) return;

    setIsGuestMode(true);
    setIsUserMode(false);
    setIsEmployerMode(false);

    if (company) {
      setIsEmployerMode(true);
      setIsGuestMode(false); 
    } else if (isSignedIn) {
      setIsUserMode(true);
      setIsGuestMode(false); 
    }
  }, [isLoaded, isSignedIn, company]);

  if (!isLoaded) return null;

  return (
    <div className='flex justify-between items-center px-4 sm:px-8 md:px-14 py-6 border-b border-gray-200 bg-white shadow-sm'>
      
      {/* Logo */}
      <div 
        className='w-20 sm:w-28 md:w-36 cursor-pointer' 
        onClick={() => navigate('/')}
      >
        <img src={assets.logo} className='w-full h-auto object-contain' alt="Company Logo"/>
      </div>

      {/* Right-side Buttons / Links */}
      <div className='flex items-center gap-4'>

        {/* Employer Mode */}
        {isEmployerMode && (
          <div className="flex items-center gap-4 relative ">
            <button 
            onClick={()=>setShowProfile((prev)=>!prev)} className="font-medium text-gray-700">{company?.name}</button>
            {showProfile&&(
                <div className="z-4 absolute top-10 " >
                  <button onClick={handleLogout}className='p-4 bg-blue-700'>LogOut</button>
              </div>
          )}
          </div>
          
        )}

        {/* User Mode */}
        {isUserMode && (
          <div className="flex items-center gap-4">
            <Link 
              to="/applied-jobs" 
              className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              My Applications
            </Link>
            <span className="hidden sm:inline text-sm text-gray-600">
              Hi, {user?.firstName || "User"}!
            </span>
            <UserButton afterSignOutUrl="/" />
          </div>
        )}

        {/* Guest Mode */}
        {isGuestMode && (
          <div className='flex gap-3'>
            <button
              onClick={() => navigate('/employer_login')}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Employer Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
               Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
