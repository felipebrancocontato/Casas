import React from 'react';
import { TESTIMONIALS, FORM_INTEREST_URL } from '../data/mockData';
import { Building2, Award, CalendarCheck, ShieldCheck, Quote, ArrowUpRight } from 'lucide-react';

export const TrustProofSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjacency Proof Numbers Header */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 bg-neutral-900/70 border border-neutral-800 rounded-2xl mb-16">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-neutral-400 text-xs">
              <CalendarCheck className="w-4 h-4 text-amber-400" />
              <span>Solidez Comprovada</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              22 Anos
            </div>
            <div className="text-xs text-neutral-400">De história no mercado de alto padrão</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-neutral-400 text-xs">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Entregas no Prazo</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              18 Obras
            </div>
            <div className="text-xs text-neutral-400">100% entregues no prazo contratual</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-neutral-400 text-xs">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Certificação Máxima</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono">
              PBQP-H / A
            </div>
            <div className="text-xs text-neutral-400">Auditoria contínua de engenharia</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-neutral-400 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantia de Entrega</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-emerald-400 font-mono">
              Patrimônio
            </div>
            <div className="text-xs text-neutral-400">De afetação averbado em cartório</div>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase font-mono">
            06. Quem Já Escolheu o Lumina
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 font-display">
            A satisfação e a confiança de futuros moradores e investidores.
          </h2>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/60 border border-neutral-800 p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-amber-400/40" />
                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-1">
                <h4 className="text-base font-bold text-white font-display">
                  {testimonial.name}
                </h4>
                <div className="text-xs text-neutral-400">{testimonial.role}</div>
                <div className="text-xs font-mono text-amber-400/90 pt-1">
                  {testimonial.unit}
                </div>
                <div className="text-[11px] text-emerald-400 font-mono pt-1">
                  ✓ {testimonial.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <a
            href={FORM_INTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-lg transition-all"
          >
            <span>Tenho Interesse em Conhecer o Projeto</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
