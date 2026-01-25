import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  // Calculate percentage (0 to 100)
  // Step 0 = 10%, Step 4 = 100% roughly
  const progress = Math.min(100, Math.max(10, ((currentStep + 1) / totalSteps) * 100));

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#D4AF37] transition-all duration-700 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};