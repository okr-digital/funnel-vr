import React, { useMemo } from 'react';
import { StepProps } from '../../types';
import { MessageCircle, MapPin } from 'lucide-react';

export const FinalScreen: React.FC<StepProps> = ({ isActive, data }) => {
  if (!isActive) return null;

  // Personalization Logic
  const content = useMemo(() => {
    let headline = "Zeit für Marketing mit Bergführer-Qualität.";
    let subline = "In der Sichtbarkeitswerkstatt räumen wir dein Marketing auf.";

    // 1. Dynamic Headline based on Goal
    switch (data?.goal) {
      case 'Recruiting':
        headline = "Dein neues Team wartet schon auf dich.";
        break;
      case 'Umsatz':
        headline = "Zeit für Ergebnisse, die wirklich zählen.";
        break;
      case 'Bekanntheit':
        headline = "Zeit, dass man dich in ganz Tirol kennt.";
        break;
    }

    // 2. Dynamic Subline based on Pain Point & Segmentation
    let painRelief = "";
    switch (data?.painPoint) {
      case 'Hamsterrad':
        painRelief = "Schluss mit dem Content-Stress.";
        break;
      case 'Technik':
        painRelief = "Keine Technik-Kopfschmerzen mehr.";
        break;
      case 'Planlos':
        painRelief = "Endlich mit einem klaren roten Faden.";
        break;
      case 'Zeit':
        painRelief = "Hol dir deine wertvolle Zeit zurück.";
        break;
      default:
        painRelief = "Lass uns dein Marketing aufräumen.";
    }

    const segmentationAddon = data?.segmentation === 'EPU' 
      ? "Gerade als EPU musst du nicht alles alleine schultern."
      : "Damit du und dein Team wieder am selben Strang ziehen.";

    subline = `${painRelief} ${segmentationAddon}`;

    return { headline, subline };
  }, [data]);

  const handleContact = () => {
    // Subject line personalization
    const subject = `Sichtbarkeitswerkstatt Anfrage (${data?.segmentation || 'Interessent'})`;
    window.location.href = `mailto:hallo@verenaratz.at?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div className="flex flex-col h-full justify-center items-center text-center slide-in">
      <div className="w-full max-w-md mx-auto relative z-10">
        
        <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-[#D4AF37] blur-2xl opacity-20 rounded-full"></div>
             <img 
                src="https://picsum.photos/150/150?grayscale" 
                alt="Verena Ratz" 
                className="relative w-32 h-32 rounded-full border-4 border-white shadow-xl mx-auto object-cover"
            />
        </div>

        <h1 className="text-3xl font-bold text-[#2C2C2C] mb-4 leading-tight fade-in-up">
          {content.headline.split(' ').map((word, i, arr) => {
             // Highlight key words in gold if it's the middle of the sentence (simple heuristic)
             if (i > 1 && i < arr.length - 1 && (word.length > 4 || word.includes('Tirol'))) {
               return <span key={i} className="text-[#D4AF37]">{word} </span>;
             }
             return word + ' ';
          })}
        </h1>
        
        <p className="text-lg text-gray-600 mb-10 fade-in-up" style={{ animationDelay: '0.2s' }}>
          {content.subline} <br/>
          <span className="text-sm mt-2 block opacity-80">Klingt nach einem Plan?</span>
        </p>

        <button
          onClick={handleContact}
          className="w-full bg-[#2C2C2C] text-white font-bold text-lg py-5 px-8 rounded-[20px] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 fade-in-up animate-pulse" 
          style={{ animationDelay: '0.4s', animationDuration: '3s' }}
        >
          <MessageCircle className="w-6 h-6" />
          <span>Jetzt unverbindlich ratschen!</span>
        </button>

        <div className="mt-12 flex items-center justify-center gap-2 text-gray-400 text-sm font-medium fade-in-up" style={{ animationDelay: '0.6s' }}>
            <MapPin className="w-4 h-4" />
            <span>Regional. Persönlich. Strategisch.</span>
        </div>

      </div>
    </div>
  );
};