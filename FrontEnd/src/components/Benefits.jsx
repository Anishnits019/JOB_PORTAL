
import React, { useContext, useState,useRef } from 'react';
import { AppContext } from '../context/Appcontext';
export const Benefits = ({keyName,jobId}) => {
  const {editFields  } = useContext(AppContext);

  const handleChange = async() => {
  const selectedbenefits = Object.entries(jobBenefits)
  .filter(([_, value]) => value)       
  .map(([key]) => jobbenefits[key]); 
  await editFields(keyName,jobId,selectedbenefits)
   };
   
  const jobbenefits={
  healthInsurance: 'Health insurance',
  providentFund: 'Provident Fund',
  cellPhoneReimbursement: 'Cell phone reimbursement',
  paidSickTime: 'Paid sick time',
  workFromHome: 'Work from home',
  paidTimeOff: 'Paid time off',
  foodProvided: 'Food Provided',
  lifeInsurance: 'Life insurance'
  }
  
  const [jobBenefits,setJobBenefits]=useState({
  healthInsurance:false,
  providentFund:false,
  cellPhoneReimbursement:false,
  paidSickTime:false,
  workFromHome:false,
  paidTimeOff:false,
  foodProvided:false,
  lifeInsurance:false,
  })
  
  
  const handlejobBenefits = (key) => {
    const newState = { ...jobBenefits, [key]: !jobBenefits[key] };
    setJobBenefits(newState);
    // setAddJob((prev) => ({
    //   ...prev,
    //   benefits: newState[key]
    //     ? [...prev.benefits,jobbenefits[key] ]
    //     : prev.benefits.filter((item) => item !== jobbenefits[key])
    // }));
  };
    
  

  return (
    <>
    
   <div className= " p-6 bg-white rounded-lg">
    
      <h2 className="text-xl font-bold text-black mt-6">Job Benefits</h2>
          <div className="flex flex-wrap gap-3 pb-12 pt-12 border-b border-b-gray-400"> {/* Container with wrapping */}
      {Object.entries(jobbenefits).map( ([key,label])=> (
    <div 
      key={key}
      onClick={()=>handlejobBenefits(key)}
      className={`flex items-center whitespace-nowrap rounded-full px-4 py-2 cursor-pointer ${
        jobBenefits[key] ? "border-2 border-black bg-white" : "bg-gray-300 hover:bg-gray-400"
      }`}
    >
      <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={"first-letter:h-5 w-5  text-black mr-2"}
    viewBox="0 0 20 20" 
    fill="currentColor"
  >
    {jobBenefits[key] ? (
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
    





