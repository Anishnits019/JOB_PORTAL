import React, { useState } from 'react';
import { companies, locations, jobTitles } from '../assets/assets';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Browser = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  
  const jobRoles = [
    { title: 'Full Stack Developer', count: '20K+' },
    { title: 'Front End Developer', count: '5.2K+' },
    { title: 'Engineering Manager', count: '1.6K+' },
    { title: 'Mobile / App Developer', count: '3.1K+' },
    { title: 'DevOps Engineer', count: '3.1K+' },
    { title: 'Technical Lead', count: '11K+' },
    { title: 'Data Scientist', count: '8.5K+' },
    { title: 'QA Engineer', count: '4.2K+' },
    { title: 'Cloud Architect', count: '3.8K+' },
    { title: 'Product Manager', count: '7.2K+' },
    { title: 'UX Designer', count: '5.7K+' },
    { title: 'Blockchain Developer', count: '2.3K+' }
  ];

  const rolesPerSlide = 6;
  const totalSlides = Math.ceil(jobRoles.length / rolesPerSlide);

  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const visibleRoles = jobRoles.slice(
    currentIndex * rolesPerSlide,
    (currentIndex + 1) * rolesPerSlide
  );

  // Fill empty slots if needed
  while (visibleRoles.length < rolesPerSlide) {
    visibleRoles.push(...jobRoles.slice(0, rolesPerSlide - visibleRoles.length));
  }

  
    return (
    <div className="max-w-6xl mx-auto px-6 py-8 bg-[#FFF6E9] rounded-xl shadow-sm border border-[#FFF6E9]">
      <div className="flex flex-col md:flex-row gap-8  h-[400px] items-center">
        {/* Left Image Section */}
        <div className="w-full md:w-2/5 object-fill">
          <img 
            src="/Job_Search2.jpg" 
            alt="Job search illustration"
            className="w-full h-[450px] rounded-xl object-contain"
          />
        </div>

        {/* Right Slider Section */}
        <div className="w-full md:w-3/5 relative  m-4 p-4 ">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Discover jobs across popular roles
            </h1>
            <p className="text-gray-600">
              Select a role and we'll show you relevant jobs for it!
            </p>
          </div>

          <div className="relative overflow-hidden h-[300px]">
            <div 
              className={`grid grid-cols-2 sm:grid-cols-3 gap-4 transition-all duration-500 ease-in-out ${
                slideDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
              }`}
              key={currentIndex} // Force re-render for animation
            >
              {visibleRoles.map((role, index) => (
                <div 
                  key={`${currentIndex}-${index}`}
                  className="border border-[#e5d0b3] rounded-lg p-4 hover:shadow-md transition-all cursor-pointer hover:border-[#dd8408] h-[120px] flex flex-col justify-between"
                >
                  <h3 className="font-medium text-gray-900">{role.title}</h3>
                  <p className="text-sm text-blue-600 font-semibold">{role.count} Jobs</p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md border border-gray-200 hover:bg-gray-50 z-10"
            >
              <FiChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md border border-gray-200 hover:bg-gray-50 z-10"
            >
              <FiChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setSlideDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
