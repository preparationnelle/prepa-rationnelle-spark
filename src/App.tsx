
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import PostHogProvider from '@/providers/PostHogProvider';
import { ThemeProvider } from '@/context/ThemeContext';
import { ProgressProvider } from '@/context/ProgressContext';
import { AuthProvider } from '@/context/AuthContext';
import ScrollToTop from '@/components/ScrollToTop';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import ProtectedRoute from '@/components/ProtectedRoute';

// Import all pages
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import GeneratorPage from '@/pages/GeneratorPage';
import FlashcardsPage from '@/pages/FlashcardsPage';
import DashboardPage from '@/pages/DashboardPage';
import ContactPage from '@/pages/ContactPage';
import QuestionsPage from '@/pages/QuestionsPage';
import CoachingPage from '@/pages/CoachingPage';
import AproposPage from '@/pages/AproposPage';
import PartnersPage from '@/pages/PartnersPage';
import MethodologiePage from '@/pages/MethodologiePage';
import PersonnaliteMethodePage from '@/pages/PersonnaliteMethodePage';
import NotFound from '@/pages/NotFound';

// Import des pages des générateurs individuels
import AnswerGeneratorPage from './pages/generator/AnswerGeneratorPage';
import FlashcardsGeneratorPage from './pages/generator/FlashcardsGeneratorPage';
import LanguagesGeneratorPage from './pages/generator/LanguagesGeneratorPage';
import GeopoliticsGeneratorPage from './pages/generator/GeopoliticsGeneratorPage';
import CaseStudyGeneratorPage from './pages/generator/CaseStudyGeneratorPage';
import EMLyonGeneratorPage from './pages/generator/EMLyonGeneratorPage';
import EDHECGeneratorPage from './pages/generator/EDHECGeneratorPage';
import ThemeGrammarGeneratorPage from './pages/generator/ThemeGrammarGeneratorPage';
import SchoolProfileGeneratorPage from './pages/generator/SchoolProfileGeneratorPage';
import MathTutorGeneratorPage from './pages/generator/MathTutorGeneratorPage';
import PythonTutorGeneratorPage from './pages/generator/PythonTutorGeneratorPage';
import PythonExercisesGeneratorPage from './pages/generator/PythonExercisesGeneratorPage';
import PrepaChatbotGeneratorPage from './pages/generator/PrepaChatbotGeneratorPage';

// Import methodology pages
import { MethodAnglaisPage } from '@/pages/methodologie/MethodAnglaisPage';
import { MethodMathsPage } from '@/pages/methodologie/MethodMathsPage';
import { MethodGeopolitiquePage } from '@/pages/methodologie/MethodGeopolitiquePage';
import { MethodCulturePage } from '@/pages/methodologie/MethodCulturePage';
import { MethodAllemandPage } from '@/pages/methodologie/MethodAllemandPage';
import { MethodAllemandEssaiPage } from '@/pages/methodologie/MethodAllemandEssaiPage';
import { MethodAllemandSynthesePage } from '@/pages/methodologie/MethodAllemandSynthesePage';
import { MethodPythonPage } from '@/pages/methodologie/MethodPythonPage';
import { MathsEteECG1ECG2Page } from '@/pages/methodologie/MathsEteECG1ECG2Page';
import { MethodGrammairePage } from '@/pages/methodologie/MethodGrammairePage';
import { MethodGrammaireReglesPage } from '@/pages/methodologie/MethodGrammaireReglesPage';
import { MethodGrammaireAllemandePage } from '@/pages/methodologie/MethodGrammaireAllemandePage';
import { MethodGrammaireStructurePage } from '@/pages/methodologie/MethodGrammaireStructurePage';
import { MethodGrammaireDeclinaisonsPage } from '@/pages/methodologie/MethodGrammaireDeclinaisonsPage';
import { MethodGrammairePassifPage } from '@/pages/methodologie/MethodGrammairePassifPage';
import { MethodGrammaireRelativesPage } from '@/pages/methodologie/MethodGrammaireRelativesPage';

