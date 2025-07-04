
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Navigation from './components/Navigation';
import { Footer } from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { ThemeProvider } from './context/ThemeContext';
import PostHogProvider from './providers/PostHogProvider';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import GeneratorPage from './pages/GeneratorPage';
import FlashcardsPage from './pages/FlashcardsPage';
import FormationPage from './pages/FormationPage';
import FormationOverviewPage from './pages/FormationOverviewPage';
import FormationAnglaisPage from './pages/FormationAnglaisPage';
import FormationGeopolitiquePage from './pages/FormationGeopolitiquePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import MethodologiePage from './pages/MethodologiePage';
import { MethodAnglaisPage } from './pages/methodologie/MethodAnglaisPage';
import LanguagesGeneratorPage from './pages/generator/LanguagesGeneratorPage';
import FlashcardsGeneratorPage from './pages/generator/FlashcardsGeneratorPage';
import ThemeGrammaticalPage from './pages/ThemeGrammaticalPage';
import PythonFundamentalsPage from './pages/formation/PythonFundamentalsPage';
import PythonMatricesPage from './pages/formation/PythonMatricesPage';
import PythonMatricesExercicesPage from './pages/formation/PythonMatricesExercicesPage';
import PythonAnalysePage from './pages/formation/PythonAnalysePage';
import PythonAnalyseExercicesPage from './pages/formation/PythonAnalyseExercicesPage';
import PythonProbabilitesPage from './pages/formation/PythonProbabilitesPage';
import PythonProbabilitesExercicesPage from './pages/formation/PythonProbabilitesExercicesPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <PostHogProvider>
          <ProgressProvider>
            <Router>
              <ScrollToTop />
              <div className="min-h-screen bg-background text-foreground">
                <Navigation />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/generator" element={<GeneratorPage />} />
                    <Route path="/flashcards" element={<FlashcardsPage />} />
                    
                    {/* Formation routes - Vue d'ensemble mène vers FormationOverviewPage */}
                    <Route path="/formation" element={<FormationOverviewPage />} />
                    <Route path="/formation/python" element={<FormationPage />} />
                    <Route path="/formation/anglais" element={<FormationAnglaisPage />} />
                    <Route path="/formation/geopolitique" element={<FormationGeopolitiquePage />} />
                    
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    
                    {/* Methodologie routes */}
                    <Route path="/methodologie" element={<MethodologiePage />} />
                    <Route path="/methodologie/anglais" element={<MethodAnglaisPage />} />

                    {/* Generator routes */}
                    <Route path="/generator/languages" element={<LanguagesGeneratorPage />} />
                    <Route path="/generator/flashcards" element={<FlashcardsGeneratorPage />} />
                    <Route path="/theme-grammatical" element={<ThemeGrammaticalPage />} />

                    {/* Python routes */}
                    <Route path="/formation/python-fundamentals" element={<PythonFundamentalsPage />} />
                    <Route path="/formation/python-matrices" element={<PythonMatricesPage />} />
                    <Route path="/formation/python-matrices-exercices" element={<PythonMatricesExercicesPage />} />
                    <Route path="/formation/python-analyse" element={<PythonAnalysePage />} />
                    <Route path="/formation/python-analyse-exercices" element={<PythonAnalyseExercicesPage />} />
                    <Route path="/formation/python-probabilites" element={<PythonProbabilitesPage />} />
                    <Route path="/formation/python-probabilites-exercices" element={<PythonProbabilitesExercicesPage />} />
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
              <Toaster />
            </Router>
          </ProgressProvider>
        </PostHogProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
