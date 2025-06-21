import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ProgressProvider } from "@/context/ProgressContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// All page imports
import HomePage from "@/pages/HomePage";
import QuestionsPage from "@/pages/QuestionsPage";
import QuestionCategoryPage from "@/pages/QuestionCategoryPage";
import EntretienInverseGEMPage from "@/pages/EntretienInverseGEMPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import DashboardPage from "@/pages/DashboardPage";
import FlashcardsPage from "@/pages/FlashcardsPage";
import GeneratorPage from "@/pages/GeneratorPage";
import ThemeGrammaticalPage from "@/pages/ThemeGrammaticalPage";
import InterviewSimulatorPage from "@/pages/InterviewSimulatorPage";
import SubmissionPage from "@/pages/SubmissionPage";
import ContactPage from "@/pages/ContactPage";
import AproposPage from "@/pages/AproposPage";
import PartnersPage from "@/pages/PartnersPage";
import CoachingPage from "@/pages/CoachingPage";
import FullCalendarPage from "@/pages/FullCalendarPage";
import MethodologiePage from "@/pages/MethodologiePage";
import PersonnaliteMethodePage from "@/pages/PersonnaliteMethodePage";
import MotivationEcoleMethodePage from "@/pages/MotivationEcoleMethodePage";
import ProjetProfessionnelMethodePage from "@/pages/ProjetProfessionnelMethodePage";
import PitchIntroMethodePage from "@/pages/PitchIntroMethodePage";
import StorytellingMethodePage from "@/pages/StorytellingMethodePage";
import TendrePerchesMethodePage from "@/pages/TendrePerchesMethodePage";
import FinirEntretienMethodePage from "@/pages/FinirEntretienMethodePage";
import ErreurEntretienMethodePage from "@/pages/ErreurEntretienMethodePage";
import NotFound from "@/pages/NotFound";
import EDHECPage from "@/pages/EDHECPage";
import EMLyonPage from "@/pages/EMLyonPage";
import ESCPPage from "@/pages/ESCPPage";
import ESSECPage from "@/pages/ESSECPage";
import SKEMAPage from "@/pages/SKEMAPage";
import KEDGEPage from "@/pages/KEDGEPage";
import NEOMAPage from "@/pages/NEOMAPage";
import GEMPage from "@/pages/GEMPage";
import AudenciaPage from "@/pages/AudenciaPage";
import MethodAnglaisPage from "@/pages/methodologie/MethodAnglaisPage";
import MethodAllemandPage from "@/pages/methodologie/MethodAllemandPage";
import MethodAllemandEssaiPage from "@/pages/methodologie/MethodAllemandEssaiPage";
import MethodAllemandSynthesePage from "@/pages/methodologie/MethodAllemandSynthesePage";
import MethodGeopolitiquePage from "@/pages/methodologie/MethodGeopolitiquePage";
import MethodCulturePage from "@/pages/methodologie/MethodCulturePage";
import MethodMathsPage from "@/pages/methodologie/MethodMathsPage";
import MethodPythonPage from "@/pages/methodologie/MethodPythonPage";
import ArticleAnglaisOrganisation from "@/pages/methodologie/ArticleAnglaisOrganisation";
import ArticleAnglaisProgress from "@/pages/methodologie/ArticleAnglaisProgress";
import ArticleAnglaisGrammaire from "@/pages/methodologie/ArticleAnglaisGrammaire";
import ArticleAnglaisThemes from "@/pages/methodologie/ArticleAnglaisThemes";
import ArticleAnglaisColles from "@/pages/methodologie/ArticleAnglaisColles";
import ArticleAnglaisConcours from "@/pages/methodologie/ArticleAnglaisConcours";
import ArticleAnglaisEssaisSyntheses from "@/pages/methodologie/ArticleAnglaisEssaisSyntheses";
import ArticleAllemandAnalyseLexique from "@/pages/methodologie/ArticleAllemandAnalyseLexique";
import ArticleAllemandEssaiIntroduction from "@/pages/methodologie/ArticleAllemandEssaiIntroduction";
import ArticleAllemandEssaiTeil1 from "@/pages/methodologie/ArticleAllemandEssaiTeil1";
import ArticleAllemandEssaiTeil2 from "@/pages/methodologie/ArticleAllemandEssaiTeil2";
import ArticleAllemandEssaiKritik from "@/pages/methodologie/ArticleAllemandEssaiKritik";
import ArticleAllemandEssaiConclusion from "@/pages/methodologie/ArticleAllemandEssaiConclusion";
import ArticleAllemandEssaiExemples from "@/pages/methodologie/ArticleAllemandEssaiExemples";

