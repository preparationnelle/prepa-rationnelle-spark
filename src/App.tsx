import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { ThemeProvider } from './context/ThemeContext';
import { PostHogProvider } from './providers/PostHogProvider';
import { ScrollToTop } from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import GeneratorPage from './pages/GeneratorPage';
import FlashcardsPage from './pages/FlashcardsPage';
import FormationPage from './pages/FormationPage';
import FormationAnglaisPage from './pages/FormationAnglaisPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import CGUPage from './pages/CGUPage';
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage';
import MethodologiePage from './pages/MethodologiePage';
import MethodAnglaisPage from './pages/methodologie/MethodAnglaisPage';
import AnglaisCollesPage from './pages/methodologie/AnglaisCollesPage';
import AnglaisGrammairePage from './pages/methodologie/AnglaisGrammairePage';
import AnglaisEssaisSynthesesPage from './pages/methodologie/AnglaisEssaisSynthesesPage';
import GeopolitiquePage from './pages/GeopolitiquePage';
import GeopolitiqueDissertationsPage from './pages/geopolitique/GeopolitiqueDissertationsPage';
import GeopolitiqueFichesPage from './pages/geopolitique/GeopolitiqueFichesPage';
import GeopolitiqueMethodologiePage from './pages/geopolitique/GeopolitiqueMethodologiePage';
import GeopolitiqueActualitePage from './pages/geopolitique/GeopolitiqueActualitePage';
import LanguagesGeneratorPage from './pages/generator/LanguagesGeneratorPage';
import FlashcardsGeneratorPage from './pages/generator/FlashcardsGeneratorPage';
import ThemeGrammaticalPage from './pages/ThemeGrammaticalPage';
import PythonPage from './pages/PythonPage';
import PythonMatricesPage from './pages/python/PythonMatricesPage';
import PythonMatricesExercicesPage from './pages/python/PythonMatricesExercicesPage';
import PythonAnalysePage from './pages/python/PythonAnalysePage';
import PythonAnalyseExercicesPage from './pages/python/PythonAnalyseExercicesPage';
import PythonProbabilitesPage from './pages/python/PythonProbabilitesPage';
import PythonProbabilitesExercicesPage from './pages/python/PythonProbabilitesExercicesPage';
import PythonFundamentalsPage from './pages/python/PythonFundamentalsPage';

function App() {
  return (
    <PostHogProvider>
      <ThemeProvider>
        <AuthProvider>
          <ProgressProvider>
            <Router>
              <ScrollToTop />
              <div className="min-h-screen bg-background text-foreground">
                <Navigation />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/generator" element={<GeneratorPage />} />
                    <Route path="/flashcards" element={<FlashcardsPage />} />
                    <Route path="/formation" element={<FormationPage />} />
                    <Route path="/formation/anglais" element={<FormationAnglaisPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/cgu" element={<CGUPage />} />
                    <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
                    
                    {/* Methodologie routes */}
                    <Route path="/methodologie" element={<MethodologiePage />} />
                    <Route path="/methodologie/anglais" element={<MethodAnglaisPage />} />
                    <Route path="/methodologie/anglais-colles" element={<AnglaisCollesPage />} />
                    <Route path="/methodologie/anglais-grammaire" element={<AnglaisGrammairePage />} />
                    <Route path="/methodologie/anglais-essais-syntheses" element={<AnglaisEssaisSynthesesPage />} />

                    {/* Geopolitique routes */}
                    <Route path="/geopolitique" element={<GeopolitiquePage />} />
                    <Route path="/geopolitique/dissertations" element={<GeopolitiqueDissertationsPage />} />
                    <Route path="/geopolitique/fiches" element={<GeopolitiqueFichesPage />} />
                    <Route path="/geopolitique/methodologie" element={<GeopolitiqueMethodologiePage />} />
                    <Route path="/geopolitique/actualite" element={<GeopolitiqueActualitePage />} />

                    {/* Generator routes */}
                    <Route path="/generator/languages" element={<LanguagesGeneratorPage />} />
                    <Route path="/generator/flashcards" element={<FlashcardsGeneratorPage />} />
                    <Route path="/theme-grammatical" element={<ThemeGrammaticalPage />} />

                    {/* Python routes */}
                    <Route path="/python" element={<PythonPage />} />
                    <Route path="/formation/python-fundamentals" element={<PythonFundamentalsPage />} />
                    <Route path="/formation/python-matrices" element={<PythonMatricesPage />} />
                    <Route path="/formation/python-matrices-exercices" element={<PythonMatricesExercicesPage />} />
                    <Route path="/formation/python-analyse" element={<PythonAnalysePage />} />
                    <Route path="/formation/python-analyse-exercices" element={<PythonAnalyseExercicesPage />} />
                    <Route path="/formation/python-probabilites" element={<PythonProbabilitesPage />} />
                    <Route path="/formation/python-probabilites-exercices" element={<PythonProbabilitesExercicesPage />} />
                    
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
              <Toaster />
            </Router>
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </PostHogProvider>
  );
}

export default App;
