import React from 'react';
import { FORM_INTEREST_URL } from '../data/mockData';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-neutral-800/80">
          <div className="space-y-2">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white font-display uppercase"
            >
              Lumina Horizon
            </a>
            <p className="text-neutral-400 text-xs max-w-md leading-relaxed">
              Empreendimento residencial de alto padrão. Arquitetura autoral, acabamentos nobres e localização nobre.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs text-neutral-300">
            <a href="#apartamentos" className="hover:text-amber-400 transition-colors">
              Apartamentos
            </a>
            <a href="#diferenciais" className="hover:text-amber-400 transition-colors">
              Diferenciais
            </a>
            <a href="#lazer" className="hover:text-amber-400 transition-colors">
              Área de Lazer
            </a>
            <a href="#localizacao" className="hover:text-amber-400 transition-colors">
              Localização
            </a>
            <a href="#simulador" className="hover:text-amber-400 transition-colors">
              Simulador
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              Dúvidas
            </a>
          </nav>

          <a
            href={FORM_INTEREST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Legal Disclaimer & Registry Notice */}
        <div className="space-y-3 text-[11px] text-neutral-500 leading-relaxed">
          <p>
            *Memorial de Incorporação devidamente registrado sob o Registro Geral R.I. nº 142.890 no 4º Cartório de Registro de Imóveis da Comarca. As perspectivas artísticas, fotos do decorado, plantas humanizadas e ilustrações contidas neste material são meramente conceituais e podem sofrer alterações conforme o projeto executivo e memorial descritivo da incorporadora. Os móveis, adornos e utensílios ilustrados não fazem parte integrante do contrato de compra e venda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-neutral-900 text-neutral-500">
            <div>
              © {new Date().getFullYear()} Residencial Lumina Horizon. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4">
              <span>Termos de Uso</span>
              <span>·</span>
              <span>Política de Privacidade (LGPD)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
