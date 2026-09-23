/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UnitsSection } from './components/UnitsSection';
import { LivingExperience } from './components/LivingExperience';
import { AmenitiesSection } from './components/AmenitiesSection';
import { InvestmentSimulator } from './components/InvestmentSimulator';
import { LocationSection } from './components/LocationSection';
import { TrustProofSection } from './components/TrustProofSection';
import { FaqSection } from './components/FaqSection';
import { ConversionBanner } from './components/ConversionBanner';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-200">
      {/* Top Bar Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Tipologias e Plantas */}
        <UnitsSection />

        {/* Acabamentos & Diferenciais */}
        <LivingExperience />

        {/* Área de Lazer & Rooftop */}
        <AmenitiesSection />

        {/* Simulador Financeiro e Entrada */}
        <InvestmentSimulator />

        {/* Localização & Conveniências */}
        <LocationSection />

        {/* Depoimentos e Solidez da Construtora */}
        <TrustProofSection />

        {/* Dúvidas Frequentes */}
        <FaqSection />

        {/* Banner de Conversão Final */}
        <ConversionBanner />
      </main>

      {/* Footer com Dados Legais e RI */}
      <Footer />

      {/* Mobile Sticky Conversion Action */}
      <StickyBottomBar />
    </div>
  );
}
