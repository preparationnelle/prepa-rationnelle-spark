
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';
import QuestionsPage from './pages/QuestionsPage';
import GeneratorPage from './pages/GeneratorPage';
import PythonArticlePage from './pages/PythonArticlePage';
import FormationPage from './pages/FormationPage';
import PourquoiPythonPrepaECGPage from './pages/PourquoiPythonPrepaECGPage';
import PythonFundamentalsPage from './pages/formation/PythonFundamentalsPage';
import PythonMatricesPage from './pages/formation/PythonMatricesPage';
import PythonAnalysePage from './pages/formation/PythonAnalysePage';
import PythonProbabilitesPage from './pages/formation/PythonProbabilitesPage';
import PythonFondamentauxExercicesPage from './pages/formation/PythonFondamentauxExercicesPage';
import PythonMatricesExercicesPage from './pages/formation/PythonMatricesExercicesPage';
import PythonAnalyseExercicesPage from './pages/formation/PythonAnalyseExercicesPage';
import PythonProbabilitesExercicesPage from './pages/formation/PythonProbabilitesExercicesPage';
import PythonReferencePage from './pages/PythonReferencePage';
import PythonFlashcardsPage from './pages/PythonFlashcardsPage';
import CoachingPythonPage from './pages/offres/CoachingPythonPage';
import CoachingMathsPage from './pages/offres/CoachingMathsPage';
import OrganisationEtePage from './pages/offres/OrganisationEtePage';
import PreparationCubePage from './pages/offres/PreparationCubePage';
import FormationAnglaisPage from './pages/FormationAnglaisPage';
import FormationAllemandPage from './pages/FormationAllemandPage';
import FormationGeopolitiquePage from './pages/FormationGeopolitiquePage';
import MethodologieEntretiensPersonnalitePage from './pages/methodologie/MethodEntretiensPersonnalitePage';
import NosOffresPage from './pages/NosOffresPage';
import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import { ProgressProvider } from './context/ProgressContext';

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <Router>
          <ScrollToTop />
          <div className="App">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/questions" element={<QuestionsPage />} />
              <Route path="/generator" element={<GeneratorPage />} />
              <Route path="/python-article" element={<PythonArticlePage />} />
              <Route path="/formation" element={<FormationPage />} />
              <Route path="/pourquoi-python-prepa-ecg" element={<PourquoiPythonPrepaECGPage />} />
              <Route path="/python-reference" element={<PythonReferencePage />} />
              <Route path="/python-flashcards" element={<PythonFlashcardsPage />} />
              <Route path="/formation/anglais" element={<FormationAnglaisPage />} />
              <Route path="/formation/allemand" element={<FormationAllemandPage />} />
              <Route path="/formation/geopolitique" element={<FormationGeopolitiquePage />} />
              <Route path="/methodologie/entretiens-personnalite" element={<MethodologieEntretiensPersonnalitePage />} />
              
              {/* Offres routes */}
              <Route path="/offre/coaching-python" element={<CoachingPythonPage />} />
              <Route path="/offre/coaching-maths" element={<CoachingMathsPage />} />
              <Route path="/offre/organisation-ete" element={<OrganisationEtePage />} />
              <Route path="/offre/preparation-cube" element={<PreparationCubePage />} />
              <Route path="/nos-offres" element={<NosOffresPage />} />
              
              <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />

              {/* Formation Python routes */}
              <Route path="/formation/python-fondamentaux" element={<PythonFundamentalsPage />} />
              <Route path="/formation/python-matrices" element={<PythonMatricesPage />} />
              <Route path="/formation/python-analyse" element={<PythonAnalysePage />} />
              <Route path="/formation/python-probabilites" element={<PythonProbabilitesPage />} />
              
              {/* Formation Python exercises routes */}
              <Route path="/formation/python-fondamentaux-exercices" element={<PythonFondamentauxExercicesPage />} />
              <Route path="/formation/python-matrices-exercices" element={<PythonMatricesExercicesPage />} />
              <Route path="/formation/python-analyse-exercices" element={<PythonAnalyseExercicesPage />} />
              <Route path="/formation/python-probabilites-exercices" element={<PythonProbabilitesExercicesPage />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ProgressProvider>
    </AuthProvider>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
