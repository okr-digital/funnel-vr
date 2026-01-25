import React from 'react';
import { StepProps } from '../../types';
import { ArrowRight, MountainSnow } from 'lucide-react';

export const WelcomeScreen: React.FC<StepProps> = ({ onNext, isActive }) => {
  if (!isActive) return null;

  return (
    <div className="flex flex-col h-full justify-center items-center text-center slide-in">
      <div className="w-full max-w-md mx-auto space-y-8">
        
        {/* Decorative Icon */}
        <div className="mx-auto w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
          <MountainSnow className="w-10 h-10 text-[#D4AF37]" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] leading-tight fade-in-up" style={{ animationDelay: '0.2s' }}>
          Marketing, das sich nicht nach <span className="text-[#D4AF37]">"Hackeln"</span> anfühlt.
        </h1>
        
        <p className="text-lg text-gray-600 leading-relaxed fade-in-up" style={{ animationDelay: '0.3s' }}>
          G'riaß di! Lass uns kurz schauen, wo wir dein Marketing-Potential in Tirol noch voll ausschöpfen können.
        </p>

        <div className="pt-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => onNext()}
            className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white font-semibold py-5 px-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span>Kurzen Check starten (30 Sek.)</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-8 fade-in-up" style={{ animationDelay: '0.5s' }}>
          Verena Ratz – Regional. Persönlich. Strategisch.
        </p>
      </div>
    </div>
  );
};