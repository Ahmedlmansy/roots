import HeroQuality from '@/components/sections/QualityPage/HeroQuality';
import QualityPillarsSection from '@/components/sections/QualityPage/QualityPillarsSection';
import AccreditationsSection from '@/components/sections/QualityPage/AccreditationsSection';
import MonitoringSystemsSection from '@/components/sections/QualityPage/MonitoringSystemsSection';
import TransparencySection from '@/components/sections/QualityPage/TransparencySection';
export default function QualityPage() {
  return (
    <div>
      {/* Hero Quality Section */}
      <HeroQuality />
      {/* Quality Pillars Section */}
      <QualityPillarsSection />
      {/* Accreditations Section */}
      <AccreditationsSection />
      {/* Monitoring Systems Section */}
      <MonitoringSystemsSection />
      {/* Transparency Section */}
      <TransparencySection />
    </div>
  );
}
