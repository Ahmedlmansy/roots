import ColdChainSection from "@/components/sections/HomePage/ColdChainSection";
import CTASection from "@/components/sections/HomePage/CTASection";
import HeroSections from "@/components/sections/HomePage/HeroSections";
import ProductCategories from "@/components/sections/HomePage/ProductCategories";
import ProductionTechnology from "@/components/sections/HomePage/ProductionTechnology";


export default  function HomePage({
}) {

  return (
    <div>
      {/*
      Hero Section
      */}
      <HeroSections />
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
