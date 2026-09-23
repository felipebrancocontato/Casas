import React, { useState } from 'react';
import { FAQ_ITEMS, FORM_INTEREST_URL } from '../data/mockData';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-neutral-900 border-t border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase font-mono">
            07. Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 font-display">
            Tudo o que você precisa saber antes de decidir.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Transparência absoluta e suporte técnico completo para você realizar a melhor aquisição patrimonial.
          </p>
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-neutral-300 text-sm sm:text-base leading-relaxed border-t border-neutral-800/80 pt-4 bg-neutral-950/60">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Call to action */}
        <div className="mt-12 text-center bg-neutral-950 border border-neutral-800 rounded-2xl p-8 space-y-4">
          <h3 className="text-xl font-bold text-white font-display">
            Possui alguma dúvida específica sobre o projeto ou financiamento?
          </h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Fale diretamente com nossa equipe de consultores especializados pelo formulário oficial.
          </p>
          <div className="pt-2">
            <a
              href={FORM_INTEREST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all"
            >
              <span>Tenho Interesse e Quero Tirar Dúvidas</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
