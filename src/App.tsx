
import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserDataProvider } from './context/UserDataContext';
import { StudyTimeProvider } from './context/StudyTimeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import TeacherProtectedRoute from './components/teacher/TeacherProtectedRoute';
import { WhitelistProtectedRoute } from './components/WhitelistProtectedRoute';
import { ProgressProvider } from './context/ProgressContext';
import { routes } from './config/routes';
import { useRouteValidation } from './hooks/useRouteValidation';
import ChatWidget from './components/chat/ChatWidget';
import AtlasECGFloatingWidget from './components/chat/AtlasECGFloatingWidget';
import { Layout } from './components/Layout';
import { initPostHog } from './integrations/posthog/client';
import { usePageTracking } from './hooks/usePageTracking';

// Loading component for lazy-loaded pages — keeps Layout chrome visible
const PageLoader = () => (
  <Layout showFooter={false}>
    <div className="flex items-center justify-center py-32">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-carnet-red"></div>
    </div>
  </Layout>
);

function App() {
  // Initialize route validation in development
  useRouteValidation();

  // Initialize PostHog analytics
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <AuthProvider>
      <UserDataProvider>
        <StudyTimeProvider>
          <ProgressProvider>
            <Router>
              <ScrollToTop />
              <div className="App">
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {routes.map((route) => {
                      const Component = route.component;
                      let element;

                      if (route.path.startsWith('/prof') && !route.path.includes('professeur-dashboard') && !route.path.includes('professeur')) {
                        // Teacher routes require professor role
                        element = (
                          <TeacherProtectedRoute>
                            <Layout showFooter={false}>
                              <Component />
                            </Layout>
                          </TeacherProtectedRoute>
                        );
                      } else if (route.adminOnly) {
                        element = (
                          <AdminProtectedRoute>
                            <Layout>
                              <Component />
                            </Layout>
                          </AdminProtectedRoute>
                        );
                      } else if (route.protected) {
                        // Regular protected routes
                        element = (
                          <ProtectedRoute>
                            <Layout>
                              <Component />
                            </Layout>
                          </ProtectedRoute>
                        );
                      } else {
                        // Public routes
                        element = (
                          <Layout>
                            <Component />
                          </Layout>
                        );
                      }

                      // Wrap with whitelist protection ONCE for all routes (single guard)
                      element = (
                        <WhitelistProtectedRoute>
                          {element}
                        </WhitelistProtectedRoute>
                      );

                      return (
                        <Route
                          key={route.path}
                          path={route.path}
                          element={element}
                        />
                      );
                    })}
                  </Routes>
                </Suspense>
                <ChatWidget />
                <AtlasECGFloatingWidget />
              </div>
            </Router>
          </ProgressProvider>
        </StudyTimeProvider>
      </UserDataProvider>
    </AuthProvider>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  // Track page visits in Supabase + PostHog
  usePageTracking();

  useEffect(() => {
    window.scrollTo(0, 0);

    // In development, log route changes for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('🔄 Route changed to:', pathname);
    }
  }, [pathname]);

  return null;
}

export default App;
