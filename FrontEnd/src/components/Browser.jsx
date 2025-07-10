import React,{useState} from 'react';
import { companies, locations, jobTitles } from '../assets/assets';
import { useClerk,useUser,UserButton} from '@clerk/clerk-react'
export const Browser = () => {
        const { openSignIn,openUserProfile } = useClerk()

  const [showBrowser,setShowBrowser]=useState(true)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 border border-gray-200 rounded-md">
     
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Browse Opportunities</h1>

      {showBrowser?

      (
      <div>
      <button  className='center border border-blue-500' onClick={(e)=>(setShowBrowser((prev)=>!prev))} >
        <svg
       data-slot="icon" fill="none" stroke-width="2.5" stroke="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="60"
    height="60" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
      </svg></button>
      </div>)
      :(
      <>
      <button className='border border-blue-500 rounded-lg' onClick={(e)=>(setShowBrowser((prev)=>!prev))}><svg data-slot="icon" fill="none" stroke-width="2.5" stroke="blue" width="60"
    height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
     <path stroke-linecap="round" stroke-linejoin="round"  d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
       </svg></button>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Jobs Column */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="bg-purple-800    p-4">
            <h1 className="text-xl font-semibold text-white text-center">Job Titles</h1>
          </div>
          <div className="p-4">
            {jobTitles.slice(0, 15).map((job, index) => (
              <div 
                key={`job-${index}`}
                className="py-2 px-3 mb-1 rounded hover:bg-blue-50 cursor-pointer transition-colors duration-200 flex items-center"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-gray-700 hover:text-blue-600">{job}</span>
              </div>
            ))}
            <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium">
              View all job titles →
            </button>
          </div>
        </div>

        {/* Locations Column */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="bg-purple-800 p-4">
            <h1 className="text-xl font-semibold text-white text-center">Locations</h1>
          </div>
          <div className="p-4">
            {locations.slice(0, 15).map((loc, index) => (
              <div 
                key={`loc-${index}`}
                className="py-2 px-3 mb-1 rounded hover:bg-green-50 cursor-pointer transition-colors duration-200 flex items-center"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-gray-700 hover:text-green-600">{loc}</span>
              </div>
            ))}
            <button className="mt-3 text-green-600 hover:text-green-800 text-sm font-medium">
              View all locations →
            </button>
          </div>
        </div>

        {/* Companies Column */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="bg-purple-800 p-4">
            <h1 className="text-xl font-semibold text-white text-center">Companies</h1>
          </div>
          <div className="p-4">
            {companies.slice(0, 15).map((comp, index) => (
              <div 
                key={`comp-${index}`}
                className="py-2 px-3 mb-1 rounded hover:bg-purple-50 cursor-pointer transition-colors duration-200 flex items-center"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-gray-700 hover:text-purple-600">{comp}</span>
              </div>
            ))}
            <button className="mt-3 text-purple-600 hover:text-purple-800 text-sm font-medium">
              View all companies →
            </button>
          </div>
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style jsx>{`
        .hover\:shadow-lg {
          transition: box-shadow 0.3s ease;
        }
        .transition-colors {
          transition: background-color 0.2s ease, color 0.2s ease;
        }
      `}</style>
      </>)}
      
      
    </div>
  );
};