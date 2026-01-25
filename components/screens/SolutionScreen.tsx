import React, { useEffect, useState } from 'react';
import { StepProps } from '../../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const SolutionScreen: React.FC<StepProps> = ({ onNext, isActive, data }) => {
  const [showChecklist, setShowChecklist] = useState(false);
  const [headline, setHeadline] = useState("Verstehe... Das Content-Hamsterrad ist der größte Zeitfresser.");

  useEffect(() => {
    if (isActive) {
      // Dynamic Headline Generation
      if (data?.goal === 'Recruiting') {
        setHeadline("Gute Leute finden ist schwer, wenn dich keiner kennt.");
      } else if (data?.goal === 'Umsatz') {
        setHeadline("Mehr Umsatz klappt nur, wenn die Strategie sitzt.");
      } else {
        setHeadline("Verstehe... Du willst sichtbar werden, ohne auszubrennen.");
      }

      const timer = setTimeout(() => setShowChecklist(true), 600);
      return () => clearTimeout(timer);
    } else {
        setShowChecklist(false);
    }
  }, [isActive, data]);

  if (!isActive) return null;

  const CheckItem = ({ text, delay }: { text: string; delay: string }) => (
    <div className="flex items-start gap-3 check-pop" style={{ animationDelay: delay }}>
      <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
      <span className="text-lg text-gray-700 font-medium">{text}</span>
    </div>
  );

  return (
    <div className="flex flex-col h-full justify-center items-center slide-in">
      <div className="w-full max-w-md mx-auto">
        
        <div className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wide mb-2 fade-in-up">
          Analyse abgeschlossen
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-6 leading-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
          {headline}
        </h2>

        {showChecklist && (
          <div className="bg-white rounded-[24px] p-8 shadow-xl border border-gray-100 space-y-6 mb-8">
            <CheckItem 
              text="Schluss mit 'Viel hilft viel' – wir setzen auf Strategie." 
              delay="0.2s" 
            />
            <CheckItem 
              text="Dein Content-Recycling: 1x erstellen, überall glänzen." 
              delay="0.5s" 
            />
            <CheckItem 
              text="Handschlagqualität statt Agentur-Blabla." 
              delay="0.8s" 
            />
          </div>
        )}

        <div className={`transition-opacity duration-700 ${showChecklist ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => onNext()}
            className="w-full bg-[#D4AF37] hover:bg-[#c29f2f] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Zum Lösungsvorschlag</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};