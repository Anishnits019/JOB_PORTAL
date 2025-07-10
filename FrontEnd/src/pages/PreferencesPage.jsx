// import { useState } from 'react';
// import { Navbar } from '../components/Navbar';

// export const PreferencesPage = () => {
//   const [email, setEmail] = useState('anish4398nov@gmail.com');
//   const [additionalEmails, setAdditionalEmails] = useState([]);
//   const [newEmail, setNewEmail] = useState('');
//   const [sendIndividualUpdates, setSendIndividualUpdates] = useState(true);
//   const [resumeRequired, setResumeRequired] = useState(true);
//   const [allowCandidateContact, setAllowCandidateContact] = useState(true);

//   const handleAddEmail = () => {
//     if (newEmail && !additionalEmails.includes(newEmail)) {
//       setAdditionalEmails([...additionalEmails, newEmail]);
//       setNewEmail('');
//     }
//   };

//   const handleRemoveEmail = (emailToRemove) => {
//   setAdditionalEmails(additionalEmails.filter(email => email !== emailToRemove));
// };

//   return (
//     <>
//     <Navbar/>
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-10 ">
//       <h1 className="text-5xl font-bold text-gray-900 mb-8">Set preferences</h1>
      
//       {/* Communication Preferences Section */}
//       <section className="mb-10 border-b-1">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Communication preferences</h2>
        
//         <div className="space-y-4  ">
//           <div>
//             <label className="block text-sm font-medium text-gray-800 mb-1">
//               Send daily updates to
//             </label>
//             <div className="flex items-center gap-2 mt-4 ">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full  px-3 py-2 border  border-gray-700  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>

//           <div className="border-t border-gray-200 pt-4">
//             <button 
//               onClick={() => document.getElementById('addEmailInput')?.focus()}
//               className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
//             >
//               <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//               </svg>
//               Add email
//             </button>
            
//             {additionalEmails.length > 0 && (
//               <div className="mt-2 space-y-2">
//                 {additionalEmails.map((email) => (
//                   <div key={email} className="flex items-center justify-between bg-gray-50 p-2 rounded">
//                     <span className="text-sm text-gray-700">{email}</span>
//                     <button 
//                       onClick={() => handleRemoveEmail(email)}
//                       className="text-gray-400 hover:text-red-500"
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                       </svg>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
            
//             {/* <div className="mt-3 flex items-center">
//               <input
//                 id="addEmailInput"
//                 type="email"
//                 value={newEmail}
//                 onChange={(e) => setNewEmail(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleAddEmail()}
//                 placeholder="Enter additional email"
//                 className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <button
//                 onClick={handleAddEmail}
//                 disabled={!newEmail}
//                 className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 disabled:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 Add
//               </button>
//             </div> */}
//           </div>

//           <div className="flex items-center mt-4 ">
//             <div className="flex items-center h-5">
//               <input
//                 id="individual-updates"
//                 name="individual-updates"
//                 type="checkbox"
//                 checked={sendIndividualUpdates}
//                 onChange={(e) => setSendIndividualUpdates(e.target.checked)}
//                 className="h-4 w-4 text-blue-600 rounded-full p-1  focus:ring-blue-500 border-gray-300   "
//               />
//             </div>
//             <div className="ml-3 text-sm">
//               <label htmlFor="individual-updates" className="text-gray-800 text-lg" >
//                 Plus, send an individual email update each time someone applies.
//               </label>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Application Preferences Section */}
//       <section>
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Application preferences</h2>
        
//         <div className="space-y-4">
//           <div className="flex items-start">
//             <div className="flex items-center h-5">
//               <input
//                 id="resume-required"
//                 name="resume-required"
//                 type="checkbox"
//                 checked={resumeRequired}
//                 onChange={(e) => setResumeRequired(e.target.checked)}
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//             </div>
//             <div className="ml-3 text-sm">
//               <label htmlFor="resume-required" className="text-gray-800 text-lg">
//                 Resume is required
//               </label>
//             </div>
//           </div>

//           <div className="flex items-start">
//             <div className="flex items-center h-5">
//               <input
//                 id="candidate-contact"
//                 name="candidate-contact"
//                 type="checkbox"
//                 checked={allowCandidateContact}
//                 onChange={(e) => setAllowCandidateContact(e.target.checked)}
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//             </div>
//             <div className="ml-3 text-sm">
//               <label htmlFor="candidate-contact" className=" text-gray-800 text-lg">
//                 Let potential candidates contact you about this job by email to the address provided
//               </label>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Save Button */}
//       <div className="mt-8 flex justify-between ">
//             <button
//             className=" py-3 px-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition duration-200 "
            
//           ><span className='block flex gap-4'>
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//   <line x1="21" y1="12" x2="3" y2="12"/> {/* Line */}
//   <polyline points="9 18 3 12 9 6"/>       {/* Arrowhead */}
// </svg>
//             Back
//             </span>
//           </button>
//           <button
//             className=" py-3 px-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition duration-200"
            
//           >
//             <span className="block flex gap-4 ">
//             Continue
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//   <line x1="3" y1="12" x2="21" y2="12" /> {/* Horizontal line */}
//   <polyline points="15 6 21 12 15 18" />  {/* Arrow head */}
// </svg>
//             </span>
//           </button>
//         </div>
//     </div>
//     </>
//   );
// };

