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
        
        <div className="typo-super text-accent-1 mb-4">Status Quo</div>

        <h2 className="typo-headline text-4xl text-text mb-2">
          Hand aufs Herz
        </h2>
        <p className="typo-body text-text/60 mb-8">
          Was ist der größte <span className="font-mint text-2xl text-accent-1">Bremsklotz</span>?
        </p>

        <div className="space-y-3">
          <CardButton
            title="Content-Hamsterrad"
            subtitle="Viel Aufwand, wenig Ertrag."
            icon={<Repeat size={20} />}
            onClick={() => handleSelect('Hamsterrad')}
            selected={data?.painPoint === 'Hamsterrad'}
          />
          <CardButton
            title="Technik-Dschungel"
            subtitle="Website & Co. nerven nur."
            icon={<Settings size={20} />}
            onClick={() => handleSelect('Technik')}
            selected={data?.painPoint === 'Technik'}
          />
          <CardButton
            title="Kein roter Faden"
            subtitle="Marketing nach Zufallsprinzip."
            icon={<Shuffle size={20} />}
            onClick={() => handleSelect('Planlos')}
            selected={data?.painPoint === 'Planlos'}
          />
          <CardButton
            title="Zu wenig Zeit"
            subtitle="Das Tagesgeschäft frisst alles."
            icon={<Clock size={20} />}
            onClick={() => handleSelect('Zeit')}
            selected={data?.painPoint === 'Zeit'}
          />
        </div>
      </div>
    </div>
  );
};