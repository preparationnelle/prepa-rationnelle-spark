import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import useRoleAccess from '@/hooks/useRoleAccess';

interface AdminProtectedRouteProps {
  children: React.ReactNode;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading: authLoading } = useAuth();
  const { isAdmin, loading: roleLoading } = useRoleAccess();
  const location = useLocation();

  if (authLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-8 rounded-full bg-primary/50"></div>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    const redirectPath = `/login?next=${encodeURIComponent(location.pathname + location.search)}`;
    return <Navigate to={redirectPath} replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/acces-restreint" replace />;
  }

  return <>{children}</>;
};

export default AdminProtectedRoute;
