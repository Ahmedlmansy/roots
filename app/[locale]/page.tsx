import ColdChainSection from "@/components/sections/ColdChainSection";
import HeroSection from "@/components/sections/HeroSections";

export default  function HomePage({
}) {

  return (
    <div>
      {/*
      Hero Section
      */}
      <HeroSection />
      {/* 
      Cold Chain Section
      */}
      <ColdChainSection/>
    </div>
  );
}
