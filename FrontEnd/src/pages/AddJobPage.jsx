import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const AddJobPage = () => {
    const navigate = useNavigate();
    const createId=async()=>{
        try{
        const jobId = Math.floor(100 + Math.random() * 900); 
        const response=await axios.patch("http://localhost:5000/company/add-job-id",
            {jobId},
            {
            headers:{
                'Content-type':'application/json'
            }
        }
        )
        if(response.data.success){
            navigate(`/job/${jobId}`)
        }
    }catch(error){

    }
    }
    return (
    <div>

      <button onClick={createId}>
          Add Job
      </button>
    </div>
  )
}