import NosOffresPage from '@/pages/NosOffresPage';
import OrganisationEtePage from '@/pages/offres/OrganisationEtePage';
import CoachingMathsPage from '@/pages/offres/CoachingMathsPage';
import CoachingPythonPage from '@/pages/offres/CoachingPythonPage';
import PreparationCubePage from '@/pages/offres/PreparationCubePage';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PostHogProvider>
        <ThemeProvider>
          <AuthProvider>
            <ProgressProvider>
              <Router>
                <ScrollToTop />
                <Navigation />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/questions" element={<QuestionsPage />} />
                    <Route path="/coaching" element={<CoachingPage />} />
                    <Route path="/apropos" element={<AproposPage />} />
                    <Route path="/partners" element={<PartnersPage />} />
                    <Route path="/methodologie" element={<MethodologiePage />} />
                    <Route path="/methodes/personnalite" element={<PersonnaliteMethodePage />} />
                    
                    {/* Protected routes */}
                    <Route path="/generator" element={
                      <ProtectedRoute>
                        <GeneratorPage />
                      </ProtectedRoute>
                    } />
                    <Route path="/flashcards" element={
                      <ProtectedRoute>
                        <FlashcardsPage />
                      </ProtectedRoute>
                    } />
                    <Route path="/dashboard" element={
                      <ProtectedRoute>
                        <DashboardPage />
                      </ProtectedRoute>
                    } />
                    
                    {/* Routes de méthodologie */}
                    <Route path="/methodologie/anglais" element={<MethodAnglaisPage />} />
                    <Route path="/methodologie/maths" element={<MethodMathsPage />} />
                    <Route path="/methodologie/geopolitique" element={<MethodGeopolitiquePage />} />
                    <Route path="/methodologie/culture-generale" element={<MethodCulturePage />} />
                    <Route path="/methodologie/allemand" element={<MethodAllemandPage />} />
                    <Route path="/methodologie/allemand/essai" element={<MethodAllemandEssaiPage />} />
                    <Route path="/methodologie/allemand/synthese" element={<MethodAllemandSynthesePage />} />
                    <Route path="/methodologie/python" element={<MethodPythonPage />} />
                    <Route path="/methodologie/ete/maths-ecg1-ecg2" element={<MathsEteECG1ECG2Page />} />
                    <Route path="/methodologie/grammaire" element={<MethodGrammairePage />} />
                    <Route path="/methodologie/grammaire/regles-recurrentes" element={<MethodGrammaireReglesPage />} />
                    <Route path="/methodologie/grammaire/conjugaison-allemande" element={<MethodGrammaireAllemandePage />} />
                    <Route path="/methodologie/grammaire/structure-phrase-allemande" element={<MethodGrammaireStructurePage />} />
                    <Route path="/methodologie/grammaire/declinaisons-adjectif" element={<MethodGrammaireDeclinaisonsPage />} />
                    <Route path="/methodologie/grammaire/passif-allemand" element={<MethodGrammairePassifPage />} />
                    <Route path="/methodologie/grammaire/relatives-allemand" element={<MethodGrammaireRelativesPage />} />

                    {/* Routes des générateurs individuels */}
                    <Route path="/generator/answer" element={<AnswerGeneratorPage />} />
                    <Route path="/generator/flashcards" element={<FlashcardsGeneratorPage />} />
                    <Route path="/generator/languages" element={<LanguagesGeneratorPage />} />
                    <Route path="/generator/geopolitics" element={<GeopoliticsGeneratorPage />} />
                    <Route path="/generator/case-study" element={<CaseStudyGeneratorPage />} />
                    <Route path="/generator/emlyon" element={<EMLyonGeneratorPage />} />
                    <Route path="/generator/edhec" element={<EDHECGeneratorPage />} />
                    <Route path="/generator/theme-grammar" element={<ThemeGrammarGeneratorPage />} />
                    <Route path="/generator/school-profile" element={<SchoolProfileGeneratorPage />} />
                    <Route path="/generator/math-tutor" element={<MathTutorGeneratorPage />} />
                    <Route path="/generator/python-tutor" element={<PythonTutorGeneratorPage />} />
                    <Route path="/generator/python-exercises" element={<PythonExercisesGeneratorPage />} />
                    <Route path="/generator/prepa-chatbot" element={<PrepaChatbotGeneratorPage />} />
                    
                    <Route path="/nos-offres" element={<NosOffresPage />} />
                    <Route path="/offre/organisation-ete" element={<OrganisationEtePage />} />
                    <Route path="/offre/coaching-maths" element={<CoachingMathsPage />} />
                    <Route path="/offre/coaching-python" element={<CoachingPythonPage />} />
                    <Route path="/offre/preparation-cube" element={<PreparationCubePage />} />
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </Router>
              <Toaster />
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
      </PostHogProvider>
    </div>
  );
}

export default App;
