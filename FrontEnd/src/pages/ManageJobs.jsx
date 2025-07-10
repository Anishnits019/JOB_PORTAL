import React,{useContext}from 'react'
import { AppContext } from '../context/Appcontext'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {useNavigate} from 'react-router-dom'
export const ManageJobs = () => {
    const navigate=useNavigate()
    const {manageJobs}=useContext(AppContext);
  return (
    
    <div>
        <div className='className="p-4"'>
        <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
            <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicants</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
        </thead>
      {
        <tbody className="bg-white divide-y divide-gray-200">
       {manageJobs.map((job,index)=>(
           <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index+1}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.Date}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.location}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.applicants}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"></td>
           </tr>
       ))
    }
      </tbody>
      }
      </table>

      </div>
      <button onClick={()=>navigate('/dashboard/add-jobs')}>Add Job</button>
    </div>
  )
}