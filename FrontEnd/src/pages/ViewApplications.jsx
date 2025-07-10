import React,{useState,useContext} from 'react'
import { AppContext } from '../context/Appcontext'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { assets } from '../assets/assets'


export const ViewApplications = () => {
    const{ViewApplications}=useContext(AppContext)
  return (
    <div>
    <Navbar/>
    <Search/>
      {
            <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
            <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
        </thead>
        {/* { _id: 1, name: "Richard Sanford", jobTitle: "Full Stack Developer", location: "Bangalore", imgSrc: profile_img }, */}
      {
        <tbody className="bg-white divide-y divide-gray-200">
       {ViewApplications.map((applicants,index)=>(
           <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index+1}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{applicants.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{applicants.jobTitle}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{applicants.location}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 p-4 ">
                <a href='https://www.youtube.com/watch?v=VIIaMCBeQF0' className='inline-flex gap-2'>Resume<img src={assets.resume_download_icon}/></a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <select>
                    <option>Accpeted</option>
                    <option>Rejected</option>
                </select>
            </td>
           </tr>
       ))
    }
      </tbody>
      }
      </table>
      }
<Footer/>

    </div>
  )
}
