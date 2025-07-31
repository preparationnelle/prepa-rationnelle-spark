
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { FormationsSection } from '@/components/sections/FormationsSection';
import { OffersSection } from '@/components/OffersSection';
import { SuperprofReviewsSection } from '@/components/sections/SuperprofReviewsSection';
import { AutomationsSection } from '@/components/sections/AutomationsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FormationsSection />
      <OffersSection />
      <SuperprofReviewsSection />
      <AutomationsSection />
      <PodcastSection />
      <PartnersSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
