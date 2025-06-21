import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { PostHogProvider } from './providers/PostHogProvider';
import { ScrollToTop } from './components/ScrollToTop';
import { ChatWidget } from './components/chat/ChatWidget';
import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionCategoryPage from './pages/QuestionCategoryPage';
import GeneratorPage from './pages/GeneratorPage';
import PricingPage from './pages/PricingPage';
import AccountPage from './pages/AccountPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import EssecPage from './pages/EssecPage';
import EscpPage from './pages/EscpPage';
import EdhecPage from './pages/EdhecPage';
import EmLyonPage from './pages/EmLyonPage';
import SkemaPage from './pages/SKEMAPage';
import AudenciaPage from './pages/AudenciaPage';
import GEMPage from './pages/GEMPage';
import KedgePage from './pages/KedgePage';
import NeomaPage from './pages/NeomaPage';
import InterviewSimulator from './pages/InterviewSimulator';
import CVProjectifPage from './pages/CVProjectifPage';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <PostHogProvider>
          <AuthProvider>
            <ProgressProvider>
              <div className="min-h-screen bg-background">
                <ScrollToTop />
                <Navigation />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/questions" element={<QuestionsPage />} />
                  <Route path="/questions/:categoryId" element={<QuestionCategoryPage />} />
                  <Route path="/generator" element={<GeneratorPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/account" element={<AccountPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/essec" element={<EssecPage />} />
                  <Route path="/escp" element={<EscpPage />} />
                  <Route path="/edhec" element={<EdhecPage />} />
                  <Route path="/em-lyon" element={<EmLyonPage />} />
                  <Route path="/skema" element={<SkemaPage />} />
                  <Route path="/audencia" element={<AudenciaPage />} />
                  <Route path="/gem" element={<GEMPage />} />
                  <Route path="/kedge" element={<KedgePage />} />
                  <Route path="/neoma" element={<NeomaPage />} />
                  <Route path="/interview-simulator" element={<InterviewSimulator />} />
                  <Route path="/questions/cv-projectif" element={<CVProjectifPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <ChatWidget />
                <Toaster />
              </div>
            </ProgressProvider>
          </AuthProvider>
        </PostHogProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
