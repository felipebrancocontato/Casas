import React, { useState, useEffect } from 'react';
import { FORM_INTEREST_URL } from '../data/mockData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element Brand Title */}
        <a
          href="#"
          className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-amber-300 transition-colors uppercase font-display"
        >
          Lumina Horizon
        </a>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#apartamentos" className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400">
            Apartamentos
          </a>
          <a href="#diferenciais" className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400">
            Diferenciais
          </a>
          <a href="#lazer" className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400">
            Área de Lazer
          </a>
          <a href="#localizacao" className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400">
            Localização
          </a>
          <a href="#simulador" className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400">
            Simulador
          </a>
          <a href="#faq" className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-amber-400">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3">
          <a
            href={FORM_INTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap active:translate-y-0"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-5 shadow-2xl space-y-4">
          <nav className="flex flex-col space-y-3.5 text-sm font-medium text-neutral-200">
            <a
              href="#apartamentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Apartamentos & Plantas
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Diferenciais Construtivos
            </a>
            <a
              href="#lazer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Área de Lazer & Rooftop
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Localização Privilegiada
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Simulador de Condições
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Perguntas Frequentes
            </a>
          </nav>
          <div className="pt-2 border-t border-neutral-800">
            <a
              href={FORM_INTEREST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
