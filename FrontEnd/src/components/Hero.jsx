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
<div>
    <div className=" flex flex-col items-center justify-evenly  mx-auto sm:my-10 sm:h-[200px] md:h-[300px] bg-purple-800   px-4 sm:px-5   rounded-md w-[90%]">
      <div>
          <h1 className='text-white text-xs sm:text-sm  font-semibold   '>Over 10,000+ jobs are ready</h1>
    </div>
      <div className='text-white  text-xs sm:text-sm md:text-3xl my-2 sm:my-4 min-w-[71%] max-w-2xl mx-auto  '>Your dream job is out there  don’t wait.
          Search now and discover where you belong.
       </div>
      <JobSearch/>

    </div>

    <div className='border border-gray-300 py-8 px-4 max-w-[90%] mx-auto rounded-md my-10'>
        <div className=' grid  grid-cols-2 md:grid-cols-6  w-full place-items-center gap-8'>
        <img className='h-6' src={assets.microsoft_logo}/>
        <img className='h-6' src={assets.walmart_logo}/>
        <img className='h-6' src={assets.accenture_logo}/>
        <img className='h-6' src={assets.amazon_logo}/>
        <img className='h-6' src={assets.samsung_logo}/>
        <img className='h-6' src={assets.adobe_logo}/>
        </div>
    </div>

</div>
  )
}

