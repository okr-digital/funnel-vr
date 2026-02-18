import React, { useMemo, useEffect } from 'react';
import { StepProps } from '../../types';
import { MonitorPlay, MapPin } from 'lucide-react';

export const FinalScreen: React.FC<StepProps> = ({ isActive, data }) => {
  // Sende Completion-Event an Parent (für Tracking Pixel auf der Hauptseite)
  useEffect(() => {
    if (isActive) {
      window.parent.postMessage({
        type: 'RATZFATZ_COMPLETE',
        payload: data
      }, '*');
    }
  }, [isActive, data]);

  if (!isActive) return null;

  // Personalization Logic Matrix
  const content = useMemo(() => {
    const goal = data?.goal || 'Bekanntheit';
    const pain = data?.painPoint || 'Planlos';
    const segment = data?.segmentation || 'EPU';
    
    let headline = "";
    let subline = "";
    // Highlight wird nun spezifisch für das Webinar genutzt

    // 1. HEADLINE LOGIC (Das Ziel im Fokus)
    if (goal === 'Recruiting') {
      headline = "Dein Team-Magnet 🧲";
    } else if (goal === 'Umsatz') {
      headline = "Umsatz mit System 📈";
    } else {
      headline = "Die Nummer 1 im Kopf 🏔️"; // Bekanntheit
    }

    // 2. SUBLINE LOGIC (Die Lösung für den Schmerz)
    
    // Szenario: Hamsterrad
    if (pain === 'Hamsterrad') {
       if (segment === 'EPU') {
         subline = "Du rackerst dich ab? Ich zeige dir, wie du Kunden gewinnst, während du dich auf dein Handwerk konzentrierst.";
       } else {
         subline = "Euer Team verbrennt Ressourcen? Wir schauen uns an, wie ihr endlich messbare Ergebnisse liefert.";
       }
    } 
    // Szenario: Planlos
    else if (pain === 'Planlos') {
       subline = "Marketing nach dem Zufallsprinzip kostet nur Geld. Ich zeige dir eine Strategie, die genau zu dir passt.";
    }
    // Szenario: Technik
    else if (pain === 'Technik') {
       subline = "Keine Angst vor der Technik! Ich zeige dir ein System, das einfach funktioniert.";
    }
    // Szenario: Zeit
    else { 
       if (segment === 'EPU') {
         subline = "Dein Tag hat nur 24 Stunden. Hol dir deine Zeit zurück durch Automatisierung.";
       } else {
         subline = "Euer Tagesgeschäft frisst alles auf? Ich zeige euch, wie ihr Marketing strukturiert angeht.";
       }
    }

    // Spezifischer Override für Recruiting
    if (goal === 'Recruiting') {
        subline = "Fachkräftemangel war gestern. Erfahre, wie du dich als Wunscharbeitgeber positionierst.";
    }

    return { headline, subline };
  }, [data]);

  const handleWebinar = () => {
    // TODO: Hier die echte Webinar-URL eintragen
    window.open('https://verenaratz.at/webinar', '_blank');
  };

  return (
    <div className="flex flex-col h-full justify-center items-center text-center slide-in">
      <div className="w-full max-w-md mx-auto relative z-10">
        
        {/* Profile Image with Glow */}
        <div className="mb-6 relative inline-block">
            <div className="absolute inset-0 bg-accent-2 blur-2xl opacity-40 rounded-full"></div>
             <img 
                src="https://picsum.photos/150/150?grayscale" 
                alt="Verena Ratz" 
                className="relative w-28 h-28 rounded-full border-2 border-white shadow-xl mx-auto object-cover"
            />
        </div>

        {/* Dynamic Headline (Canela 50pt) */}
        <h1 className="typo-headline text-text mb-4 fade-in-up">
          {content.headline}
        </h1>
        
        {/* Dynamic Body (Hauora 20pt) */}
        <div className="typo-body text-text/80 mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="mb-4">{content.subline}</p>
        </div>

        {/* Webinar Box */}
        <div className="bg-white/60 backdrop-blur-sm border-2 border-accent-2/30 rounded-[2px] p-6 mb-8 fade-in-up transform transition-all hover:scale-[1.01]" style={{ animationDelay: '0.3s' }}>
            <p className="typo-super text-accent-1 text-xs mb-2">Kostenloses Webinar</p>
            <p className="typo-body text-lg leading-tight mb-2">
                Wie wir für Sichtbarkeit sorgen & das Thema <span className="font-bold">strukturiert</span> angehen.
            </p>
            <span className="typo-highlight text-2xl text-accent-1 mt-3 block transform -rotate-1">
                Ratzfatz zum Plan 🚀
            </span>
        </div>

        {/* CTA Button (Hauora 18pt Caps) */}
        <button
          onClick={handleWebinar}
          className="w-full bg-accent-2 text-text typo-super py-5 px-4 rounded-[2px] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 fade-in-up animate-pulse" 
          style={{ animationDelay: '0.4s', animationDuration: '3s' }}
        >
          <MonitorPlay className="w-6 h-6" />
          <span>Zum Webinar anmelden</span>
        </button>

        <div className="mt-8 flex items-center justify-center gap-2 text-accent-1 typo-super text-[12px] fade-in-up" style={{ animationDelay: '0.6s' }}>
            <MapPin className="w-4 h-4" />
            <span>Live aus Tirol.</span>
        </div>

      </div>
    </div>
  );
};