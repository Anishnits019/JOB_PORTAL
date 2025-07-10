import {useContext,useEffect} from 'react'
import { assets, locations,categories,benefits,incentives,timings } from '../assets/assets'
import { AppContext } from '../context/Appcontext'
import { useNavigate } from 'react-router-dom'
import { JobSearch } from '../components/JobSearch'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import {LoadingSpinner} from '../components/Loading'
// import { JobCardSkeleton } from '../components/Loading'
import { useState } from 'react'
export const Joblisting = () => {
const {isSearched,searchFilter,setSearchFilter,
  page,setPage,filteredJobs,
  handleLocationFilter,handleTimingFilter, 
  handleCategoryFilter, handleBenefitFilter, 
  handleIncentiveFilter,isloading}=useContext(AppContext)
const [isLoading,setIsLoading]=useState(false)
const navigate=useNavigate();
useEffect(() => {
      setIsLoading(true)
      const timer = setTimeout(() => {
      setIsLoading(false)
    }, 400) // Simulate loading time
    
    return () => clearTimeout(timer)
  }, [page,
  handleLocationFilter,handleTimingFilter, 
  handleCategoryFilter,handleBenefitFilter, 
  handleIncentiveFilter])
 return (
<div className="bg-gray-50 min-h-screen">
  {isLoading&&<LoadingSpinner/>}
  <Navbar />
  
  <div className='flex w-[90%] mx-auto my-6 gap-6'>
    {/* Filters Sidebar */}
    <div className='w-[20%] bg-white border border-gray-200 rounded-lg shadow-sm p-4 h-fit sticky top-4'>
  <h1 className='text-left text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200'>All Filters</h1>
  
  {/* Location Filter */}
  <div className="max-lg:hidden mb-4">
    <h4 className='font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-100'>Location</h4>
    <ul className='space-y-2'>
      {locations.map((location, index) => (
        <li key={index} className='flex items-center'>
          <input
            id={`location-${index}`}
            type='checkbox'
            value={location}
            onChange={handleLocationFilter}
            className='h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500'
          />
          <label htmlFor={`location-${index}`} className='ml-2 text-sm text-gray-700'>
            {location}
          </label>
        </li>
      ))}
    </ul>
  </div>  
  
  {/* Schedule Filter */}
  <div className="max-lg:hidden mb-4">
    <h4 className='font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-100'>Schedule</h4>
    <ul className='space-y-2'>
      {timings.map((timing, index) => (
        <li key={index} className='flex items-center'>
          <input
            id={`timing-${index}`}
            type='checkbox'
            value={timing}
            onChange={handleTimingFilter}
            className='h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500'
          />
          <label htmlFor={`timing-${index}`} className='ml-2 text-sm text-gray-700'>
            {timing}
          </label>
        </li>
      ))}
    </ul>
  </div>
  
  {/* Categories Filter */}
  <div className="max-lg:hidden mb-4">
    <h4 className='font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-100'>Categories</h4>
    <ul className='space-y-2'>
      {categories.map((category, index) => (
        <li key={index} className='flex items-center'>
          <input
            id={`category-${index}`}
            type='checkbox'
            value={category}
            onChange={handleCategoryFilter}
            className='h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500'
          />
          <label htmlFor={`category-${index}`} className='ml-2 text-sm text-gray-700'>
            {category}
          </label>
        </li>
      ))}
    </ul>
  </div>
  
  {/* Benefits Filter */}
  <div className="max-lg:hidden mb-4">
    <h4 className='font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-100'>Benefits</h4>
    <ul className='space-y-2'>
      {benefits.map((benefit, index) => (
        <li key={index} className='flex items-center'>
          <input
            id={`benefit-${index}`}
            type='checkbox'
            value={benefit}
            onChange={handleBenefitFilter}
            className='h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500'
          />
          <label htmlFor={`benefit-${index}`} className='ml-2 text-sm text-gray-700'>
            {benefit}
          </label>
        </li>
      ))}
    </ul>
  </div>
  
  {/* Incentives Filter */}
  <div className="max-lg:hidden mb-4">
    <h4 className='font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-100'>Incentives</h4>
    <ul className='space-y-2'>
      {incentives.map((incentive, index) => (
        <li key={index} className='flex items-center'>
          <input
            id={`incentive-${index}`}
            type='checkbox'
            value={incentive}
            onChange={handleIncentiveFilter}
            className='h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500'
          />
          <label htmlFor={`incentive-${index}`} className='ml-2 text-sm text-gray-700'>
            {incentive}
          </label>
        </li>
      ))}
    </ul>
  </div>
</div>
    

    {/* Job Listings */}
    <div className='w-[75%] '>
      <section>
        <div className='space-y-4' id="job-list">
          {filteredJobs?.length > 0 ? (
            filteredJobs.slice((page-1)*6, 6*page).map((job, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-200 p-5 cursor-pointer"
                onClick={() => navigate(`/job/${job._id}/description`)}

              >
                <div className='flex justify-between'>
                  <div className='flex-1'>
                    <div className='flex items-start'>
                      <div>
                        <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 mb-1">{job.jobTitle}</h2>
                        <div className="flex gap-2">
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">{job.companyName}</h3>
                        <div className='flex flex-wrap gap-4 text-sm text-gray-600 mb-3'>
                          <span className='flex items-center'>
                            <img src={assets.location_icon} className='mr-1 h-4 w-4 opacity-70'/>
                            {job.location.city}
                          </span>
                        </div>
                          {/* <span className='flex items-center'>
                            <img src={assets.experience_icon} className='mr-1 h-4 w-4 opacity-70'/>
                            2-5 years
                          </span> */}
                          {/* <span className='flex items-center'>
                            <img src={assets.salary_icon} className='mr-1 h-4 w-4 opacity-70'/>
                            ₹5-10 Lacs/yr
                          </span> */}
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                          {job.description}
                        </p>
                        <div className='flex flex-wrap gap-2'>
                          <span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs'>Full-time</span>
                          <span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs'>Permanent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))
          ) : (
             isLoading?(
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">No jobs found</h3>
              <p className="text-gray-500">Try adjusting your search filters</p>
            </div>
             ):null
          )}
        </div>
      </section>
      <div >
    {filteredJobs?.length > 0 && (
        <div className='flex justify-center items-center mt-8 mb-12 '>
          <nav className="inline-flex rounded-md shadow-sm -space-x-px">
            <button 
              onClick={() => setPage(prev => Math.max(prev-1, 1))}
              disabled={page <= 1}
              className={`px-3 py-2 rounded-l-md border border-gray-300 text-sm font-medium ${page <= 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Previous
            </button>
            
            {Array.from({length: Math.min(10,Math.ceil(filteredJobs.length/6))}, (_, index) => (
              <a 
                href="#job-list" 
                key={index}
                onClick={() => setPage(index+1)}
                className={`px-4 py-2 border border-gray-300 text-sm font-medium ${page === index+1 ? 'bg-blue-50 border-blue-500 text-blue-600 z-10' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                {index+1}
              </a>
            ))}
            
            <button 
              onClick={() => setPage(prev => Math.min(prev+1, Math.ceil(filteredJobs.length/6)))}
              disabled={page >= Math.ceil(filteredJobs.length/6)}
              className={`px-3 py-2 rounded-r-md border border-gray-300 text-sm font-medium ${page >= Math.ceil(filteredJobs.length/6) ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Next
            </button>
          </nav>
        </div>
      )}
      </div>
    </div>
    
  </div>
  
  <Footer />
</div>
  )
}

