import ColdChainSection from "@/components/sections/ColdChainSection";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSections";
import ProductCategories from "@/components/sections/ProductCategories";
import ProductionTechnology from "@/components/sections/ProductionTechnology";

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
      <ColdChainSection />
      {/* Product Categories Section */}
      <ProductCategories />
      {/* Production Technology Section */}
      <ProductionTechnology />
      {/* CTASection */}
      <CTASection />  
    </div>
  );
}
