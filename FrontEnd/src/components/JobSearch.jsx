import React,{useState,useEffect,useContext,useRef} from 'react'
import {assets} from '../assets/assets'
import {jobsData} from '../assets/assets'
import { AppContext } from '../context/Appcontext'
import {useNavigate} from 'react-router-dom'
export const JobSearch = () => {
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
            const city=locationRef.current.value
           
            searchJobs(title,city)
            setIsSearched(true)
            navigate('/search-jobs')
    }

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 space-x-4">
      {/* Company Logo */}
      <img src={assets.logo} alt="SimplyHired Logo" className="h-8 w-auto mx-8" />

      {/* Search Inputs */}
      <div className="flex flex-1 items-center space-x-12">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-1">
          <img src={assets.search_icon} alt="Search" className="h-5 w-5 text-gray-500 mr-2 shrink-0" />
          <input
            ref={titleRef}
            type="text"
            placeholder="Job title or keyword"
            className="bg-transparent outline-none flex-1 text-md p-3"
          />
        </div>

        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-1">
          <img src={assets.location_icon} alt="Location" className="h-5 w-5 text-gray-500 mr-2 shrink-0" />
          <input
            ref={locationRef}
            type="text"
            placeholder="Location"
            className="bg-transparent outline-none flex-1 text-md p-3"
          />
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
      >
        Search
      </button>
    </div>
  );
};

  


