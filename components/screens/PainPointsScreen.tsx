import React from 'react';
import { StepProps } from '../../types';
import { CardButton } from '../CardButton';
import { Repeat, Settings, Shuffle, Clock } from 'lucide-react';

export const PainPointsScreen: React.FC<StepProps> = ({ onNext, isActive, data }) => {
  if (!isActive) return null;

  const handleSelect = (selection: string) => {
    setTimeout(() => {
      onNext({ painPoint: selection });
    }, 300);
  };

  return (
    <div className="flex flex-col h-full justify-center slide-in">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-[#2C2C2C] mb-2 text-center">
          Hand aufs Herz
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Was bremst dich gerade am meisten?
        </p>

        <div className="space-y-3">
          <CardButton
            title="Content-Hamsterrad"
            subtitle="Ich poste viel, aber es bringt zu wenig."
            icon={<Repeat size={20} />}
            onClick={() => handleSelect('Hamsterrad')}
            selected={data?.painPoint === 'Hamsterrad'}
          />
          <CardButton
            title="Technik-Dschungel"
            subtitle="Website, Ads & Co. kosten mich nur Nerven."
            icon={<Settings size={20} />}
            onClick={() => handleSelect('Technik')}
            selected={data?.painPoint === 'Technik'}
          />
          <CardButton
            title="Kein roter Faden"
            subtitle="Mein Marketing ist eher Zufallsprinzip."
            icon={<Shuffle size={20} />}
            onClick={() => handleSelect('Planlos')}
            selected={data?.painPoint === 'Planlos'}
          />
          <CardButton
            title="Zu wenig Zeit"
            subtitle="Das Tagesgeschäft frisst meine Sichtbarkeit."
            icon={<Clock size={20} />}
            onClick={() => handleSelect('Zeit')}
            selected={data?.painPoint === 'Zeit'}
          />
        </div>
      </div>
    </div>
  );
};