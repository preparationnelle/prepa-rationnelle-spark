
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SchoolsSection } from '@/components/sections/SchoolsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { Footer } from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-accent">
      <HeroSection />
      <SchoolsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
