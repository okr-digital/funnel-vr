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
        w-full text-left p-6 mb-4 rounded-[20px] transition-all duration-200 transform
        border-2 
        ${selected 
          ? 'border-[#D4AF37] bg-[#D4AF37]/5 shadow-md scale-[0.98]' 
          : 'border-transparent bg-white shadow-sm hover:shadow-md active:scale-[0.98] hover:border-[#D4AF37]/30'
        }
        group
      `}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className={`
            p-3 rounded-xl transition-colors
            ${selected ? 'bg-[#D4AF37] text-white' : 'bg-gray-50 text-[#D4AF37] group-hover:bg-[#D4AF37]/10'}
          `}>
            {icon}
          </div>
        )}
        <div>
          <h3 className={`font-bold text-lg leading-tight mb-1 ${selected ? 'text-[#D4AF37]' : 'text-[#2C2C2C]'}`}>
            {title}
          </h3>
          {subtitle && (
            <p className="text-gray-500 text-sm leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};