
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import PostHogProvider from './providers/PostHogProvider';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/chat/ChatWidget';
import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionCategoryPage from './pages/QuestionCategoryPage';
import GeneratorPage from './pages/GeneratorPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import ESSECPage from './pages/ESSECPage';
import ESCPPage from './pages/ESCPPage';
import EDHECPage from './pages/EDHECPage';
import EMLyonPage from './pages/EMLyonPage';
import SKEMAPage from './pages/SKEMAPage';
import AudenciaPage from './pages/AudenciaPage';
import GEMPage from './pages/GEMPage';
import KEDGEPage from './pages/KEDGEPage';
import NEOMAPage from './pages/NEOMAPage';
import InterviewSimulatorPage from './pages/InterviewSimulatorPage';
import CVProjectifPage from './pages/CVProjectifPage';
import EntretienInverseGEMPage from './pages/EntretienInverseGEMPage';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <PostHogProvider />
          <ProgressProvider>
            <div className="min-h-screen bg-background">
              <ScrollToTop />
              <Navigation />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/questions" element={<QuestionsPage />} />
                <Route path="/questions/:categoryId" element={<QuestionCategoryPage />} />
                <Route path="/generator" element={<GeneratorPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/essec" element={<ESSECPage />} />
                <Route path="/escp" element={<ESCPPage />} />
                <Route path="/edhec" element={<EDHECPage />} />
                <Route path="/em-lyon" element={<EMLyonPage />} />
                <Route path="/skema" element={<SKEMAPage />} />
                <Route path="/audencia" element={<AudenciaPage />} />
                <Route path="/gem" element={<GEMPage />} />
                <Route path="/kedge" element={<KEDGEPage />} />
                <Route path="/neoma" element={<NEOMAPage />} />
                <Route path="/interview-simulator" element={<InterviewSimulatorPage />} />
                <Route path="/questions/cv-projectif" element={<CVProjectifPage />} />
                <Route path="/questions/entretien-inverse-gem" element={<EntretienInverseGEMPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ChatWidget />
              <Toaster />
            </div>
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
