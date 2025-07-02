import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './components/Navigation';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from '@/components/ui/sonner';
import PostHogProvider from './providers/PostHogProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import FormationPage from './pages/FormationPage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionCategoryPage from './pages/QuestionCategoryPage';
import FlashcardsPage from './pages/FlashcardsPage';
import GeneratorPage from './pages/GeneratorPage';
import FlashcardsGeneratorPage from './pages/generator/FlashcardsGeneratorPage';
import AnswerGeneratorPage from './pages/generator/AnswerGeneratorPage';
import CaseStudyGeneratorPage from './pages/generator/CaseStudyGeneratorPage';
import GeopoliticsGeneratorPage from './pages/generator/GeopoliticsGeneratorPage';
import LanguagesGeneratorPage from './pages/generator/LanguagesGeneratorPage';
import SchoolProfileGeneratorPage from './pages/generator/SchoolProfileGeneratorPage';
import PrepaChatbotGeneratorPage from './pages/generator/PrepaChatbotGeneratorPage';
import PythonTutorGeneratorPage from './pages/generator/PythonTutorGeneratorPage';
import PythonExercisesGeneratorPage from './pages/generator/PythonExercisesGeneratorPage';
import MathTutorGeneratorPage from './pages/generator/MathTutorGeneratorPage';
import ThemeGrammarGeneratorPage from './pages/generator/ThemeGrammarGeneratorPage';
import EDHECGeneratorPage from './pages/generator/EDHECGeneratorPage';
import EMLyonGeneratorPage from './pages/generator/EMLyonGeneratorPage';
import InterviewSimulatorPage from './pages/InterviewSimulatorPage';
import CoachingPage from './pages/CoachingPage';
import ContactPage from './pages/ContactPage';
import SubmissionPage from './pages/SubmissionPage';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import EDHECPage from './pages/EDHECPage';
import ESSECPage from './pages/ESSECPage';
import ESCPPage from './pages/ESCPPage';
import EMLyonPage from './pages/EMLyonPage';
import GEMPage from './pages/GEMPage';
import AudenciaPage from './pages/AudenciaPage';
import NEOMAPage from './pages/NEOMAPage';
import KEDGEPage from './pages/KEDGEPage';
import SKEMAPage from './pages/SKEMAPage';
import MethodologiePage from './pages/MethodologiePage';
import { MethodMathsPage } from './pages/methodologie/MethodMathsPage';
import { MethodPythonPage } from './pages/methodologie/MethodPythonPage';
import { MethodAnglaisPage } from './pages/methodologie/MethodAnglaisPage';
import { MethodCulturePage } from './pages/methodologie/MethodCulturePage';
import { MethodGeopolitiquePage } from './pages/methodologie/MethodGeopolitiquePage';
import MethodEntretiensPersonnalitePage from './pages/methodologie/MethodEntretiensPersonnalitePage';
import { MethodGrammairePage } from './pages/methodologie/MethodGrammairePage';
import { MethodGrammaireAllemandePage } from './pages/methodologie/MethodGrammaireAllemandePage';
import { MethodGrammaireStructurePage } from './pages/methodologie/MethodGrammaireStructurePage';
import { MethodGrammaireReglesPage } from './pages/methodologie/MethodGrammaireReglesPage';
import { MethodGrammaireRelativesPage } from './pages/methodologie/MethodGrammaireRelativesPage';
import { MethodGrammairePassifPage } from './pages/methodologie/MethodGrammairePassifPage';
import { MethodGrammaireDeclinaisonsPage } from './pages/methodologie/MethodGrammaireDeclinaisonsPage';
import { MethodAllemandPage } from './pages/methodologie/MethodAllemandPage';
import { MethodAllemandEssaiPage } from './pages/methodologie/MethodAllemandEssaiPage';
import { MethodAllemandSynthesePage } from './pages/methodologie/MethodAllemandSynthesePage';
import ArticleAllemandEssaiIntroduction from './pages/methodologie/ArticleAllemandEssaiIntroduction';
import ArticleAllemandEssaiTeil1 from './pages/methodologie/ArticleAllemandEssaiTeil1';
import ArticleAllemandEssaiTeil2 from './pages/methodologie/ArticleAllemandEssaiTeil2';
import ArticleAllemandEssaiKritik from './pages/methodologie/ArticleAllemandEssaiKritik';
import ArticleAllemandEssaiConclusion from './pages/methodologie/ArticleAllemandEssaiConclusion';
import ArticleAllemandEssaiExemples from './pages/methodologie/ArticleAllemandEssaiExemples';
import ArticleAllemandAnalyseLexique from './pages/methodologie/ArticleAllemandAnalyseLexique';
import ArticleAnglaisColles from './pages/methodologie/ArticleAnglaisColles';
import ArticleAnglaisConcours from './pages/methodologie/ArticleAnglaisConcours';
import ArticleAnglaisEssaisSyntheses from './pages/methodologie/ArticleAnglaisEssaisSyntheses';
import ArticleAnglaisGrammaire from './pages/methodologie/ArticleAnglaisGrammaire';
import ArticleAnglaisOrganisation from './pages/methodologie/ArticleAnglaisOrganisation';
import ArticleAnglaisProgress from './pages/methodologie/ArticleAnglaisProgress';
import ArticleAnglaisThemes from './pages/methodologie/ArticleAnglaisThemes';
import { MathsEteECG1ECG2Page } from './pages/methodologie/MathsEteECG1ECG2Page';
import PitchIntroMethodePage from './pages/PitchIntroMethodePage';
import MotivationEcoleMethodePage from './pages/MotivationEcoleMethodePage';
import ProjetProfessionnelMethodePage from './pages/ProjetProfessionnelMethodePage';
import PersonnaliteMethodePage from './pages/PersonnaliteMethodePage';
import StorytellingMethodePage from './pages/StorytellingMethodePage';
import TendrePerchesMethodePage from './pages/TendrePerchesMethodePage';
import FinirEntretienMethodePage from './pages/FinirEntretienMethodePage';
import ErreurEntretienMethodePage from './pages/ErreurEntretienMethodePage';
import EntretienInverseGEMPage from './pages/EntretienInverseGEMPage';
import NosOffresPage from './pages/NosOffresPage';
import OrganisationEtePage from './pages/offres/OrganisationEtePage';
import PreparationCubePage from './pages/offres/PreparationCubePage';
import CoachingPythonPage from './pages/offres/CoachingPythonPage';
import CoachingMathsPage from './pages/offres/CoachingMathsPage';
import CVProjectifPage from './pages/CVProjectifPage';
import PartnersPage from './pages/PartnersPage';
import AproposPage from './pages/AproposPage';
import FullCalendarPage from './pages/FullCalendarPage';
import MotivationObjectivesPage from './pages/questions/MotivationObjectivesPage';
import ProjectionScenariosPage from './pages/questions/ProjectionScenariosPage';
import InterpersonalTeamworkPage from './pages/questions/InterpersonalTeamworkPage';
import ThemeGrammaticalPage from './pages/ThemeGrammaticalPage';
import PythonReferencePage from './pages/PythonReferencePage';
import PythonArticlePage from './pages/PythonArticlePage';
import PourquoiPythonPrepaECGPage from './pages/PourquoiPythonPrepaECGPage';
import PythonFundamentalsPage from './pages/formation/PythonFundamentalsPage';
import PythonMatricesPage from './pages/formation/PythonMatricesPage';
import PythonAnalysePage from './pages/formation/PythonAnalysePage';
import PythonProbabilitesPage from './pages/formation/PythonProbabilitesPage';
import PythonAnalyseExercicesPage from './pages/formation/PythonAnalyseExercicesPage';
import PythonFondamentauxExercicesPage from './pages/formation/PythonFondamentauxExercicesPage';
import PythonMatricesExercicesPage from './pages/formation/PythonMatricesExercicesPage';
import PythonProbabilitesExercicesPage from './pages/formation/PythonProbabilitesExercicesPage';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <ProgressProvider>
            <Router>
              <PostHogProvider />
              <div className="min-h-screen bg-background">
                <ScrollToTop />
                <Navigation />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route 
                    path="/dashboard" 
                    element={
                      <ProtectedRoute>
                        <DashboardPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route path="/formation" element={<FormationPage />} />
                  <Route path="/formation/python-fondamentaux" element={<PythonFundamentalsPage />} />
                  <Route path="/formation/python-matrices" element={<PythonMatricesPage />} />
                  <Route path="/formation/python-analyse" element={<PythonAnalysePage />} />
                  <Route path="/formation/python-probabilites" element={<PythonProbabilitesPage />} />
                  <Route path="/formation/python-fondamentaux-exercices" element={<PythonFondamentauxExercicesPage />} />
                  <Route path="/formation/python-matrices-exercices" element={<PythonMatricesExercicesPage />} />
                  <Route path="/formation/python-analyse-exercices" element={<PythonAnalyseExercicesPage />} />
                  <Route path="/formation/python-probabilites-exercices" element={<PythonProbabilitesExercicesPage />} />
                  <Route path="/questions" element={<QuestionsPage />} />
                  <Route path="/questions/:category" element={<QuestionCategoryPage />} />
                  <Route path="/questions/motivation-objectives" element={<MotivationObjectivesPage />} />
                  <Route path="/questions/projection-scenarios" element={<ProjectionScenariosPage />} />
                  <Route path="/questions/interpersonal-teamwork" element={<InterpersonalTeamworkPage />} />
                  <Route 
                    path="/flashcards" 
                    element={
                      <ProtectedRoute>
                        <FlashcardsPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route path="/generator" element={<GeneratorPage />} />
                  <Route path="/generator/flashcards" element={<FlashcardsGeneratorPage />} />
                  <Route path="/generator/answer" element={<AnswerGeneratorPage />} />
                  <Route path="/generator/case-study" element={<CaseStudyGeneratorPage />} />
                  <Route path="/generator/geopolitics" element={<GeopoliticsGeneratorPage />} />
                  <Route path="/generator/languages" element={<LanguagesGeneratorPage />} />
                  <Route path="/generator/school-profile" element={<SchoolProfileGeneratorPage />} />
                  <Route path="/generator/prepa-chatbot" element={<PrepaChatbotGeneratorPage />} />
                  <Route path="/generator/python-tutor" element={<PythonTutorGeneratorPage />} />
                  <Route path="/generator/python-exercises" element={<PythonExercisesGeneratorPage />} />
                  <Route path="/generator/math-tutor" element={<MathTutorGeneratorPage />} />
                  <Route path="/generator/theme-grammar" element={<ThemeGrammarGeneratorPage />} />
                  <Route path="/generator/edhec" element={<EDHECGeneratorPage />} />
                  <Route path="/generator/emlyon" element={<EMLyonGeneratorPage />} />
                  <Route path="/interview-simulator" element={<InterviewSimulatorPage />} />
                  <Route path="/coaching" element={<CoachingPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route 
                    path="/submission" 
                    element={
                      <ProtectedRoute>
                        <SubmissionPage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route path="/edhec" element={<EDHECPage />} />
                  <Route path="/essec" element={<ESSECPage />} />
                  <Route path="/escp" element={<ESCPPage />} />
                  <Route path="/emlyon" element={<EMLyonPage />} />
                  <Route path="/gem" element={<GEMPage />} />
                  <Route path="/audencia" element={<AudenciaPage />} />
                  <Route path="/neoma" element={<NEOMAPage />} />
                  <Route path="/kedge" element={<KEDGEPage />} />
                  <Route path="/skema" element={<SKEMAPage />} />
                  <Route path="/methodologie" element={<MethodologiePage />} />
                  <Route path="/methodologie/maths" element={<MethodMathsPage />} />
                  <Route path="/methodologie/python" element={<MethodPythonPage />} />
                  <Route path="/methodologie/anglais" element={<MethodAnglaisPage />} />
                  <Route path="/methodologie/culture" element={<MethodCulturePage />} />
                  <Route path="/methodologie/geopolitique" element={<MethodGeopolitiquePage />} />
                  <Route path="/methodologie/entretiens-personnalite" element={<MethodEntretiensPersonnalitePage />} />
                  <Route path="/methodologie/grammaire" element={<MethodGrammairePage />} />
                  <Route path="/methodologie/grammaire-allemande" element={<MethodGrammaireAllemandePage />} />
                  <Route path="/methodologie/grammaire-structure" element={<MethodGrammaireStructurePage />} />
                  <Route path="/methodologie/grammaire-regles" element={<MethodGrammaireReglesPage />} />
                  <Route path="/methodologie/grammaire-relatives" element={<MethodGrammaireRelativesPage />} />
                  <Route path="/methodologie/grammaire-passif" element={<MethodGrammairePassifPage />} />
                  <Route path="/methodologie/grammaire-declinaisons" element={<MethodGrammaireDeclinaisonsPage />} />
                  <Route path="/methodologie/allemand" element={<MethodAllemandPage />} />
                  <Route path="/methodologie/allemand-essai" element={<MethodAllemandEssaiPage />} />
                  <Route path="/methodologie/allemand-synthese" element={<MethodAllemandSynthesePage />} />
                  <Route path="/methodologie/allemand-essai-introduction" element={<ArticleAllemandEssaiIntroduction />} />
                  <Route path="/methodologie/allemand-essai-teil1" element={<ArticleAllemandEssaiTeil1 />} />
                  <Route path="/methodologie/allemand-essai-teil2" element={<ArticleAllemandEssaiTeil2 />} />
                  <Route path="/methodologie/allemand-essai-kritik" element={<ArticleAllemandEssaiKritik />} />
                  <Route path="/methodologie/allemand-essai-conclusion" element={<ArticleAllemandEssaiConclusion />} />
                  <Route path="/methodologie/allemand-essai-exemples" element={<ArticleAllemandEssaiExemples />} />
                  <Route path="/methodologie/allemand-analyse-lexique" element={<ArticleAllemandAnalyseLexique />} />
                  <Route path="/methodologie/anglais-colles" element={<ArticleAnglaisColles />} />
                  <Route path="/methodologie/anglais-concours" element={<ArticleAnglaisConcours />} />
                  <Route path="/methodologie/anglais-essais-syntheses" element={<ArticleAnglaisEssaisSyntheses />} />
                  <Route path="/methodologie/anglais-grammaire" element={<ArticleAnglaisGrammaire />} />
                  <Route path="/methodologie/anglais-organisation" element={<ArticleAnglaisOrganisation />} />
                  <Route path="/methodologie/anglais-progress" element={<ArticleAnglaisProgress />} />
                  <Route path="/methodologie/anglais-themes" element={<ArticleAnglaisThemes />} />
                  <Route path="/methodologie/maths-ete-ecg1-ecg2" element={<MathsEteECG1ECG2Page />} />
                  <Route path="/pitch-intro-methode" element={<PitchIntroMethodePage />} />
                  <Route path="/motivation-ecole-methode" element={<MotivationEcoleMethodePage />} />
                  <Route path="/projet-professionnel-methode" element={<ProjetProfessionnelMethodePage />} />
                  <Route path="/personnalite-methode" element={<PersonnaliteMethodePage />} />
                  <Route path="/storytelling-methode" element={<StorytellingMethodePage />} />
                  <Route path="/tendre-perches-methode" element={<TendrePerchesMethodePage />} />
                  <Route path="/finir-entretien-methode" element={<FinirEntretienMethodePage />} />
                  <Route path="/erreur-entretien-methode" element={<ErreurEntretienMethodePage />} />
                  <Route path="/entretien-inverse-gem" element={<EntretienInverseGEMPage />} />
                  <Route path="/nos-offres" element={<NosOffresPage />} />
                  <Route path="/offres/organisation-ete" element={<OrganisationEtePage />} />
                  <Route path="/offres/preparation-cube" element={<PreparationCubePage />} />
                  <Route path="/offres/coaching-python" element={<CoachingPythonPage />} />
                  <Route path="/offres/coaching-maths" element={<CoachingMathsPage />} />
                  <Route path="/cv-projectif" element={<CVProjectifPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/apropos" element={<AproposPage />} />
                  <Route path="/calendar" element={<FullCalendarPage />} />
                  <Route path="/theme-grammatical" element={<ThemeGrammaticalPage />} />
                  <Route path="/python-reference" element={<PythonReferencePage />} />
                  <Route path="/python-article" element={<PythonArticlePage />} />
                  <Route path="/pourquoi-python-prepa-ecg" element={<PourquoiPythonPrepaECGPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
                <Toaster />
              </div>
            </Router>
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
