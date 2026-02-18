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
        
        <div className="typo-super text-accent-1 mb-4">Vision</div>

        <h2 className="typo-headline text-4xl text-text mb-8">
          Dein Gipfelziel 🏔️
        </h2>

        <div className="space-y-4">
          <CardButton
            title="Bekanntheit steigern"
            subtitle="Ich will in Tirol zur Marke werden."
            icon={<Flag size={24} />}
            onClick={() => handleSelect('Bekanntheit')}
            selected={data?.goal === 'Bekanntheit'}
          />
          <CardButton
            title="Mehr Umsatz"
            subtitle="Der Kalender soll voll werden."
            icon={<TrendingUp size={24} />}
            onClick={() => handleSelect('Umsatz')}
            selected={data?.goal === 'Umsatz'}
          />
          <CardButton
            title="Team aufbauen"
            subtitle="Wir brauchen gute Leute."
            icon={<UserPlus size={24} />}
            onClick={() => handleSelect('Recruiting')}
            selected={data?.goal === 'Recruiting'}
          />
        </div>
      </div>
    </div>
  );
};