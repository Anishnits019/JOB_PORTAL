// import React from 'react';
// import { Navbar } from '../components/Navbar';
// import { Footer } from '../components/Footer';
// import { Link, Outlet } from 'react-router-dom';

// export const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
//         {/* Vertical Navigation Sidebar */}
//         <div className="w-full md:w-64 bg-white rounded-xl shadow-md p-4 h-fit">
//           <h2 className="text-lg font-semibold text-gray-800 mb-4 px-2">Dashboard Menu</h2>
          
//           <nav className="space-y-2">
//             <Link
//               to="add-jobs"
//               onClick={()=>navigate('/add-jobs')}
//               className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
//               </svg>
//               <span>Add Job</span>
//             </Link>
            
//             <Link
//               to="manage-jobs"
//               className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//                 <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
//               </svg>
//               <span>Manage Jobs</span>
//             </Link>
            
//             <Link
//               to="view-applications"
//               className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//               </svg>
//               <span>View Applications</span>
//             </Link>
//           </nav>
//         </div>

//         {/* Content Area */}
//         <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden p-6">
//           <Outlet />
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
export const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('add-jobs');
  const navigate = useNavigate();


  return (
    
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex">
        {/* Collapsible Sidebar */}
        <div className={`bg-white shadow-md transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'} h-[calc(100vh-4rem)] fixed`}>
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            {!isCollapsed && <h2 className="text-lg font-semibold text-gray-800">Dashboard Menu</h2>}
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700"
            >
              {isCollapsed ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
          
          <nav className="p-2 space-y-1">
            {/* Your original Link components preserved exactly */}
            <Link
              to="add-jobs"
              onClick={() => navigate('/add-jobs')}
              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors ${isCollapsed ? 'justify-center' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              {!isCollapsed && <span>Add Job</span>}
            </Link>
            
            <Link
              to="manage-jobs"
              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors ${isCollapsed ? 'justify-center' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              {!isCollapsed && <span>Manage Jobs</span>}
            </Link>
            
            <Link
              to="view-applications"
              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors ${isCollapsed ? 'justify-center' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {!isCollapsed && <span>View Applications</span>}
            </Link>
          </nav>
        </div>

        {/* Content Area */}
        <div className={`flex-1 transition-all duration-300 ease-in-out ${isCollapsed ? 'ml-20' : 'ml-64'} p-6`}>
          <div className="bg-white rounded-xl shadow-sm p-6 min-h-[calc(100vh-8rem)]">
            <Outlet />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
