import React,{useState,useEffect,useContext,useRef} from 'react'
import {assets} from '../assets/assets'
import {jobsData} from '../assets/assets'
import { AppContext } from '../context/Appcontext'
import {useNavigate} from 'react-router-dom'
export const JobSearch = () => {
 const {searchFilter,setSearchFilter,isSearched,setIsSearched,filteredJobs,searchJobs}=useContext(AppContext)
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
            const city=locationRef.current.value
           
            searchJobs(title,city)
            setIsSearched(true)
            console.log(isSearched)
            navigate('/search-jobs')
    }

  return (
  <div className="flex items-center bg-white rounded-xl shadow-lg p-2 space-x-4 border border-gray-100">
    {/* Search Inputs */}
    <div className="flex flex-1 items-center space-x-4">
      {/* Job Title Search */}
      <div className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg px-4 py-3 flex-1 transition-all duration-200 border border-gray-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
        <img 
          src={assets.search_icon} 
          alt="Search" 
          className="h-5 w-5 text-gray-400 mr-3 shrink-0" 
        />
        <input
          ref={titleRef}
          type="text"
          placeholder="Job title or keyword"
          className="bg-transparent outline-none flex-1 text-md placeholder-gray-400 text-gray-700"
        />
      </div>

      {/* Location Search */}
      <div className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg px-4 py-3 flex-1 transition-all duration-200 border border-gray-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
        <img 
          src={assets.location_icon} 
          alt="Location" 
          className="h-5 w-5 text-gray-400 mr-3 shrink-0" 
        />
        <input
          ref={locationRef}
          type="text"
          placeholder="Location"
          className="bg-transparent outline-none flex-1 text-md placeholder-gray-400 text-gray-700"
        />
      </div>
    </div>

    {/* Search Button */}
    <button
      onClick={handleSearch}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 shadow-sm hover:shadow-md"
    >
      Find Jobs
    </button>
  </div>
);
};

  


