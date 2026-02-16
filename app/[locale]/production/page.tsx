import ClimateControlSection from '@/components/sections/ProductionPage/ClimateControlSection';
import ComplianceSection from '@/components/sections/ProductionPage/ComplianceSection';
import ProductionHeroSection from '@/components/sections/ProductionPage/HeroProductionPage';
import IQFTechnologySection from '@/components/sections/ProductionPage/IQFTechnologySection';
import PrecisionFlowSection from '@/components/sections/ProductionPage/PrecisionFlowSection';
import ProductionMetricsSection from '@/components/sections/ProductionPage/ProductionMetricsSection';
import React from 'react'

export default function Production() {
  return (
    <div>
      {/* ProductionHeroSection */}
      <ProductionHeroSection />
      {/* Production Metrics Section */}
      <ProductionMetricsSection />
      {/* IQF Technology Section */}
      <IQFTechnologySection />
      {/* Precision Flow Section */}
      <PrecisionFlowSection />
      {/* Climate Control Section */}
      <ClimateControlSection />
      {/* Compliance Section */}
      <ComplianceSection />
    </div>
  );
}
