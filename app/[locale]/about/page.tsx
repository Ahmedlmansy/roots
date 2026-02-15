import React from 'react'
import HeroAbout from '@/components/sections/AboutPage/HeroAbout'
import WhoWeAreSection from '@/components/sections/AboutPage/WhoWeAreSection';
import CorePrinciplesSection from '@/components/sections/AboutPage/CorePrinciplesSection';
import ProcessStepsSection from '@/components/sections/AboutPage/ProcessStepsSection';
import PartnerCTASection from '@/components/sections/AboutPage/PartnerCTASection';
export default function AboutPage() {
  return (
    <div>
      {/* Hero About */}
      <HeroAbout />
      {/* Who We Are Section */}
      <WhoWeAreSection />
      {/* Core Principles Section */}
      <CorePrinciplesSection />
      {/* ProcessStepsSection */}
      <ProcessStepsSection />
      {/* PartnerCTASection */}
      <PartnerCTASection/>
    </div>
  );
}
