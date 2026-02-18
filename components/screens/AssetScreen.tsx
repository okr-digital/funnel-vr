import React, { useState } from 'react';
import { StepProps } from '../../types';
import { Globe, Smartphone, Mail, Palette, ArrowRight } from 'lucide-react';

export const AssetScreen: React.FC<StepProps> = ({ onNext, isActive, data }) => {
  const [selectedAssets, setSelectedAssets] = useState<string[]>(data?.assets || []);

  if (!isActive) return null;

  const toggleAsset = (asset: string) => {
    if (selectedAssets.includes(asset)) {
      setSelectedAssets(prev => prev.filter(a => a !== asset));
    } else {
      setSelectedAssets(prev => [...prev, asset]);
    }
  };

  const handleContinue = () => {
    onNext({ assets: selectedAssets });
  };

  const AssetButton = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => {
    const isSelected = selectedAssets.includes(id);
    return (
      <button
        onClick={() => toggleAsset(id)}
        className={`
          relative flex flex-col items-center justify-center p-4 h-36 rounded-[2px] transition-all duration-300 border-2
          ${isSelected 
            ? 'border-accent-2 bg-white shadow-md' 
            : 'border-bg-2 bg-white/50 hover:bg-white hover:border-accent-1/30 hover:-translate-y-1'
          }
        `}
      >
        <div className={`
          mb-4 p-3 rounded-full transition-colors duration-300
          ${isSelected ? 'bg-accent-2 text-text' : 'bg-bg-2 text-accent-1'}
        `}>
          <Icon size={24} />
        </div>
        <span className={`typo-body text-base ${isSelected ? 'text-text font-bold' : 'text-text/70'}`}>
          {label}
        </span>
      </button>
    );
  };

  return (
    <div className="flex flex-col h-full justify-center slide-in">
      <div className="w-full max-w-md mx-auto">
        
        <div className="typo-super text-accent-1 mb-4">Rucksack-Check</div>

        <h2 className="typo-headline text-4xl text-text mb-2">
          Deine Ausrüstung?
        </h2>
        <p className="typo-body text-text/60 mb-8">
          Was hast du schon dabei?
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <AssetButton id="Website" label="Website" icon={Globe} />
          <AssetButton id="Social Media" label="Social Media" icon={Smartphone} />
          <AssetButton id="Newsletter" label="Newsletter" icon={Mail} />
          <AssetButton id="Branding" label="Logo/Design" icon={Palette} />
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-accent-2 hover:bg-[#ffe08a] text-text typo-super py-4 px-6 rounded-[2px] shadow-lg transition-all flex items-center justify-center gap-2 group"
        >
          <span>Weiter geht's</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="text-center font-mint text-xl text-accent-1 mt-6 transform rotate-1">
          Alles kann, nichts muss.
        </p>
      </div>
    </div>
  );
};