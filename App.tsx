import React, { useState, useEffect } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { SegmentationScreen } from './components/screens/SegmentationScreen';
import { AssetScreen } from './components/screens/AssetScreen';
import { GoalScreen } from './components/screens/GoalScreen';
import { PainPointsScreen } from './components/screens/PainPointsScreen';
import { SolutionScreen } from './components/screens/SolutionScreen';
import { FinalScreen } from './components/screens/FinalScreen';
import { FunnelState } from './types';
import { ChevronLeft } from 'lucide-react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<Omit<FunnelState, 'currentStep'>>({
    segmentation: null,
    assets: [],
    goal: null,
    painPoint: null,
  });

  // Updated to 7 steps
  const TOTAL_STEPS = 7;

  // Scroll to top on step change for mobile consistency
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const nextStep = (newData?: Partial<typeof data>) => {
    if (newData) {
      setData(prev => ({ ...prev, ...newData }));
    }
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#2C2C2C] font-sans selection:bg-[#D4AF37] selection:text-white overflow-hidden">
      
      {/* Top Bar */}
      <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      {/* Back Button - Visible only after first screen */}
      {currentStep > 0 && (
        <button 
          onClick={prevStep}
          className="fixed top-6 left-4 z-50 p-2 text-gray-400 hover:text-[#D4AF37] transition-colors rounded-full hover:bg-gray-50 backdrop-blur-sm"
          aria-label="Zurück"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Main Content Area */}
      <main className="w-full max-w-xl mx-auto min-h-screen flex flex-col p-6 pt-24 pb-12 relative">
        
        {/* Render Active Step */}
        <div className="flex-grow relative">
            {currentStep === 0 && <WelcomeScreen isActive={true} onNext={nextStep} />}
            {currentStep === 1 && <SegmentationScreen isActive={true} onNext={nextStep} data={data} />}
            {currentStep === 2 && <AssetScreen isActive={true} onNext={nextStep} data={data} />}
            {currentStep === 3 && <GoalScreen isActive={true} onNext={nextStep} data={data} />}
            {currentStep === 4 && <PainPointsScreen isActive={true} onNext={nextStep} data={data} />}
            {currentStep === 5 && <SolutionScreen isActive={true} onNext={nextStep} data={data} />}
            {currentStep === 6 && <FinalScreen isActive={true} onNext={nextStep} data={data} />}
        </div>
      </main>

      {/* Decorative Background Elements (Alpine feel) */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-gradient-to-b from-[#D4AF37]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[60vh] h-[60vh] bg-gradient-to-t from-gray-100 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

    </div>
  );
}