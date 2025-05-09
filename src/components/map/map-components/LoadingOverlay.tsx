
import React from 'react';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 rounded-full border-4 border-t-primary border-r-transparent border-b-primary border-l-transparent animate-spin"></div>
        <span className="mt-2 text-primary font-medium">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;
