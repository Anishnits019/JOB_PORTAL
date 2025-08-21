// components/LoadingSpinner.jsx
export const LoadingSpinner = ({ fullPage = true }) => {
  return (
    <div className={`flex items-center justify-center ${fullPage ? 'fixed inset-0 bg-white bg-opacity-100 z-50 pointer-events-none' : 'py-12'}`}>
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

// components/JobCardSkeleton.jsx
export const JobCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <div className="animate-pulse space-y-3">
        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
        </div>
        <div className="flex gap-2 pt-4">
          <div className="h-9 bg-gray-200 rounded flex-1"></div>
          <div className="h-9 bg-gray-200 rounded flex-1"></div>
        </div>
      </div>
    </div>
  );
};