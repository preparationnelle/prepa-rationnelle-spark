
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import DashboardPage from '@/pages/DashboardPage';
import NotFound from '@/pages/NotFound';
import ProtectedRoute from '@/components/ProtectedRoute';
import QuestionsPage from '@/pages/QuestionsPage';
import QuestionCategoryPage from '@/pages/QuestionCategoryPage';
import SubmissionPage from '@/pages/SubmissionPage';
import GeneratorPage from '@/pages/GeneratorPage';
import InterviewSimulatorPage from '@/pages/InterviewSimulatorPage';
import FullCalendarPage from '@/pages/FullCalendarPage';
import CoachingPage from '@/pages/CoachingPage';
import PersonnaliteMethodePage from '@/pages/PersonnaliteMethodePage';
import ProjetProfessionnelMethodePage from '@/pages/ProjetProfessionnelMethodePage';
import MotivationEcoleMethodePage from '@/pages/MotivationEcoleMethodePage';
import ESCPPage from '@/pages/ESCPPage';
import ESSECPage from '@/pages/ESSECPage';
import EDHECPage from '@/pages/EDHECPage';
import EMLyonPage from '@/pages/EMLyonPage';
import SKEMAPage from '@/pages/SKEMAPage';
import AudenciaPage from '@/pages/AudenciaPage';
import GEMPage from '@/pages/GEMPage';
import KEDGEPage from '@/pages/KEDGEPage';
import NEOMAPage from '@/pages/NEOMAPage';
import AuthOverlay from './components/AuthOverlay';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/questions/:categoryId" element={<QuestionCategoryPage />} />
        <Route path="/ecoles/escp" element={<ESCPPage />} />
        <Route path="/ecoles/essec" element={<ESSECPage />} />
        <Route path="/ecoles/edhec" element={<EDHECPage />} />
        <Route path="/ecoles/emlyon" element={<EMLyonPage />} />
        <Route path="/ecoles/skema" element={<SKEMAPage />} />
        <Route path="/ecoles/audencia" element={<AudenciaPage />} />
        <Route path="/ecoles/gem" element={<GEMPage />} />
        <Route path="/ecoles/kedge" element={<KEDGEPage />} />
        <Route path="/ecoles/neoma" element={<NEOMAPage />} />
        <Route path="/methodes/personnalite" element={<PersonnaliteMethodePage />} />
        <Route path="/methodes/projet-professionnel" element={<ProjetProfessionnelMethodePage />} />
        <Route path="/methodes/motivation-ecole" element={<MotivationEcoleMethodePage />} />
        <Route path="/generator" element={<AuthOverlay />}>
          <Route index element={
            <ProtectedRoute>
              <GeneratorPage />
            </ProtectedRoute>
          } />
        </Route>
        <Route path="/interview" element={<AuthOverlay />}>
          <Route index element={
            <ProtectedRoute>
              <InterviewSimulatorPage />
            </ProtectedRoute>
          } />
        </Route>
        <Route path="/submissions/:id" element={<AuthOverlay />}>
          <Route index element={
            <ProtectedRoute>
              <SubmissionPage />
            </ProtectedRoute>
          } />
        </Route>
        <Route path="/dashboard" element={<AuthOverlay />}>
          <Route index element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
        </Route>
        <Route path="/calendar" element={<AuthOverlay />}>
          <Route index element={
            <ProtectedRoute>
              <FullCalendarPage />
            </ProtectedRoute>
          } />
        </Route>
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
