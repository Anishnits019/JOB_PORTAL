import React,{useState,useEffect,useContext,useRef} from 'react';
import { Benefits } from '../components/Benefits';
import { Location } from '../components/Location';
import {Incentives} from '../components/Incentives';
import { Description } from '../components/Description';
import {Postings} from '../components/Postings'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { AppContext } from '../context/Appcontext';

export const JobTitle = ({keyName,jobId}) => {
    const {addJob,setPopUpKey,editFields} =useContext(AppContext)
   const inputRef=useRef(addJob.title || "")
   const handleChange = async() => {
    const data=inputRef.current.value
    editFields(keyName,jobId,data)
    
   };

  return (
    <div className="space-y-6">
      {/* Title Input Section */}
      <div className="mb-4">
        <label className="block text-black font-bold mb-2">Job Title *</label>
        <input
          type="text"
          name="title"
          defaultValue={addJob?.title || ""}
          ref={inputRef}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          placeholder="e.g. Senior Product Designer"
          required
        />
      </div>

      {/* Help Text */}
      <p className="text-xs text-gray-500">
        Be specific while keeping it concise. Example: "Senior UX Designer" instead of just "Designer"
      </p>
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
  );
};

