import React from 'react';
import { LIVING_IMAGE, MASTER_SUITE_IMAGE, FORM_INTEREST_URL } from '../data/mockData';
import { Shield, VolumeX, Cpu, Layers, Sparkles, ArrowUpRight } from 'lucide-react';

export const LivingExperience: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase font-mono">
            02. Padrão Construtivo & Acabamentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 font-display">
            A precisão em cada detalhe que você vê e sente.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-3 leading-relaxed">
            Desenvolvido com materiais nobres de procedência internacional e engenharia acústica avançada para garantir serenidade absoluta no seu dia a dia.
          </p>
        </div>

        {/* Asymmetric Visual and Architectural Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual: Living Room with Balcony */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group min-h-[380px] lg:min-h-[460px]">
            <img
              src={LIVING_IMAGE}
              alt="Living integrado com varanda gourmet panorâmica e vista para a cidade"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                Integração Total de Espaços
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display">
                Living com caixilhos piso-ao-teto e continuidade de piso
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
                O nivelamento perfeito entre o piso da sala e da varanda gourmet cria uma sensação de amplidão contínua, unindo o conforto interno à vista deslumbrante.
              </p>
            </div>
          </div>

          {/* Secondary Visual: Master Suite */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group min-h-[380px] lg:min-h-[460px]">
            <img
              src={MASTER_SUITE_IMAGE}
              alt="Suíte master com closet planejado e acabamentos de marcenaria nobre"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                Refúgio Particular
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display">
                Suíte Master com acústica de estúdio e persianas motorizadas
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Tratamento especial nas paredes de divisa e janelas com vedação perimetral alemã para garantir noites de sono profundo e reparador.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Architectural pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-amber-400">
              <VolumeX className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-display">
              Atenuação Acústica Superior
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Manta acústica instalada em todas as lajes de piso, minimizando o ruído de impacto entre os andares.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-amber-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-display">
              Infraestrutura Smart Home
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Pontos para cabeamento estruturado e preparação para automação de iluminação, cortinas e climatização via app ou voz.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-amber-400">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-display">
              Churrasqueira a Carvão
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Duto individual com exaustor mecânico forçado na cobertura, sem retorno de fumaça ou odores entre as unidades.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-display">
              Segurança Multicamadas
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Guarita blindada nível III-A, clausura dupla de pedestres e veículos, e reconhecimento facial em todos os acessos.
            </p>
          </div>
        </div>

        {/* CTA banner in differential section */}
        <div className="mt-12 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              Deseja conhecer os acabamentos no apartamento decorado?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Agende uma visita guiada com nossos arquitetos e veja cada detalhe pessoalmente.
            </p>
          </div>

          <a
            href={FORM_INTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all whitespace-nowrap"
          >
            <span>Tenho Interesse na Visita</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
