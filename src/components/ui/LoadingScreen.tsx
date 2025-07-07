import React from "react";

const LoadingScreen: React.FC = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-95">
    <div className="flex flex-col items-center">
      <span className="relative flex h-16 w-16 mb-6">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-16 w-16 bg-blue-600"></span>
      </span>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Loading...</h2>
      <p className="text-gray-600 text-lg">Please wait while we prepare your experience.</p>
    </div>
  </div>
);

export default LoadingScreen;
export { LoadingScreen }; 