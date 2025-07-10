import React, { useState,useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import {useNavigate} from 'react-router-dom'
 import {Navbar} from './Navbar' 
 import axios from 'axios';
  export const Description = () => {
    const {addJob,setAddJob,popUpKey,setPopUpKey} =useContext(AppContext)
      const inputRef=useRef(addJob.postings|| "")
    
    const navigate=useNavigate()
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
    

  return (
    <>

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
        className={`min-h-[200px] p-4 border rounded-b-md focus:outline-none  ${getCurrentStyle()}`}
        onInput={(e)=>setAddJob ((prev=>({...prev,detailedDescription:e.target.innerText})))}
        suppressContentEditableWarning
      >
        Enter job description here...
      </div>

      </div>

      

    </>
  );
};

 