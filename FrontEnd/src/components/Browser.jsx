import React, { useState } from 'react';
import { companies, locations, jobTitles } from '../assets/assets';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';

export const Browser = () => {
  const { openSignIn, openUserProfile } = useClerk();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 border border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="flex  flex-col space-y-10 justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Browse Opportunities</h1>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          // aria-label={isExpanded ? "Collapse browser" : "Expand browser"}
        >
          <svg
            className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
          {/* Jobs Column */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
              <h2 className="text-lg font-semibold text-white text-center">Job Titles</h2>
            </div>
            <div className="p-4 space-y-2">
              {jobTitles.slice(0, 15).map((job, index) => (
                <div 
                  key={`job-${index}`}
                  className="py-2 px-3 rounded-md hover:bg-blue-50 cursor-pointer transition-colors duration-150 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600"></span>
                  <span className="text-gray-700 group-hover:text-blue-600 group-hover:font-medium">{job}</span>
                </div>
              ))}
              <button className="mt-3 w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
                View all job titles →
              </button>
            </div>
          </div>

          {/* Locations Column */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
              <h2 className="text-lg font-semibold text-white text-center">Locations</h2>
            </div>
            <div className="p-4 space-y-2">
              {locations.slice(0, 15).map((loc, index) => (
                <div 
                  key={`loc-${index}`}
                  className="py-2 px-3 rounded-md hover:bg-green-50 cursor-pointer transition-colors duration-150 flex items-center group"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-600"></span>
                  <span className="text-gray-700 group-hover:text-green-600 group-hover:font-medium">{loc}</span>
                </div>
              ))}
              <button className="mt-3 w-full text-center text-green-600 hover:text-green-800 text-sm font-medium transition-colors duration-200">
                View all locations →
              </button>
            </div>
          </div>

          {/* Companies Column */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
              <h2 className="text-lg font-semibold text-white text-center">Companies</h2>
            </div>
            <div className="p-4 space-y-2">
              {companies.slice(0, 15).map((comp, index) => (
                <div 
                  key={`comp-${index}`}
                  className="py-2 px-3 rounded-md hover:bg-purple-50 cursor-pointer transition-colors duration-150 flex items-center group"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-purple-600"></span>
                  <span className="text-gray-700 group-hover:text-purple-600 group-hover:font-medium">{comp}</span>
                </div>
              ))}
              <button className="mt-3 w-full text-center text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors duration-200">
                View all companies →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};