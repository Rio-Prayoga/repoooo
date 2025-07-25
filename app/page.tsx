import Hero from '@/components/Hero';
import PromoSection from '@/components/PromoSection';
import ServiceSection from '@/components/ServiceSection';
import TestimonialSection from '@/components/TestimonialSection';
import SpecialProductsSection from '@/components/SpecialProductsSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PromoSection />
      <ServiceSection />
      <TestimonialSection />
      <SpecialProductsSection />
      <AboutSection />
    </div>
  );
}