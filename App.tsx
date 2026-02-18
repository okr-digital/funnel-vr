import React, { useState, useEffect, useRef } from 'react';
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

  const appRef = useRef<HTMLDivElement>(null);

  const TOTAL_STEPS = 7;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  // IFRAME COMMUNICATION: Sende Höhe an Eltern-Fenster
  useEffect(() => {
    const sendHeight = () => {
      if (appRef.current) {
        const height = appRef.current.scrollHeight;
        // Nachricht an Parent-Window senden
        window.parent.postMessage({ 
          type: 'RATZFATZ_RESIZE', 
          height: height 
        }, '*');
      }
    };

    // Observer, der auf Größenänderungen reagiert
    const resizeObserver = new ResizeObserver(() => {
      sendHeight();
    });

    if (appRef.current) {
      resizeObserver.observe(appRef.current);
      // Initial send
      sendHeight();
    }

    // Listener für Fenster-Resize
    window.addEventListener('resize', sendHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', sendHeight);
    };
  }, [currentStep]); // Auch feuern, wenn sich der Step ändert

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
    <div ref={appRef} className="min-h-screen bg-bg-1 text-text font-hauora selection:bg-accent-2 selection:text-text overflow-hidden relative">
      
      {/* Top Bar */}
      <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      {/* Back Button */}
      {currentStep > 0 && (
        <button 
          onClick={prevStep}
          className="fixed top-6 left-4 z-50 p-2 text-accent-1 hover:text-accent-2 transition-colors rounded-full hover:bg-bg-2/50 backdrop-blur-sm"
          aria-label="Zurück"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Main Content Area */}
      <main className="w-full max-w-xl mx-auto min-h-screen flex flex-col p-6 pt-24 pb-12 relative">
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

      {/* Decorative Background Elements */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-accent-1/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[60vh] h-[60vh] bg-bg-2/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="fixed top-[40%] right-[10%] w-[20vh] h-[20vh] bg-accent-2/5 rounded-full blur-2xl -z-10 pointer-events-none" />

    </div>
  );
}