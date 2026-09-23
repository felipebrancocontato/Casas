import React, { useState } from 'react';
import { AMENITIES_LIST, ROOFTOP_IMAGE, FORM_INTEREST_URL } from '../data/mockData';
import { Amenity } from '../types/real-estate';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Ambientes' },
    { id: 'wellness', label: 'Bem-Estar & Saúde' },
    { id: 'social', label: 'Festas & Gastronomia' },
    { id: 'work', label: 'Coworking & Reuniões' },
    { id: 'family', label: 'Família & Pets' }
  ];

  const filteredAmenities =
    activeCategory === 'all'
      ? AMENITIES_LIST
      : AMENITIES_LIST.filter((item) => item.category === activeCategory);

  return (
    <section id="lazer" className="py-20 lg:py-28 bg-neutral-900 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase font-mono">
            03. Lazer & Experiência de Resort Urbano
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 font-display">
            Mais de 1.800 m² de áreas de convivência entregues equipadas e decoradas.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-3 leading-relaxed">
            Do rooftop exclusivo no 28º andar com piscina de borda infinita aquecida aos lounges gourmet com adega privativa, o lazer do Lumina foi pensado como uma extensão natural da sua residência.
          </p>
        </div>

        {/* Hero Showcase of the Rooftop Pool */}
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 mb-14">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
            <img
              src={ROOFTOP_IMAGE}
              alt="Piscina com borda infinita no rooftop com vista panorâmica do skyline ao entardecer"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-10 right-6 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                  Exclusividade no Topo do Edifício
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-display">
                  Rooftop Sky Pool com Raia Aquecida & Solarium
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Desfrute de vistas panorâmicas definitivas em 360 graus, com espreguiçadeiras molhadas, serviço de apoio e deck de madeira nobre.
                </p>
              </div>

              <a
                href={FORM_INTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg transition-all"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Category Tabs / Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-neutral-950/70 border border-neutral-800 rounded-xl max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-neutral-800 text-amber-300 shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 p-6 rounded-2xl transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-amber-400 font-mono">
                  <span>{amenity.highlight}</span>
                </div>

                <h4 className="text-lg font-bold text-white font-display">
                  {amenity.title}
                </h4>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-500">
                <span className="flex items-center gap-1.5 text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Entregue equipado
                </span>
                <a
                  href={FORM_INTEREST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  Consultar
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
