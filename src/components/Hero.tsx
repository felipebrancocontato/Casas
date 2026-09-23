import React from 'react';
import { FORM_INTEREST_URL, HERO_IMAGE } from '../data/mockData';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-neutral-950">
      {/* Background with measured scrim gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Fachada arquitetônica contemporânea do Residencial Lumina Horizon"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950/40 to-neutral-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-7">
            {/* Clean unboxed kicker with location indicator */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium text-amber-400 tracking-wider uppercase">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Endereço Nobre e Privilegiado
              </span>
              <span aria-hidden="true" className="text-neutral-500">·</span>
              <span className="text-neutral-300">Lançamento Exclusivo</span>
              <span aria-hidden="true" className="text-neutral-500">·</span>
              <span className="text-neutral-300">Entrega Dezembro/2027</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white font-display leading-[1.1] text-balance">
              Onde o horizonte encontra a sua nova história de vida.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Apartamentos de alto padrão com 2 a 4 suítes, de 85m² a 238m², varanda gourmet panorâmica integrada e lazer extraordinário no rooftop. Viva com o conforto, a segurança e a valorização que você merece.
            </p>

            {/* Unboxed Metadata Stats */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-sm sm:text-base text-neutral-300 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold font-mono tabular-nums text-lg">85</span>
                <span className="text-neutral-400">a</span>
                <span className="text-white font-bold font-mono tabular-nums text-lg">238 m²</span>
              </div>
              <span aria-hidden="true" className="text-neutral-600">|</span>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold font-mono tabular-nums text-lg">2 a 4</span>
                <span className="text-neutral-400">Suítes</span>
              </div>
              <span aria-hidden="true" className="text-neutral-600">|</span>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold font-mono tabular-nums text-lg">2 a 4</span>
                <span className="text-neutral-400">Vagas demarcadas</span>
              </div>
              <span aria-hidden="true" className="text-neutral-600">|</span>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 font-semibold">Tabela Direta 0% Juros</span>
              </div>
            </div>

            {/* Primary Action Button & Secondary Explore */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={FORM_INTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="#apartamentos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-neutral-200 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 rounded-xl backdrop-blur-sm transition-all"
              >
                <Compass className="w-5 h-5 text-amber-400" />
                <span>Conhecer as Plantas</span>
              </a>
            </div>

            {/* Security & Registry Adjacency Note */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Memorial registrado sob R.I. 142.890
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Condições exclusivas de lançamento
              </span>
            </div>
          </div>

          {/* Side Fast-Insight Showcase Card */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-neutral-900/85 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-6 text-left">
              <div className="border-b border-neutral-800 pb-4">
                <h3 className="text-xl font-bold text-white font-display">
                  Condições de Lançamento
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Atendimento direto pela equipe de vendas oficial da incorporadora.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start justify-between">
                  <span className="text-neutral-400">Entrada Facilitada:</span>
                  <span className="text-white font-semibold font-mono">A partir de 15%</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-neutral-400">Fluxo de Obras:</span>
                  <span className="text-white font-semibold">Direto com a construtora</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-neutral-400">Correção na Obra:</span>
                  <span className="text-emerald-400 font-semibold font-mono">INCC (0% Juros)</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-neutral-400">Valorização Estimada:</span>
                  <span className="text-amber-400 font-bold font-mono tabular-nums">+28% a +35%</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={FORM_INTEREST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all text-center"
                >
                  <span>Tenho Interesse na Tabela</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-neutral-500 text-center mt-2.5">
                  Receba o catálogo em PDF e a tabela de preços via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
