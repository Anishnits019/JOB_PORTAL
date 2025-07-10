import React, { useState,useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import {useNavigate,useParams} from 'react-router-dom'
 import {Navbar} from '../components/Navbar' 
 import axios from 'axios';
  export const JobDescriptionEditor = () => {
  const { addJob,setAddJob } = useContext(AppContext);
  const navigate=useNavigate()
  const {jobId}=useParams();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
 
  const handleFormat = (type) => {
    switch (type) {
      case 'bold':
        setIsBold(!isBold);
        break;
      case 'italic':
        setIsItalic(!isItalic);
        break;
      case 'underline':
        setIsUnderline(!isUnderline);
        break;
      default:
        break;
    }
  };

  const getCurrentStyle = () => {
    let style = '';
    if (isBold) style += 'font-bold ';
    if (isItalic) style += 'italic ';
    if (isUnderline) style += 'underline ';
    return style.trim();
  };
  const handleContinue = async() => {
    const response=await axios.patch(`http://localhost:5000/company/job/${jobId}/edit`,
    {jobData: addJob,  
         jobId: jobId 
      },
    {
        headers:{
            'Content-Type':'application/json'
        }
    }
)
 if(response.data.success){
    
  navigate(`/job/${jobId}/review`,)
 }
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-3xl mx-auto p-6 border-black bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Describe your Job</h1>
      
      {/* Formatting Toolbar */}
      <div className="border border-black rounded-md">
      <div className="flex   bg-gray-100 rounded-t-md  border border-b-black ">
        <button
    onClick={() => handleFormat('bold')}
    className={`p-4 rounded-tl-md ${isBold ? 'bg-black text-white' : 'hover:bg-gray-200'} border-r border-gray-300`}
    title="Bold"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/>
    </svg>
  </button>
        
        <button
          onClick={() => handleFormat('italic')}
          className={`p-4 ${isItalic ? 'bg-black text-white' : 'hover:bg-gray-200'}`}
          title="Italic"
        >
          
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-italic-icon lucide-italic"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>
        </button>
        
        
      </div>

      {/* Text Editor */}
      <div 
        contentEditable 
        className={`min-h-[400px] p-4 border rounded-b-md focus:outline-none  ${getCurrentStyle()}`}
        onInput={(e)=>setAddJob ((prev=>({...prev,detailedDescription:e.target.innerText})))}
        suppressContentEditableWarning
      >
        Enter job description here...
      </div>

      </div>

      {/* Preview Section */}
      

      {/* Action Buttons */}
      <div className="mt-6 flex justify-end gap-3">
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
         onClick={handleContinue}>
          Save Description
        </button>
      </div>
    </div>
    </>
  );
};

 