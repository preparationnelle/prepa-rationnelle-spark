
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import AuthOverlay from './AuthOverlay';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if the current path is /calendar - this path will be publicly accessible
  const isCalendarPage = location.pathname === '/calendar';
  
  // If user is on login or register page, redirect them if they're already logged in
  useEffect(() => {
    if (currentUser && (location.pathname === '/login' || location.pathname === '/register')) {
      navigate('/generator');
    }
  }, [currentUser, location.pathname, navigate]);
  
  // While authentication state is being checked, we can show nothing or a loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-8 rounded-full bg-primary/50"></div>
        </div>
      </div>
    );
  }

  // If this is the calendar page, always render it without protection
  if (isCalendarPage) {
    return <>{children}</>;
  }

  // Show overlay only if user is not authenticated
  const showOverlay = !currentUser;

  return (
    <div className="relative">
      <div className={showOverlay ? "filter blur-sm pointer-events-none" : ""}>
        {children}
      </div>
      <AuthOverlay isVisible={showOverlay} />
    </div>
  );
};

export default ProtectedRoute;
