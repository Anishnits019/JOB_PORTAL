import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../context/Appcontext';
import {Navbar} from './Navbar'
import axios from 'axios'
export const Incentives = ({keyName,jobId}) => {
  const navigate =useNavigate()
  const { editFields } = useContext(AppContext);
  const handleChange = async() => {
  const selectedincentives= Object.entries(jobIncentives)
  .filter(([_, value]) => value)       
  .map(([key]) => jobincentives[key]); 
  await editFields(keyName,jobId,selectedincentives)
   };
  
  const jobincentives={
  performanceBonus: 'Performance bonus',
  yearlyBonus: 'Yearly bonus',
  commissionPay: 'Commission pay' ,
  overtimePay: 'Overtime pay',
  quarterlyBonus: 'Quarterly bonus',
  shiftAllowance: 'Shift allowance',
  joiningBonus: 'Joining bonus',
  Other:'Other'
  }
  
  const [jobIncentives,setJobIncentives]=useState({
  performanceBonus: false,
  yearlyBonus:false,
  commissionPay: false,
  overtimePay:false,
  quarterlyBonus: false,
  shiftAllowance: false,
  joiningBonus: false,
  Other:false
  }) 
  
  
  
    
  const handlebonusIncentives = (key) => {
    const newState = { ...jobIncentives, [key]: !jobIncentives[key] };
    setJobIncentives(newState);
  }; 
  

  return (
    <>
    <div className="mb-8  ">
     <div className="flex flex-wrap gap-2 pb-12 pt-12 border-b border-b-gray-400"> {/* Container with wrapping */}
     {Object.entries(jobincentives).map(([key,label]) => (
    <div 
      key={key}
      onClick={()=>handlebonusIncentives(key)}
      className={`flex items-center whitespace-nowrap rounded-full px-4 py-2 cursor-pointer ${
        jobIncentives[key]? "border-2 border-black bg-white" : "bg-gray-300 hover:bg-gray-400"
      }`}
    >
        <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={"first-letter:h-5 w-5  text-black mr-2"}
    viewBox="0 0 20 20" 
    fill="currentColor"
  >
    {jobIncentives[key] ? (
      <path 
        fillRule="evenodd" 
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
        clipRule="evenodd" 
      />
    ) : (
      <path 
          fillRule="evenodd" 
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" 
          clipRule="evenodd" 
        />
    )}
  </svg>

      <span>{label}</span>
    </div>
  ))}
     </div>
       <div className="flex justify-end pt-4 space-x-2 border-t border-gray-100">
            <button
              onClick={()=>setPopUpKey(null)}
              className="px-6 py-2.5   text-black font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Cancel 
              
            </button>
            <button
              onClick={handleChange}
              className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Save 
              
            </button>
          </div>

        </div>
  </>
);
};