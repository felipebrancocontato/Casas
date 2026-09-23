import React, { useState } from 'react';
import { UNIT_TYPOLOGIES, FORM_INTEREST_URL } from '../data/mockData';
import { UnitTypology } from '../types/real-estate';
import { ArrowUpRight, Check, Maximize2, Bed, Car, Bath, Sparkles, Compass } from 'lucide-react';

export const UnitsSection: React.FC = () => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>(UNIT_TYPOLOGIES[1].id); // 142m² default
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);

  const currentUnit: UnitTypology =
    UNIT_TYPOLOGIES.find((u) => u.id === selectedUnitId) || UNIT_TYPOLOGIES[0];

  return (
    <section id="apartamentos" className="py-20 lg:py-28 bg-neutral-900 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase font-mono">
            01. Tipologias & Plantas Inteligentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 font-display">
            Plantas concebidas para o máximo conforto e amplitude.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-3 leading-relaxed">
            De 85m² a 238m², com ventilação cruzada, iluminação natural abundante, varanda gourmet integrada e acabamentos nobres.
          </p>
        </div>

        {/* Typology Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-950/80 border border-neutral-800 rounded-xl mb-10">
          {UNIT_TYPOLOGIES.map((unit) => {
            const isSelected = unit.id === currentUnit.id;
            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => {
                  setSelectedUnitId(unit.id);
                  setActiveHotspot(0);
                }}
                className={`flex-1 min-w-[140px] px-4 py-3 rounded-lg text-sm font-semibold transition-all flex flex-col items-center sm:items-start ${
                  isSelected
                    ? 'bg-neutral-800 text-amber-300 shadow-md border border-neutral-700'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                <span className="text-xs uppercase font-mono tracking-wider opacity-70">
                  {unit.area} m² Privativos
                </span>
                <span className="text-sm sm:text-base font-bold text-white truncate max-w-full">
                  {unit.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Unit Details & Interactive Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Blueprint & Schematic Visual Viewport */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4">
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Croqui Arquitetônico Conceitual
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Planta Humanizada — {currentUnit.name} ({currentUnit.area}m²)
                </h3>
              </div>
              <span className="text-xs text-amber-400 font-mono">
                {currentUnit.suites} Suítes · {currentUnit.parkingSpots} Vagas
              </span>
            </div>

            {/* Interactive schematic floor plan canvas */}
            <div className="relative aspect-[4/3] bg-neutral-900/90 rounded-xl border border-dashed border-neutral-700/80 overflow-hidden flex items-center justify-center p-6">
              {/* Floor plan architectural grid pattern */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #ffffff 1px, transparent 1px), linear-gradient(to right, #404040 1px, transparent 1px), linear-gradient(to bottom, #404040 1px, transparent 1px)',
                  backgroundSize: '24px 24px, 48px 48px, 48px 48px'
                }}
              />

              {/* Stylized Floor Plan Blueprint Graphic */}
              <div className="relative w-full h-full border-2 border-neutral-600/70 rounded-lg p-3 bg-neutral-950/70 flex flex-col justify-between">
                {/* Rooms dividers representation */}
                <div className="grid grid-cols-3 h-full gap-2 text-[10px] font-mono text-neutral-400">
                  <div className="border border-neutral-700 rounded p-2 flex flex-col justify-between bg-neutral-900/40">
                    <span className="text-amber-400/80">VARANDA GOURMET</span>
                    <span className="text-[9px] text-neutral-500">Churrasqueira Carvão</span>
                  </div>
                  <div className="border border-neutral-700 rounded p-2 flex flex-col justify-between bg-neutral-900/40">
                    <span className="text-amber-400/80">LIVING & JANTAR</span>
                    <span className="text-[9px] text-neutral-500">Caixilhos Piso-Teto</span>
                  </div>
                  <div className="border border-neutral-700 rounded p-2 flex flex-col justify-between bg-neutral-900/40">
                    <span className="text-amber-400/80">SUÍTE MASTER</span>
                    <span className="text-[9px] text-neutral-500">Closet + Banho Duplo</span>
                  </div>
                </div>

                {/* Hotspot buttons positioned across the floor plan */}
                {currentUnit.hotspots.map((hotspot, idx) => {
                  const isActive = activeHotspot === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveHotspot(idx)}
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-lg ${
                        isActive
                          ? 'bg-amber-400 text-neutral-950 scale-125 ring-4 ring-amber-400/30'
                          : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700 border border-neutral-600'
                      }`}
                      aria-label={`Ver detalhe de ${hotspot.title}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hotspot details card */}
            {activeHotspot !== null && currentUnit.hotspots[activeHotspot] && (
              <div className="bg-neutral-900/90 border border-neutral-700/80 rounded-xl p-4 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 font-mono">
                  {activeHotspot + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {currentUnit.hotspots[activeHotspot].title}
                  </h4>
                  <p className="text-xs text-neutral-300 mt-0.5 leading-relaxed">
                    {currentUnit.hotspots[activeHotspot].description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Unit Specifications & Primary Interest Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-6">
              <div>
                <span className="text-amber-400 text-xs font-mono uppercase tracking-wider">
                  Especificação da Unidade
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  {currentUnit.name}
                </h3>
                <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                  {currentUnit.description}
                </p>
              </div>

              {/* Key numerical specs */}
              <div className="grid grid-cols-3 gap-3 py-4 border-t border-b border-neutral-800 text-center">
                <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
                  <div className="flex justify-center text-amber-400 mb-1">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div className="text-base font-bold text-white font-mono tabular-nums">
                    {currentUnit.area} m²
                  </div>
                  <div className="text-[11px] text-neutral-400">Área Privativa</div>
                </div>

                <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
                  <div className="flex justify-center text-amber-400 mb-1">
                    <Bed className="w-4 h-4" />
                  </div>
                  <div className="text-base font-bold text-white font-mono tabular-nums">
                    {currentUnit.suites} Suítes
                  </div>
                  <div className="text-[11px] text-neutral-400">Plenas</div>
                </div>

                <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
                  <div className="flex justify-center text-amber-400 mb-1">
                    <Car className="w-4 h-4" />
                  </div>
                  <div className="text-base font-bold text-white font-mono tabular-nums">
                    {currentUnit.parkingSpots} Vagas
                  </div>
                  <div className="text-[11px] text-neutral-400">Demarcadas</div>
                </div>
              </div>

              {/* Feature list */}
              <div className="space-y-2.5">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Destaques Inclusos
                </div>
                {currentUnit.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Price estimation & primary conversion button */}
              <div className="pt-4 border-t border-neutral-800 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-neutral-400">Condição Promocional:</span>
                  <span className="text-lg font-bold text-white font-mono">
                    {currentUnit.startingPrice}
                  </span>
                </div>

                {/* THE "TENHO INTERESSE" BUTTON FOR THIS UNIT */}
                <a
                  href={FORM_INTEREST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <span>Tenho Interesse nesta Planta</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-neutral-500 text-center">
                  Consulte disponibilidade de andares e posições solares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
