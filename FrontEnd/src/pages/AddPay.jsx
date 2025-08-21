
import React, { useContext, useState, } from 'react';
import {useNavigate,useParams} from 'react-router-dom'
import { AppContext } from '../context/Appcontext';
import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'
import axios from 'axios'
export const AddPay = () => {
  const navigate =useNavigate()
  const {jobId}=useParams()
  const { addJob,setAddJob  } = useContext(AppContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const benefits={
  healthInsurance: 'Health insurance',
  providentFund: 'Provident Fund',
  cellPhoneReimbursement: 'Cell phone reimbursement',
  paidSickTime: 'Paid sick time',
  workFromHome: 'Work from home',
  paidTimeOff: 'Paid time off',
  foodProvided: 'Food Provided',
  lifeInsurance: 'Life insurance'
  }
  const incentives={
  performanceBonus: 'Performance bonus',
  yearlyBonus: 'Yearly bonus',
  commissionPay: 'Commission pay' ,
  overtimePay: 'Overtime pay',
  quarterlyBonus: 'Quarterly bonus',
  shiftAllowance: 'Shift allowance',
  joiningBonus: 'Joining bonus',
  Other:'Other'
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
  
  
  const handlejobBenefits = (key) => {
    const newState = { ...jobBenefits, [key]: !jobBenefits[key] };
    setJobBenefits(newState);
    setAddJob((prev) => ({
      ...prev,
      benefits: newState[key]
        ? [...prev.benefits,benefits[key] ]
        : prev.benefits.filter((item) => item !== benefits[key])
    }));
  };
    
  const handlebonusIncentives = (key) => {
    const newState = { ...jobIncentives, [key]: !jobIncentives[key] };
    setJobIncentives(newState);
    setAddJob((prev) => ({
      ...prev,
      incentives: newState[key]
        ? [...prev.incentives, incentives[key]]
        : prev.incentives.filter((item) => item !==incentives[key])
    }));
  }; 
  const handleContinue=async(e)=>{
      setIsSubmitting(true); 
         try {
      const response = await axios.patch(
  `${import.meta.env.VITE_BASE_URL}/company/job/${jobId}/benefits`,
  { jobData: addJob, jobId: jobId },
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
);

      if(response.data.success){
        navigate(`/job/${jobId}/edit/`);
      } 
    } catch (err) {
      console.error('Error saving job:', err);
    }
}

  return (
    <>
    <Navbar/>
   <div className="w-[60%] mx-auto p-6 mb-20 bg-white rounded-lg relative">
    
    <div className="min-h-screen mt-9">
    <h1 className="text-4xl p-6 font-medium ">Add pay and benefits</h1>
      {/* Header Section */}
    <div className="pb-20 px-6   border-b border-b-gray-400 ">
  <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mt-9">
    {/* Salary Type Dropdown */}
    <div className="w-full md:w-2/5">
      <label className="block text-md font-medium text-black mb-2">Pay Type</label>
      <div className="relative">
        <select className="w-full  text-black px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full appearance-none pr-10">
          {['Range', 'Exact Amount', 'Salary Range', 'Maximum Amount'].map((option, index) => (
            <option key={index} value={option} className="bg-gray-800 hover:bg-gray-700">
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>

    {/* Salary Amount Input */}
    <div className="w-full md:w-1/2">
      <label className="block text-md font-medium text-black mb-2">Amount</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-black-">  ₹</span>
        </div>
        <input
          type="number"
          placeholder="0.00"
          className="w-full  text-black pl-8 px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
        />
      </div>
    </div>

    {/* Salary Frequency Dropdown */}
    <div className="w-full md:w-1/3">
      <label className="block text-md font-medium text-black mb-2">Frequency</label>
      <div className="relative">
        <select className="w-full  text-black px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full appearance-none pr-10">
          {['per hour', 'per week', 'per month', 'per year'].map((option, index) => (
            <option key={index} value={option} className="bg-gray-800 hover:bg-gray-700">
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto pl-6 pr-6 bg-white rounded-lg ">
        {/* Company Description Section */}
        

        {/* Job Type Section */}
        <div className="mb-8  ">
          <h2 className="text-xl font-bold text-black mt-6 ">Job Incentives</h2>
          <div className="flex flex-wrap gap-2 pb-12 pt-12 border-b border-b-gray-400"> {/* Container with wrapping */}
  {Object.entries(incentives).map(([key,label]) => (
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


           <h2 className="text-xl font-bold text-black mt-6">Job Benefits</h2>
          <div className="flex flex-wrap gap-3 pb-12 pt-12 border-b border-b-gray-400"> {/* Container with wrapping */}
  {Object.entries(benefits).map( ([key,label])=> (
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
        </div>

        {/* Submit Button */}
        
        <button
          type="button"
          onClick={handleContinue}
          disabled={isSubmitting}
          className={`py-3 px-6 bg-black  text-white font-medium rounded-lg transition duration-200 flex items-center justify-center absolute right-10 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Continue'
          )}
        </button>
      </div>

    </div>
  </div>
  <Footer/>
  </>
);
};

// Reusable input field component

