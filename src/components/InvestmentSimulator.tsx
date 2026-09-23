import React, { useState, useId } from 'react';
import { FORM_INTEREST_URL } from '../data/mockData';
import { ArrowUpRight, Calculator, TrendingUp, DollarSign, Clock, Shield } from 'lucide-react';

interface SimulatorOption {
  label: string;
  price: number;
  area: number;
  type: string;
}

const SIMULATOR_UNITS: SimulatorOption[] = [
  { label: '85 m² · 2 Suítes Concept', price: 890000, area: 85, type: '2 Suítes' },
  { label: '142 m² · 3 Suítes Panorama', price: 1480000, area: 142, type: '3 Suítes' },
  { label: '195 m² · 4 Suítes Signature', price: 2190000, area: 195, type: '4 Suítes' },
  { label: '238 m² · Penthouse Duplex', price: 2950000, area: 238, type: 'Cobertura Duplex' }
];

export const InvestmentSimulator: React.FC = () => {
  const downPaymentSliderId = useId();
  const [selectedUnitIdx, setSelectedUnitIdx] = useState<number>(1); // 142m² default
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20%
  const [installmentsCount, setInstallmentsCount] = useState<number>(36); // 36 months of construction

  const currentUnit = SIMULATOR_UNITS[selectedUnitIdx];
  const totalPrice = currentUnit.price;

  // Calculations
  const downPaymentAmount = (totalPrice * downPaymentPercent) / 100;
  // 30% of total paid in monthly installments during construction
  const constructionPeriodAmount = totalPrice * 0.30;
  const monthlyInstallment = constructionPeriodAmount / installmentsCount;
  // Remaining balance at key handover (e.g. 50% - 70%)
  const keysBalance = totalPrice - downPaymentAmount - constructionPeriodAmount;
  // Estimated delivery value (+30% historical appreciation)
  const estimatedAppreciationPercent = 32;
  const estimatedFutureValue = totalPrice * (1 + estimatedAppreciationPercent / 100);
  const potentialEquityGain = estimatedFutureValue - totalPrice;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="simulador" className="py-20 lg:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase font-mono">
            04. Planejamento & Inteligência Financeira
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 font-display">
            Simulador de Entrada & Fluxo durante a Obra
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-3 leading-relaxed">
            Personalize sua entrada e parcelamento direto com a construtora sem juros durante o período de obras. Condições sob medida para o seu fluxo de caixa.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Step 1: Select Typology */}
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2">
                1. Selecione o Apartamento Desejado
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SIMULATOR_UNITS.map((unit, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedUnitIdx(idx)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedUnitIdx === idx
                        ? 'bg-neutral-800 border-amber-400/80 text-white shadow-md'
                        : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs text-amber-400/90 font-mono">{unit.label}</div>
                    <div className="text-sm font-bold text-white mt-1 font-mono tabular-nums">
                      {formatCurrency(unit.price)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Down payment percentage */}
            <div className="pt-2 border-t border-neutral-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={downPaymentSliderId}
                  className="text-xs font-mono uppercase text-neutral-400 tracking-wider"
                >
                  2. Entrada Inicial
                </label>
                <span className="text-sm font-bold text-amber-300 font-mono">
                  {downPaymentPercent}% ({formatCurrency(downPaymentAmount)})
                </span>
              </div>

              {/* Slider */}
              <input
                id={downPaymentSliderId}
                type="range"
                min={15}
                max={50}
                step={5}
                value={downPaymentPercent}
                aria-label="Percentual de Entrada Inicial"
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />

              <div className="flex justify-between text-[11px] font-mono text-neutral-500">
                <span>15% (Mínimo)</span>
                <span>20% (Mais Comum)</span>
                <span>35%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Step 3: Construction Installments */}
            <div className="pt-2 border-t border-neutral-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
                  3. Meses de Obra (Parcelamento Direto)
                </span>
                <span className="text-sm font-bold text-white font-mono">
                  {installmentsCount} meses
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[24, 36, 42].map((months) => (
                  <button
                    key={months}
                    type="button"
                    onClick={() => setInstallmentsCount(months)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      installmentsCount === months
                        ? 'bg-amber-400 text-neutral-950 border-amber-300 font-bold'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:text-white'
                    }`}
                  >
                    {months} Parcelas
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-neutral-400">
                Sem incidência de juros bancários durante a construção. Correção exclusiva pelo INCC.
              </p>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="border-b border-neutral-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                Resumo da Simulação Estimada
              </div>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                {currentUnit.type} — {currentUnit.area}m²
              </h3>
              <div className="text-lg font-mono font-bold text-neutral-200 mt-1">
                Valor Total: {formatCurrency(totalPrice)}
              </div>
            </div>

            {/* Breakdown lines */}
            <div className="space-y-3.5 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Entrada Facilitada ({downPaymentPercent}%):</span>
                <span className="text-white font-mono font-semibold">
                  {formatCurrency(downPaymentAmount)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400">{installmentsCount}x Mensais na Obra:</span>
                <span className="text-amber-300 font-mono font-bold text-base">
                  {formatCurrency(monthlyInstallment)} /mês
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Saldo na Entrega das Chaves:</span>
                <span className="text-white font-mono font-semibold">
                  {formatCurrency(keysBalance)}
                </span>
              </div>

              <div className="text-[11px] text-neutral-500 italic">
                *O saldo das chaves pode ser quitado com recursos próprios, FGTS ou financiado por qualquer banco em até 35 anos.
              </div>
            </div>

            {/* Appreciation Projection Card */}
            <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold font-mono">
                <TrendingUp className="w-4 h-4" />
                Projeção de Valorização de Mercado
              </div>
              <div className="text-base font-bold text-emerald-200 font-mono">
                Valor Estimado na Entrega: {formatCurrency(estimatedFutureValue)}
              </div>
              <p className="text-[11px] text-emerald-300/80">
                Ganho de capital projetado de +{estimatedAppreciationPercent}% (+{formatCurrency(potentialEquityGain)}) baseado na evolução do metro quadrado no bairro.
              </p>
            </div>

            {/* THE "TENHO INTERESSE" BUTTON */}
            <div className="pt-2">
              <a
                href={FORM_INTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 text-sm sm:text-base font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Tenho Interesse nesta Simulação</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-neutral-500">
                <Shield className="w-3.5 h-3.5 text-neutral-400" />
                <span>Simulação sem compromisso com atendimento sigiloso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
