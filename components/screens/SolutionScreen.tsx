import React, { useEffect, useState } from 'react';
import { StepProps } from '../../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const SolutionScreen: React.FC<StepProps> = ({ onNext, isActive, data }) => {
  const [showChecklist, setShowChecklist] = useState(false);
  const [headline, setHeadline] = useState("");

  useEffect(() => {
    if (isActive) {
      // Hochgradig individualisierte Analyse-Headline
      let text = "";
      
      const pain = data?.painPoint;
      const goal = data?.goal;

      // Logik-Matrix für die Analyse
      if (pain === 'Hamsterrad') {
        text = "Du arbeitest viel, aber der Output passt nicht zum Aufwand.";
      } else if (pain === 'Technik') {
        text = "Marketing sollte sich leicht anfühlen, nicht wie ein IT-Studium.";
      } else if (pain === 'Planlos') {
        text = "Dir fehlt der rote Faden, um wirklich PS auf die Straße zu bringen.";
      } else if (pain === 'Zeit') {
        text = "Dein Tagesgeschäft frisst die Zeit für strategisches Wachstum.";
      } else {
        text = "Wir müssen dein Marketing vom Zeitfresser zum Motor machen.";
      }

      // Nuance für Recruiting
      if (goal === 'Recruiting') {
         text = "Gute Leute finden ist schwer, wenn deine Arbeitgeber-Marke unsichtbar ist.";
      }

      setHeadline(text);

      const timer = setTimeout(() => setShowChecklist(true), 600);
      return () => clearTimeout(timer);
    } else {
        setShowChecklist(false);
    }
  }, [isActive, data]);

  if (!isActive) return null;

  const CheckItem = ({ text, delay }: { text: string; delay: string }) => (
    <div className="flex items-start gap-3 check-pop" style={{ animationDelay: delay }}>
      <CheckCircle2 className="w-6 h-6 text-accent-1 flex-shrink-0 mt-1" />
      <span className="typo-body text-text/80">{text}</span>
    </div>
  );

  return (
    <div className="flex flex-col h-full justify-center items-center slide-in">
      <div className="w-full max-w-md mx-auto">
        
        <div className="typo-super text-accent-1 mb-4 fade-in-up">
          Die Analyse
        </div>

        <h2 className="typo-headline text-text mb-8 leading-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
          {headline}
        </h2>

        {showChecklist && (
          <div className="bg-white/60 backdrop-blur-sm rounded-[2px] p-8 border border-bg-2 space-y-6 mb-10">
            <CheckItem 
              text="Wir ersetzen 'Zufall' durch eine klare Strategie." 
              delay="0.2s" 
            />
            <CheckItem 
              text="Content, der für dich arbeitet (nicht umgekehrt)." 
              delay="0.5s" 
            />
            <CheckItem 
              text="Ratzfatz umgesetzt, statt ewig geplant." 
              delay="0.8s" 
            />
          </div>
        )}

        <div className={`transition-opacity duration-700 ${showChecklist ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => onNext()}
            className="w-full bg-accent-2 hover:bg-[#ffe08a] text-text typo-super py-5 px-6 rounded-[2px] shadow-lg transform transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Zum Ergebnis</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};