import React, { useContext, useCallback, useState,useRef} from 'react';
import { AppContext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import axios from 'axios';
const LOCATION_FIELDS = ['city', 'area', 'pinCode', 'address'];

export const Location = ({keyName,jobId}) => {
 
  const {addJob,setPopUpKey,editFields} =useContext(AppContext)
  const cityRef=useRef(addJob.location.city || "")
  const areaRef=useRef(addJob.location.area || "")
  const pinCodeRef=useRef(addJob.location.pinCode || "")
  const addressRef=useRef(addJob.location.pinCode || "")


  // Memoized change handler for better performance
  // const handleChange = useCallback((e) => {
  //   const { name, value } = e.target;
    
  //   setAddJob(prev => ({
  //     ...prev,
  //     ...(LOCATION_FIELDS.includes(name) ? {
  //       location: {
  //         ...(prev.location || {}), // Safeguard against undefined location
  //         [name]: value
  //       }
  //     } : {
  //       [name]: value
  //     })
  //   }));
  // }, [setAddJob]);

  const handleChange = async() => {
    const data={
      city:cityRef.current.value,
      area:areaRef.current.value,
      pinCode:pinCodeRef.current.value,
      address:addressRef.current.value,
    }
    await editFields(keyName,jobId,data)
    
   };

  return (
    <>
      
      <div className="w-[60%] mx-auto p-6 bg-white rounded-lg">
    
            <div>
              <h2 className="text-xl font-semibold mb-4">Job Location</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="city"
                    defaultValue={addJob.location?.city || ''}
                    ref={cityRef}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Area
                  </label>
                  <input
                    name="area"
                    defaultValue={addJob.location?.area || ''}
                    ref={areaRef}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Pin Code
                  </label>
                  <input
                    name="pinCode"
                    defaultValue={addJob.location?.pinCode || ''}
                    ref={pinCodeRef}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-800 font-medium mb-2">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="address"
                    ref={addressRef}
                    defaultValue={addJob.location?.address || ''}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
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
          </div>
      
    </>
  );
};
 

