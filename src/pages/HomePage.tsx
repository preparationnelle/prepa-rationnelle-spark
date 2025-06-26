
import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AutomationsSection from '@/components/sections/AutomationsSection';
import SchoolsSection from '@/components/sections/SchoolsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import PodcastSection from '@/components/sections/PodcastSection';
import PartnersSection from '@/components/sections/PartnersSection';

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
      <FeaturesSection />
      <AutomationsSection />
      <SchoolsSection />
      <TestimonialsSection />
      <PricingSection />
      <PodcastSection />
      <PartnersSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
