import React,{useState,useEffect,useContext,useRef} from 'react'
import {assets} from '../assets/assets'
import {jobsData} from '../assets/assets'
import { AppContext } from '../context/Appcontext'
import {useNavigate} from 'react-router-dom'
import { JobSearch } from './JobSearch'
export const Search = () => {
 const {searchFilter,setSearchFilter,setIsSearched,filteredJobs,searchJobs}=useContext(AppContext)
const titleRef=useRef(null)
const locationRef=useRef(null)
const navigate=useNavigate()
    const handleSearch=()=>{
        
        setSearchFilter(
            {
                title:titleRef.current.value,
                location:locationRef.current.value
            }
        )
            const title=titleRef.current.value
            const location=locationRef.current.value
           
            searchJobs(title,location)
            setIsSearched(true)
            navigate('/search-jobs')
    }
  return (
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
    {/* Hero Section */}
    <section className="relative flex flex-col items-center justify-center mx-auto my-8 sm:my-16 min-h-[320px] bg-gradient-to-br from-indigo-900 to-purple-800 px-6 py-12 rounded-2xl overflow-hidden w-full">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400 rounded-full mix-blend-overlay blur-xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl w-full">
        <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium tracking-wider px-4 py-2 rounded-full mb-6">
          OVER 10,000+ PREMIUM JOBS WAITING
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Find Your <span className="text-indigo-200">Dream Job</span> Today
        </h1>
        
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Join leading companies and take the next step in your career journey.
        </p>
        
        <div className="w-full max-w-2xl mx-auto">
          <JobSearch />
        </div>
      </div>
    </section>

    {/* Trusted By Section */}
    <section className="bg-white border border-gray-100 py-12 px-6 rounded-2xl shadow-sm my-12">
      <div className="text-center mb-8">
        <h2 className="text-sm font-semibold text-gray-500  tracking-wider uppercase  hover:text-blue-600 mb-2">
          Trusted by the world's best companies
        </h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {[assets.microsoft_logo, assets.walmart_logo, assets.accenture_logo, 
          assets.amazon_logo, assets.samsung_logo, assets.adobe_logo].map((logo, index) => (
          <div key={index} className="flex justify-center p-3 grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              className="h-8 object-contain opacity-80 hover:opacity-100" 
              src={logo} 
              alt="Company logo"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  </div>
)
}