// Create a stable QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AuthProvider>
              <ProgressProvider>
                <div className="min-h-screen bg-background font-sans antialiased">
                  <Navigation />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/questions" element={<QuestionsPage />} />
                      <Route path="/questions/:category" element={<QuestionCategoryPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/register" element={<RegisterPage />} />
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/flashcards" element={<FlashcardsPage />} />
                      <Route path="/generator" element={<GeneratorPage />} />
                      <Route path="/theme-grammatical" element={<ThemeGrammaticalPage />} />
                      <Route path="/interview-simulator" element={<InterviewSimulatorPage />} />
                      <Route path="/submission" element={<SubmissionPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/a-propos" element={<AproposPage />} />
                      <Route path="/partners" element={<PartnersPage />} />
                      <Route path="/coaching" element={<CoachingPage />} />
                      <Route path="/calendar" element={<FullCalendarPage />} />
                      <Route path="/methodologie" element={<MethodologiePage />} />
                      <Route path="/methodes/personnalite" element={<PersonnaliteMethodePage />} />
                      <Route path="/methodes/motivation-ecole" element={<MotivationEcoleMethodePage />} />
                      <Route path="/methodes/projet-professionnel" element={<ProjetProfessionnelMethodePage />} />
                      <Route path="/methodes/pitch-intro" element={<PitchIntroMethodePage />} />
                      <Route path="/methodes/storytelling" element={<StorytellingMethodePage />} />
                      <Route path="/methodes/tendre-perches" element={<TendrePerchesMethodePage />} />
                      <Route path="/methodes/finir-entretien" element={<FinirEntretienMethodePage />} />
                      <Route path="/methodes/erreur-entretien" element={<ErreurEntretienMethodePage />} />
                      <Route path="/methodologie/personnalite" element={<PersonnaliteMethodePage />} />
                      <Route path="/methodologie/motivation-ecole" element={<MotivationEcoleMethodePage />} />
                      <Route path="/methodologie/projet-professionnel" element={<ProjetProfessionnelMethodePage />} />
                      <Route path="/methodologie/pitch-intro" element={<PitchIntroMethodePage />} />
                      <Route path="/methodologie/storytelling" element={<StorytellingMethodePage />} />
                      <Route path="/methodologie/tendre-perches" element={<TendrePerchesMethodePage />} />
                      <Route path="/methodologie/finir-entretien" element={<FinirEntretienMethodePage />} />
                      <Route path="/methodologie/erreur-entretien" element={<ErreurEntretienMethodePage />} />
                      <Route path="/edhec" element={<EDHECPage />} />
                      <Route path="/em-lyon" element={<EMLyonPage />} />
                      <Route path="/escp" element={<ESCPPage />} />
                      <Route path="/essec" element={<ESSECPage />} />
                      <Route path="/skema" element={<SKEMAPage />} />
                      <Route path="/kedge" element={<KEDGEPage />} />
                      <Route path="/neoma" element={<NEOMAPage />} />
                      <Route path="/gem" element={<GEMPage />} />
                      <Route path="/audencia" element={<AudenciaPage />} />
                      <Route path="/ecoles/edhec" element={<EDHECPage />} />
                      <Route path="/ecoles/emlyon" element={<EMLyonPage />} />
                      <Route path="/ecoles/escp" element={<ESCPPage />} />
                      <Route path="/ecoles/essec" element={<ESSECPage />} />
                      <Route path="/ecoles/skema" element={<SKEMAPage />} />
                      <Route path="/ecoles/kedge" element={<KEDGEPage />} />
                      <Route path="/ecoles/neoma" element={<NEOMAPage />} />
                      <Route path="/ecoles/gem" element={<GEMPage />} />
                      <Route path="/ecoles/audencia" element={<AudenciaPage />} />
                      <Route path="/methodologie/anglais" element={<MethodAnglaisPage />} />
                      <Route path="/methodologie/allemand" element={<MethodAllemandPage />} />
                      <Route path="/methodologie/allemand/essai" element={<MethodAllemandEssaiPage />} />
                      <Route path="/methodologie/allemand/synthese" element={<MethodAllemandSynthesePage />} />
                      <Route path="/methodologie/geopolitique" element={<MethodGeopolitiquePage />} />
                      <Route path="/methodologie/culture" element={<MethodCulturePage />} />
                      <Route path="/methodologie/maths" element={<MethodMathsPage />} />
                      <Route path="/methodologie/python" element={<MethodPythonPage />} />
                      <Route path="/methodologie/anglais/organisation" element={<ArticleAnglaisOrganisation />} />
                      <Route path="/methodologie/anglais/progress" element={<ArticleAnglaisProgress />} />
                      <Route path="/methodologie/anglais/grammaire" element={<ArticleAnglaisGrammaire />} />
                      <Route path="/methodologie/anglais/themes" element={<ArticleAnglaisThemes />} />
                      <Route path="/methodologie/anglais/colles" element={<ArticleAnglaisColles />} />
                      <Route path="/methodologie/anglais/concours" element={<ArticleAnglaisConcours />} />
                      <Route path="/methodologie/anglais/essais-syntheses" element={<ArticleAnglaisEssaisSyntheses />} />
                      <Route path="/methodologie/allemand/analyse-lexique" element={<ArticleAllemandAnalyseLexique />} />
                      <Route path="/methodologie/allemand/essai/introduction" element={<ArticleAllemandEssaiIntroduction />} />
                      <Route path="/methodologie/allemand/essai/teil1" element={<ArticleAllemandEssaiTeil1 />} />
                      <Route path="/methodologie/allemand/essai/teil2" element={<ArticleAllemandEssaiTeil2 />} />
                      <Route path="/methodologie/allemand/essai/kritik" element={<ArticleAllemandEssaiKritik />} />
                      <Route path="/methodologie/allemand/essai/conclusion" element={<ArticleAllemandEssaiConclusion />} />
                      <Route path="/methodologie/allemand/essai/exemples" element={<ArticleAllemandEssaiExemples />} />
                      <Route path="/questions/entretien-inverse-gem" element={<EntretienInverseGEMPage />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                  <ScrollToTop />
                </div>
              </ProgressProvider>
            </AuthProvider>
          </BrowserRouter>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
