import ColdChainSection from "@/components/sections/ColdChainSection";
import HeroSection from "@/components/sections/HeroSections";
import ProductCategories from "@/components/sections/ProductCategories";

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
      <ProductCategories/>
    </div>
  );
}
