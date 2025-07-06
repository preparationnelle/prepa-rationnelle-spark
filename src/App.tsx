import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import PricingPage from './pages/PricingPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import PythonArticlePage from './pages/PythonArticlePage';
import FormationPage from './pages/FormationPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';
import SearchResultsPage from './pages/SearchResultsPage';
import UserManagementPage from './pages/UserManagementPage';
import RoleManagementPage from './pages/RoleManagementPage';
import PermissionManagementPage from './pages/PermissionManagementPage';
import AuditLogPage from './pages/AuditLogPage';
import SettingsPage from './pages/SettingsPage';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AdminRoute } from './components/AdminRoute';
import PourquoiPythonPrepaECGPage from './pages/PourquoiPythonPrepaECGPage';
import PythonFundamentalsPage from './pages/PythonFundamentalsPage';
import PythonMatricesPage from './pages/PythonMatricesPage';
import PythonAnalysePage from './pages/PythonAnalysePage';
import PythonProbabilitesPage from './pages/PythonProbabilitesPage';
import PythonFondamentauxExercicesPage from './pages/PythonFondamentauxExercicesPage';
import PythonMatricesExercicesPage from './pages/PythonMatricesExercicesPage';
import PythonAnalyseExercicesPage from './pages/PythonAnalyseExercicesPage';
import PythonProbabilitesExercicesPage from './pages/PythonProbabilitesExercicesPage';
import EntretiensPage from './pages/EntretiensPage';
import AnglaisPage from './pages/AnglaisPage';
import AllemandPage from './pages/AllemandPage';
import GeopolitiquePage from './pages/GeopolitiquePage';
import MethodologiePage from './pages/MethodologiePage';
import PythonReferencePage from './pages/PythonReferencePage';
import PythonFlashcardsPage from './pages/PythonFlashcardsPage';
import OffreCoachingPythonPage from './pages/OffreCoachingPythonPage';
import FormationAnglaisPage from './pages/FormationAnglaisPage';
import FormationAllemandPage from './pages/FormationAllemandPage';
import FormationGeopolitiquePage from './pages/FormationGeopolitiquePage';
import MethodologieEntretiensPersonnalitePage from './pages/MethodologieEntretiensPersonnalitePage';
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
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="/unauthorized" element={<UnauthorizedPage />} />
              <Route path="/python-article" element={<PythonArticlePage />} />
              <Route path="/formation" element={<FormationPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/tag/:id" element={<TagPage />} />
              <Route path="/search" element={<SearchResultsPage />} />
              <Route path="/pourquoi-python-prepa-ecg" element={<PourquoiPythonPrepaECGPage />} />
              <Route path="/entretiens" element={<EntretiensPage />} />
              <Route path="/anglais" element={<AnglaisPage />} />
              <Route path="/allemand" element={<AllemandPage />} />
              <Route path="/geopolitique" element={<GeopolitiquePage />} />
              <Route path="/methodologie" element={<MethodologiePage />} />
              <Route path="/python-reference" element={<PythonReferencePage />} />
              <Route path="/python-flashcards" element={<PythonFlashcardsPage />} />
              <Route path="/offre/coaching-python" element={<OffreCoachingPythonPage />} />
              <Route path="/formation/anglais" element={<FormationAnglaisPage />} />
              <Route path="/formation/allemand" element={<FormationAllemandPage />} />
              <Route path="/formation/geopolitique" element={<FormationGeopolitiquePage />} />
              <Route path="/methodologie/entretiens-personnalite" element={<MethodologieEntretiensPersonnalitePage />} />
              
              <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />
              <Route path="/admin/users" element={<AdminRoute><UserManagementPage /></AdminRoute>} />
              <Route path="/admin/roles" element={<AdminRoute><RoleManagementPage /></AdminRoute>} />
              <Route path="/admin/permissions" element={<AdminRoute><PermissionManagementPage /></AdminRoute>} />
              <Route path="/admin/audit-logs" element={<AdminRoute><AuditLogPage /></AdminRoute>} />
              <Route path="/admin/settings" element={<AdminRoute><SettingsPage /></AdminRoute>} />

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

              <Route path="*" element={<NotFoundPage />} />
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
