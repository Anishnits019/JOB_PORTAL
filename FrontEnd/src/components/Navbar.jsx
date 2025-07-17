import React ,{useContext}from 'react';
import { AppContext } from '../context/Appcontext';
import { assets } from '../assets/assets';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { JobSearch } from './JobSearch';

export function Navbar() {
  const { openSignIn } = useClerk();
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();
   const {isSearched}=useContext(AppContext)
  

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-8 md:px-14 py-6 border-b border-gray-200 bg-white shadow-sm'>
      {/* Logo (clickable to go home) */}
      <div className='w-20 sm:w-28 md:w-36 cursor-pointer' onClick={() => navigate('/')}>
        <img 
          src={assets.logo} 
          className='w-full h-auto object-contain' 
          alt="Company Logo"
        />
      </div>
       {isSearched&&<JobSearch/>}
      {/* Right-side buttons */}
      <div className='flex items-center gap-4'>
        {isSignedIn ? (
          <>
            <Link 
              to="/applied-jobs" 
              className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              My Applications
            </Link>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-sm text-gray-600">
                Hi, {user.firstName || "User"}!
              </span>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  }
                }}
              />
            </div>
          </>
        ) : (
          <div className='flex gap-3'>
            <button
              onClick={() => navigate('/employer_login')}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors border border-gray-300"
            >
              Employer Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
               Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}