
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import GeneratorPage from './pages/GeneratorPage';
import SubmissionPage from './pages/SubmissionPage';
import CoachingPage from './pages/CoachingPage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionCategoryPage from './pages/QuestionCategoryPage';
import ESCPPage from './pages/ESCPPage';
import ESSECPage from './pages/ESSECPage';
import EDHECPage from './pages/EDHECPage';
import EMLyonPage from './pages/EMLyonPage';
import SKEMAPage from './pages/SKEMAPage';
import AudenciaPage from './pages/AudenciaPage';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-background">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } />
                <Route path="/generator" element={
                  <ProtectedRoute>
                    <GeneratorPage />
                  </ProtectedRoute>
                } />
                <Route path="/submission" element={
                  <ProtectedRoute>
                    <SubmissionPage />
                  </ProtectedRoute>
                } />
                <Route path="/coaching" element={
                  <ProtectedRoute>
                    <CoachingPage />
                  </ProtectedRoute>
                } />
                <Route path="/questions" element={<QuestionsPage />} />
                <Route path="/questions/:categoryId" element={<QuestionCategoryPage />} />
                <Route path="/ecoles/escp" element={<ESCPPage />} />
                <Route path="/ecoles/essec" element={<ESSECPage />} />
                <Route path="/ecoles/edhec" element={<EDHECPage />} />
                <Route path="/ecoles/emlyon" element={<EMLyonPage />} />
                <Route path="/ecoles/skema" element={<SKEMAPage />} />
                <Route path="/ecoles/audencia" element={<AudenciaPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
