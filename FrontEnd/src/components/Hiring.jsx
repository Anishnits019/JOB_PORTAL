
import React, { useContext, useState,useRef} from 'react';
import { useNavigate,useParams} from 'react-router-dom';
import { AppContext } from '../context/Appcontext';
import { Navbar } from '../components/Navbar';
import axios from 'axios';

export const Hiring = ({keyName,jobId}) => {
  
  const { addJob, setAddJob,editFields } = useContext(AppContext);
  const hiringRef=useRef(addJob.recuritemnet || "")
  const handleChange = async() => {
  const data=hiringRef.current.value
  await editFields(keyName,jobId,data)
   };
  
  

  const handleRecruitemnetTime = (e) => {
    const { value } = e.target;
    setAddJob((prev) => ({
      ...prev,
      recruitment: value
    }));
  };

 

  return (
    <>
     
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-4">Job Details</h2>
             

              <div className="mb-4">
                <label className="block text-black font-bold mb-2">Recruitment Time</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  onChange={handleRecruitemnetTime}
                  Defaultvalue={addJob.recruitment}
                  ref={hiringRef}
                >
                  {[
                    'Less than 1 week',
                    'Between 3-4 weeks',
                    'Within two months',
                    'More than 3 months'
                  ].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
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
         
    </>
  );
};




// Reusable input field component

