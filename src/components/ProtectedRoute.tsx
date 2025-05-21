
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import AuthOverlay from './AuthOverlay';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  
  // Check if the current path is /calendar - this path will be publicly accessible
  const isCalendarPage = location.pathname === '/calendar';
  
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

  // If user is not authenticated, render children with the auth overlay
  if (!currentUser) {
    return (
      <div className="relative">
        <div className="filter blur-sm pointer-events-none">
          {children}
        </div>
        <AuthOverlay />
      </div>
    );
  }

  // If user is authenticated, render children
  return <>{children}</>;
};

export default ProtectedRoute;
