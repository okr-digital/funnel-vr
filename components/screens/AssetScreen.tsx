import React, { useState } from 'react';
import { StepProps } from '../../types';
import { Globe, Smartphone, Mail, Palette, ArrowRight } from 'lucide-react';

export const AssetScreen: React.FC<StepProps> = ({ onNext, isActive, data }) => {
  // Initialize state with existing data if user comes back
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
          relative flex flex-col items-center justify-center p-4 h-32 rounded-2xl transition-all duration-300 border-2
          ${isSelected 
            ? 'border-[#D4AF37] bg-[#D4AF37]/5 shadow-md scale-95' 
            : 'border-transparent bg-gray-50 hover:bg-white hover:shadow-lg hover:-translate-y-1'
          }
        `}
      >
        <div className={`
          mb-3 p-2 rounded-full transition-colors duration-300
          ${isSelected ? 'bg-[#D4AF37] text-white' : 'bg-white text-gray-400'}
        `}>
          <Icon size={24} />
        </div>
        <span className={`text-sm font-semibold ${isSelected ? 'text-[#D4AF37]' : 'text-gray-600'}`}>
          {label}
        </span>
        
        {/* Checkmark badge */}
        {isSelected && (
          <div className="absolute top-2 right-2 w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="flex flex-col h-full justify-center slide-in">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-[#2C2C2C] mb-2 text-center">
          Der Rucksack-Check
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Was hast du an Ausrüstung schon dabei?
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <AssetButton id="Website" label="Website" icon={Globe} />
          <AssetButton id="Social Media" label="Social Media" icon={Smartphone} />
          <AssetButton id="Newsletter" label="Newsletter" icon={Mail} />
          <AssetButton id="Branding" label="Logo/Design" icon={Palette} />
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-[#2C2C2C] text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:bg-[#1a1a1a] transition-all flex items-center justify-center gap-2 group"
        >
          <span>Weiter geht's</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="text-center text-xs text-gray-400 mt-4">
          (Mehrfachauswahl möglich, oder einfach weiterklicken)
        </p>
      </div>
    </div>
  );
};