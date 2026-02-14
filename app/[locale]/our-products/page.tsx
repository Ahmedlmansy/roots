import CustomSolutions from '@/components/sections/OurProducts/CustomSolutions';
import HeroProducts from '@/components/sections/OurProducts/HeroProducts';
import ProductTabs from '@/components/sections/OurProducts/TapsProducts';

export default function OurProducts() {
  return (
    <div>
      {/* Hero Products */}
      <HeroProducts />
      {/* Tabs Products */}
      <ProductTabs />
      {/* 
      Custom Solutions
      */}
      <CustomSolutions/>
    </div>
  );
}
