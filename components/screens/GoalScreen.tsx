import React from 'react';
import { StepProps } from '../../types';
import { CardButton } from '../CardButton';
import { Flag, TrendingUp, UserPlus } from 'lucide-react';

export const GoalScreen: React.FC<StepProps> = ({ onNext, isActive, data }) => {
  if (!isActive) return null;

  const handleSelect = (selection: string) => {
    setTimeout(() => {
      onNext({ goal: selection });
    }, 300);
  };

  return (
    <div className="flex flex-col h-full justify-center slide-in">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-[#2C2C2C] mb-2 text-center">
          Dein Gipfelziel 🏔️
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Wo soll die Reise idealerweise hingehen?
        </p>

        <div className="space-y-4">
          <CardButton
            title="Bekanntheit steigern"
            subtitle="Ich will in Tirol zur Marke werden."
            icon={<Flag size={24} />}
            onClick={() => handleSelect('Bekanntheit')}
            selected={data?.goal === 'Bekanntheit'}
          />
          <CardButton
            title="Mehr Umsatz / Kunden"
            subtitle="Der Kalender soll voll werden."
            icon={<TrendingUp size={24} />}
            onClick={() => handleSelect('Umsatz')}
            selected={data?.goal === 'Umsatz'}
          />
          <CardButton
            title="Mitarbeiter finden"
            subtitle="Wir brauchen gute Leute im Team."
            icon={<UserPlus size={24} />}
            onClick={() => handleSelect('Recruiting')}
            selected={data?.goal === 'Recruiting'}
          />
        </div>
      </div>
    </div>
  );
};