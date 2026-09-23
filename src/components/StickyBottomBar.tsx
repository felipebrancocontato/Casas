import React, { useState, useEffect } from 'react';
import { FORM_INTEREST_URL } from '../data/mockData';
import { ArrowUpRight } from 'lucide-react';

export const StickyBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barra de conversão rápida"
      className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-4 py-2.5 shadow-2xl transition-all duration-300 md:hidden"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-white truncate font-display">
            Lumina Horizon
          </span>
          <span className="text-[11px] text-amber-400 font-mono truncate">
            2 a 4 Suítes · A partir de 85m²
          </span>
        </div>

        <a
          href={FORM_INTEREST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all whitespace-nowrap active:scale-95"
        >
          <span>Tenho Interesse</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
};
