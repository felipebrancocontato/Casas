import React from 'react';
import { FORM_INTEREST_URL } from '../data/mockData';
import { ArrowUpRight, Check, Sparkles, Shield, Clock } from 'lucide-react';

export const ConversionBanner: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-950 relative overflow-hidden">
      {/* Background architectural glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl text-center space-y-8">
          {/* Header kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Condições Exclusivas de Pré-Lançamento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display max-w-3xl mx-auto leading-tight">
            Garanta sua unidade com valor de metro quadrado inicial.
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cadastre-se agora para receber o caderno técnico digital, a tabela de preços oficial do pré-lançamento e o convite exclusivo para o coquetel no apartamento decorado.
          </p>

          {/* Quick checks */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-neutral-300 font-medium">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Tabela direta sem juros na obra</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Assessoria de financiamento inclusa</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Plantas personalizáveis</span>
            </div>
          </div>

          {/* Master CTA Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={FORM_INTEREST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>

          <div className="pt-2 text-xs text-neutral-500 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Resposta em até 15 minutos em horário comercial
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              Seus dados protegidos pela LGPD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
