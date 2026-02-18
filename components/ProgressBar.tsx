import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = Math.min(100, Math.max(10, ((currentStep + 1) / totalSteps) * 100));

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 py-6 bg-bg-1/90 backdrop-blur-md transition-all duration-300">
      <div className="w-full h-1 bg-bg-2 rounded-full overflow-hidden">
        <div 
          className="h-full bg-accent-2 transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_rgba(255,212,100,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};