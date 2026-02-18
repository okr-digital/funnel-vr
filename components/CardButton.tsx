import React from 'react';

interface CardButtonProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
}

export const CardButton: React.FC<CardButtonProps> = ({ title, subtitle, icon, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left p-6 mb-4 rounded-[2px] transition-all duration-300 transform
        border-2 
        ${selected 
          ? 'border-accent-2 bg-bg-1 shadow-md scale-[0.98]' 
          : 'border-bg-2 bg-white/50 hover:bg-white hover:border-accent-1/50 hover:shadow-lg active:scale-[0.99]'
        }
        group
      `}
    >
      <div className="flex items-start gap-5">
        {icon && (
          <div className={`
            p-3 rounded-full transition-colors duration-300
            ${selected ? 'bg-accent-2 text-text' : 'bg-bg-2 text-accent-1 group-hover:bg-accent-2 group-hover:text-text'}
          `}>
            {icon}
          </div>
        )}
        <div>
          {/* Titel: Hauora Semibold (via Manrope bold/600), etwas größer */}
          <h3 className={`font-hauora font-semibold text-[20px] leading-tight mb-2 ${selected ? 'text-text' : 'text-text'}`}>
            {title}
          </h3>
          {/* Subtitle: Hauora Medium */}
          <p className="font-hauora font-medium text-[16px] text-text/60 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </button>
  );
};