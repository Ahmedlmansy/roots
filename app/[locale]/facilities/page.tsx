import CertificationsBadgesSection from '@/components/sections/FacilitiesPage/CertificationsBadgesSection';
import FacilitiesCTASection from '@/components/sections/FacilitiesPage/FacilitiesCTASection';
import FacilityStatsSection from '@/components/sections/FacilitiesPage/FacilityStatsSection';
import FacilitiesHeroSection from '@/components/sections/FacilitiesPage/HeroFacilities';
import IndustrialPuritySection from '@/components/sections/FacilitiesPage/IndustrialPuritySection';
import PrecisionFreezingSection from '@/components/sections/FacilitiesPage/PrecisionFreezingSection';
import SupplyChainSection from '@/components/sections/FacilitiesPage/SupplyChainSection';
import React from 'react'

export default function Facilities() {
  return (
    <div>
      {/* Hero Section */}
      <FacilitiesHeroSection />
      {/* Facility Stats Section */}
      <FacilityStatsSection />
      {/* PrecisionFreezingSection */}
      <PrecisionFreezingSection />
      {/* Supply Chain Section */}
      <SupplyChainSection />
      {/* Industrial Purity Section */}
      <IndustrialPuritySection />
      {/* Certifications Badges Section */}
      <CertificationsBadgesSection />
      {/* Facilities CTA Section */}
      <FacilitiesCTASection />
    </div>
  );
}
