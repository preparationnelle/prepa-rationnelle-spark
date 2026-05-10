
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

// Loading component for lazy-loaded pages — carnet-styled skeleton
// matching a typical page (eyebrow + heading + body + CTA) so layout
// height is stable and the transition feels on-brand instead of generic.
const PageLoader = () => (
  <Layout showFooter={false}>
    <div
      className="container mx-auto px-4 py-24 sm:py-32"
      role="status"
      aria-label="Chargement de la page"
    >
      <div className="max-w-[900px] mx-auto space-y-6 animate-pulse">
        {/* Eyebrow */}
        <div className="h-3 w-44 mx-auto rounded-full bg-carnet-rule/40" />
        {/* Heading — 3 stacked rows */}
        <div className="space-y-3 mt-8">
          <div className="h-10 sm:h-14 w-11/12 mx-auto rounded-lg bg-carnet-rule/40" />
          <div className="h-10 sm:h-14 w-9/12 mx-auto rounded-lg bg-carnet-rule/40" />
          <div className="h-10 sm:h-14 w-7/12 mx-auto rounded-lg bg-carnet-rule/40" />
        </div>
        {/* Body */}
        <div className="space-y-2 max-w-[640px] mx-auto pt-6">
          <div className="h-3 w-full rounded-full bg-carnet-rule/30" />
          <div className="h-3 w-10/12 mx-auto rounded-full bg-carnet-rule/30" />
        </div>
        {/* CTA pill */}
        <div className="flex justify-center pt-6">
          <div className="h-12 w-48 rounded-full bg-carnet-rule/40" />
        </div>
      </div>
      <span className="sr-only">Chargement…</span>
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
