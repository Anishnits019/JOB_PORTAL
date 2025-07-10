import React,{useContext,useState,useRef} from 'react'
import { AppContext } from '../context/Appcontext';
import axios from 'axios';
export const Postings = () => {
    const {addJob,setAddJob,popUpKey,setPopUpKey} =useContext(AppContext)
    const inputRef=useRef(addJob.postings|| "")
    const handleChange = (e) => {
    setAddJob((prev) => ({
      ...prev,
      postings: inputRef.current.value
    }));
    setPopUpKey(null)
  };
  return (
    <div>
      <div className="mb-4">
                <label className="block text-black font-bold mb-2">Number of Postings</label>
                <input
                  name="postings"
                  type="number"
                  defaultValue={addJob.postings || ""}
                  ref={inputRef}
                  placeholder="postings"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                />
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
  )
}

