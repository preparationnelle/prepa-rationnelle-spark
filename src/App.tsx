
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/chat/ChatWidget';

// Import PostHog initializer
import { initPostHog } from './integrations/posthog/client';
import PostHogProvider from './providers/PostHogProvider';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GeneratorPage from './pages/GeneratorPage';
import CoachingPage from './pages/CoachingPage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionCategoryPage from './pages/QuestionCategoryPage';
import PersonnaliteMethodePage from './pages/PersonnaliteMethodePage';
import ProjetProfessionnelMethodePage from './pages/ProjetProfessionnelMethodePage';
import MotivationEcoleMethodePage from './pages/MotivationEcoleMethodePage';
import StorytellingMethodePage from './pages/StorytellingMethodePage';
import TendrePerchesMethodePage from './pages/TendrePerchesMethodePage';
import FinirEntretienMethodePage from './pages/FinirEntretienMethodePage';
import ESCPPage from './pages/ESCPPage';
import ESSECPage from './pages/ESSECPage';
import EDHECPage from './pages/EDHECPage';
import EMLyonPage from './pages/EMLyonPage';
import SKEMAPage from './pages/SKEMAPage';
import AudenciaPage from './pages/AudenciaPage';
import GEMPage from './pages/GEMPage';
import KEDGEPage from './pages/KEDGEPage';
import NEOMAPage from './pages/NEOMAPage';
import FullCalendarPage from './pages/FullCalendarPage';
import InterviewSimulatorPage from './pages/InterviewSimulatorPage';
import NotFound from "./pages/NotFound";

// Initialize PostHog
initPostHog();

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ProgressProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <PostHogProvider />
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-background">
              <Navigation />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/methodes/personnalite" element={<PersonnaliteMethodePage />} />
                  <Route path="/methodes/projet-professionnel" element={<ProjetProfessionnelMethodePage />} />
                  <Route path="/methodes/motivation-ecole" element={<MotivationEcoleMethodePage />} />
                  <Route path="/methodes/storytelling" element={<StorytellingMethodePage />} />
                  <Route path="/methodes/tendre-perches" element={<TendrePerchesMethodePage />} />
                  <Route path="/methodes/finir-entretien" element={<FinirEntretienMethodePage />} />
                  <Route path="/generator" element={
                    <ProtectedRoute>
                      <GeneratorPage />
                    </ProtectedRoute>
                  } />
                  <Route path="/coaching" element={
                    <ProtectedRoute>
                      <CoachingPage />
                    </ProtectedRoute>
                  } />
                  {/* Calendar page is still publicly accessible */}
                  <Route path="/calendar" element={<FullCalendarPage />} />
                  <Route path="/questions" element={<QuestionsPage />} />
                  <Route path="/questions/:categoryId" element={<QuestionCategoryPage />} />
                  <Route path="/interview-simulator" element={<InterviewSimulatorPage />} />
                  <Route path="/ecoles/escp" element={<ESCPPage />} />
                  <Route path="/ecoles/essec" element={<ESSECPage />} />
                  <Route path="/ecoles/edhec" element={<EDHECPage />} />
                  <Route path="/ecoles/emlyon" element={<EMLyonPage />} />
                  <Route path="/ecoles/skema" element={<SKEMAPage />} />
                  <Route path="/ecoles/audencia" element={<AudenciaPage />} />
                  <Route path="/ecoles/gem" element={<GEMPage />} />
                  <Route path="/ecoles/kedge" element={<KEDGEPage />} />
                  <Route path="/ecoles/neoma" element={<NEOMAPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <ChatWidget />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ProgressProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
