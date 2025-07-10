import React,{ useContext,useState,useEffect}  from 'react'
import { AppContext } from '../context/Appcontext'
import { assets } from '../assets/assets';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
export const Application = () => {
  const {jobs,foundJob,setFoundJob,appliedJobs}=useContext(AppContext);
  const [isEdit,setIsEdit]=useState(false)
  const navigate=useNavigate()
      useEffect(()=>{
      const findJob= jobs.filter((job)=>(
            appliedJobs.includes((job._id))
        ) 
      )
      setFoundJob(findJob)
      },[jobs,appliedJobs])
   
  return (
    <div>
     <div>
      {
        isEdit?(
          <div>
          <button onClick={()=>navigate({})}>Select Resume</button>
          <img src={assets.upload_area}/>
          <button onClick={()=>(setIsEdit(false))}>Save</button>
          </div>
        ):(
          <div>
          <button>Resume</button>
          <button onClick={()=>(setIsEdit(true))}>Edit</button>
          </div>
        )
      }

     </div>
      { foundJob?.length > 0 ? (         // neeed a expreesion to render based on true or flasse  
        <table>
          <thead>
          <tr>
          <th>Company</th>
          <th>Job Title</th>
          <th>Location</th>
          <th>Date</th>
          <th>Status</th>
          </tr>
          </thead>
          
          <tbody>
          {foundJob.map((job)=>(
          <tr>
          <td><img src={assets.company_icon}/></td>
          <td>{job.title}</td>
          <td>{job.location}</td>
          {/* <td>{}</td>
          <td>{}</td> */}
          </tr>
          ))}
          </tbody>
          
        </table>
      ):(<p>Didn't found</p>)
      }
      <Footer/>
    </div>
  )
}

