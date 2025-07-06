
import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '@/components/sections/HeroSection';
import { AutomationsSection } from '@/components/sections/AutomationsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CallToActionSection } from '@/components/sections/CallToActionSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { FormationsSection } from '@/components/sections/FormationsSection';
import OptionalLoginBanner from '@/components/OptionalLoginBanner';
import OffersSection from '@/components/OffersSection';

const HomePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Optionally redirect logged-in users to dashboard
    // Uncomment if you want automatic redirection
    // if (currentUser) {
    //   navigate('/dashboard');
    // }
  }, [currentUser, navigate]);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="container mx-auto px-4">
        <OptionalLoginBanner />
      </div>
      <FormationsSection />
      <OffersSection />
      <AutomationsSection />
      <TestimonialsSection />
      <PodcastSection />
      <PartnersSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
