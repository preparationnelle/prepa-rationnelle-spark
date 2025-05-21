
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

// Import pages
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import QuestionsPage from '@/pages/QuestionsPage';
import QuestionCategoryPage from '@/pages/QuestionCategoryPage';
import GeneratorPage from '@/pages/GeneratorPage';
import InterviewSimulatorPage from '@/pages/InterviewSimulatorPage';
import SchoolTemplate from '@/components/SchoolTemplate';
import ESSECPage from '@/pages/ESSECPage';
import ESCPPage from '@/pages/ESCPPage';
import EMLyonPage from '@/pages/EMLyonPage';
import EDHECPage from '@/pages/EDHECPage';
import NEOMAPage from '@/pages/NEOMAPage';
import SKEMAPage from '@/pages/SKEMAPage';
import KEDGEPage from '@/pages/KEDGEPage';
import AudenciaPage from '@/pages/AudenciaPage';
import GEMPage from '@/pages/GEMPage';
import FullCalendarPage from '@/pages/FullCalendarPage';
import CoachingPage from '@/pages/CoachingPage';
import DashboardPage from '@/pages/DashboardPage';
import SubmissionPage from '@/pages/SubmissionPage';
import PersonnaliteMethodePage from '@/pages/PersonnaliteMethodePage';
import ProjetProfessionnelMethodePage from '@/pages/ProjetProfessionnelMethodePage';
import MotivationEcoleMethodePage from '@/pages/MotivationEcoleMethodePage';
import StorytellingMethodePage from '@/pages/StorytellingMethodePage';
import TendrePerchesMethodePage from '@/pages/TendrePerchesMethodePage';
import FinirEntretienMethodePage from '@/pages/FinirEntretienMethodePage';
import ApiKeysPage from '@/pages/ApiKeysPage';
import NotFound from '@/pages/NotFound';

// Import components
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

// Import contexts
import { AuthProvider } from '@/context/AuthContext';
import { ProgressProvider } from '@/context/ProgressContext';

// Integrations
import PostHogProvider from '@/providers/PostHogProvider';

// Utils
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProgressProvider>
          <ThemeProvider defaultTheme="light">
            <Toaster />
            <PostHogProvider />
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/questions" element={<QuestionsPage />} />
                  <Route path="/questions/:categorySlug" element={<QuestionCategoryPage />} />
                  <Route path="/generator" element={<GeneratorPage />} />
                  <Route path="/interview-simulator" element={<InterviewSimulatorPage />} />
                  <Route path="/hec" element={<SchoolTemplate schoolName="HEC" />} />
                  <Route path="/essec" element={<ESSECPage />} />
                  <Route path="/escp" element={<ESCPPage />} />
                  <Route path="/emlyon" element={<EMLyonPage />} />
                  <Route path="/edhec" element={<EDHECPage />} />
                  <Route path="/neoma" element={<NEOMAPage />} />
                  <Route path="/skema" element={<SKEMAPage />} />
                  <Route path="/kedge" element={<KEDGEPage />} />
                  <Route path="/audencia" element={<AudenciaPage />} />
                  <Route path="/gem" element={<GEMPage />} />
                  <Route path="/calendar" element={<FullCalendarPage />} />
                  <Route path="/coaching" element={<CoachingPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/submissions/:id" element={<SubmissionPage />} />
                  <Route path="/api-keys" element={<ApiKeysPage />} />
                  <Route path="/methodes/personnalite" element={<PersonnaliteMethodePage />} />
                  <Route path="/methodes/projet-professionnel" element={<ProjetProfessionnelMethodePage />} />
                  <Route path="/methodes/motivation-ecole" element={<MotivationEcoleMethodePage />} />
                  <Route path="/methodes/storytelling" element={<StorytellingMethodePage />} />
                  <Route path="/methodes/tendre-perches" element={<TendrePerchesMethodePage />} />
                  <Route path="/methodes/finir-entretien" element={<FinirEntretienMethodePage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </ProgressProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
