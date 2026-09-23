import React from 'react';
import { NEARBY_POINTS, FORM_INTEREST_URL } from '../data/mockData';
import { MapPin, Navigation, Trees, GraduationCap, Utensils, ShoppingBag, HeartPulse, ArrowUpRight } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const getIcon = (cat: string) => {
    switch (cat) {
      case 'nature':
        return <Trees className="w-5 h-5 text-emerald-400" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case 'dining':
        return <Utensils className="w-5 h-5 text-amber-400" />;
      case 'shopping':
        return <ShoppingBag className="w-5 h-5 text-purple-400" />;
      case 'health':
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      default:
        return <MapPin className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-neutral-900 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase font-mono">
            05. Localização Privilegiada
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 font-display">
            No coração do bairro mais valorizado e arborizado da cidade.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-3 leading-relaxed">
            Tenha ao seu redor os melhores colégios, parques, polo gastronômico de alta gastronomia e centros médicos de excelência, tudo a poucos minutos a pé ou de carro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Schematic Interactive Neighborhood Radar */}
          <div className="lg:col-span-6 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                Mapa de Proximidade & Conveniência
              </div>
              <span className="text-xs text-neutral-400 font-mono">Raio de 2 km</span>
            </div>

            {/* Stylized dark-mode interactive map preview */}
            <div className="relative aspect-square sm:aspect-[4/3] rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden flex items-center justify-center">
              {/* Grid radar rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-3/4 h-3/4 rounded-full border border-neutral-800/80" />
                <div className="w-1/2 h-1/2 rounded-full border border-dashed border-neutral-700/60" />
                <div className="w-1/4 h-1/4 rounded-full border border-amber-400/20" />
              </div>

              {/* Central Pin for Lumina Horizon */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-xl shadow-amber-400/40 ring-4 ring-amber-400/30 font-bold text-xs">
                    LUMINA
                  </div>
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rotate-45" />
                </div>
                <span className="mt-2 text-xs font-bold text-white uppercase tracking-wider bg-neutral-950/90 px-2 py-0.5 rounded border border-neutral-700">
                  Seu Novo Endereço
                </span>
              </div>

              {/* Floating points of interest tags */}
              <div className="absolute top-8 left-8 bg-neutral-950/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-[11px] text-emerald-300 flex items-center gap-1.5 shadow-md">
                <Trees className="w-3 h-3 text-emerald-400" />
                <span>Parque Central (4 min)</span>
              </div>

              <div className="absolute top-10 right-8 bg-neutral-950/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-[11px] text-amber-300 flex items-center gap-1.5 shadow-md">
                <Utensils className="w-3 h-3 text-amber-400" />
                <span>Polo Gastronômico (6 min)</span>
              </div>

              <div className="absolute bottom-8 left-10 bg-neutral-950/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-[11px] text-sky-300 flex items-center gap-1.5 shadow-md">
                <GraduationCap className="w-3 h-3 text-sky-400" />
                <span>Colégio Bilíngue (3 min)</span>
              </div>

              <div className="absolute bottom-10 right-10 bg-neutral-950/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-[11px] text-purple-300 flex items-center gap-1.5 shadow-md">
                <ShoppingBag className="w-3 h-3 text-purple-400" />
                <span>Shopping Iguatemi (5 min)</span>
              </div>
            </div>

            <div className="text-xs text-neutral-400 text-center">
              Avenida das Acácias Nobres, 1.450 — Bairro Jardins Horizon
            </div>
          </div>

          {/* List of nearby conveniences */}
          <div className="lg:col-span-6 space-y-4">
            {NEARBY_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="bg-neutral-950 border border-neutral-800/80 p-4 sm:p-5 rounded-xl flex items-start gap-4 hover:border-neutral-700 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 shrink-0">
                  {getIcon(point.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-white truncate">
                      {point.name}
                    </h4>
                    <span className="text-xs font-mono text-amber-400 shrink-0 font-semibold">
                      {point.distance}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {point.highlight}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-2">
              <a
                href={FORM_INTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all text-center"
              >
                <span>Tenho Interesse e Quero Receber a Localização Exata</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
