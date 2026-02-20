import React from 'react';
import { StepProps } from '../../types';
import { ArrowRight } from 'lucide-react';

export const WelcomeScreen: React.FC<StepProps> = ({ onNext, isActive }) => {
  if (!isActive) return null;

  return (
    <div className="flex flex-col h-full justify-center items-center text-center slide-in">
      <div className="w-full max-w-md mx-auto">
        
        {/* Eyebrow / Programm Name */}
        <div className="typo-super text-accent-1 mb-6 fade-in-up">
          Ratzfatz sichtbar mit Verena
        </div>

        {/* Headline */}
        <h1 className="typo-headline text-4xl md:text-5xl text-text mb-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
          Marketing, das sich nicht nach <span className="text-accent-1 font-normal italic">Hackeln</span> anfühlt.
        </h1>
        
        {/* Body */}
        <p className="typo-body text-lg md:text-xl text-text/80 mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
          Griaß di! Lass uns kurz schauen, wie wir dein Marketing-Potential noch besser nutzen können.
        </p>

        {/* Button */}
        <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => onNext()}
            className="w-full bg-accent-2 hover:bg-[#ffe08a] text-text typo-super py-5 px-8 rounded-[2px] shadow-lg hover:shadow-xl transform transition-all active:scale-95 flex items-center justify-center gap-3 group"
          >
            <span>Check starten</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="font-mint text-2xl text-accent-1 mt-12 fade-in-up transform -rotate-2" style={{ animationDelay: '0.4s' }}>
          Verena Ratz
        </p>
      </div>
    </div>
  );
};
