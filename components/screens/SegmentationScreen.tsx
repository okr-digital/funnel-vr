import React from 'react';
import { StepProps } from '../../types';
import { CardButton } from '../CardButton';
import { User, Users } from 'lucide-react';

export const SegmentationScreen: React.FC<StepProps> = ({ onNext, isActive, data }) => {
  if (!isActive) return null;

  const handleSelect = (selection: string) => {
    // 300ms delay for visual feedback
    setTimeout(() => {
      onNext({ segmentation: selection });
    }, 300);
  };

  return (
    <div className="flex flex-col h-full justify-center slide-in">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-[#2C2C2C] mb-8 text-center">
          Dein aktuelles Business-Setup?
        </h2>

        <div className="space-y-4">
          <CardButton
            title="Einzelunternehmer:in (EPU)"
            subtitle="Ich mache aktuell fast alles selbst."
            icon={<User size={24} />}
            onClick={() => handleSelect('EPU')}
            selected={data?.segmentation === 'EPU'}
          />
          <CardButton
            title="KMU / Team"
            subtitle="Wir wollen regional sichtbarer werden."
            icon={<Users size={24} />}
            onClick={() => handleSelect('KMU')}
            selected={data?.segmentation === 'KMU'}
          />
        </div>
      </div>
    </div>
  );
};