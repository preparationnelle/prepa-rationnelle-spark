import React from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useWhitelistAccess } from '@/hooks/useWhitelistAccess';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, Mail, AlertTriangle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WhitelistProtectedRouteProps {
  children: React.ReactNode;
}

export const WhitelistProtectedRoute: React.FC<WhitelistProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hasAccess, isLoading, isSectionProtected, isPythonSection, isMathsSection } = useWhitelistAccess();
  const { currentUser, loading: authLoading } = useAuth();

  // Si ce n'est pas une section protégée, afficher normalement
  if (!isSectionProtected(location.pathname)) {
    return <>{children}</>;
  }

  // Pendant le chargement de l'état d'accès ou de l'auth, ne pas enchaîner les écrans
  if (isLoading || authLoading) {
    return (
      <div className="min-h-screen bg-[#F0F8FF] flex items-center justify-center">
        <Card className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-[#E6EEF9]">
          <CardContent className="p-8 text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-orange-500" />
            <p className="text-gray-600">Vérification de l'accès...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentPath = location.pathname;

  // Pour les sections Python : accès libre après connexion
  if (isPythonSection(currentPath)) {
    if (!currentUser) {
      const next = encodeURIComponent(location.pathname + location.search);
      return <Navigate to={`/acces-restreint?next=${next}&section=python`} replace />;
    }
    // Utilisateur connecté = accès libre à Python
    return <>{children}</>;
  }

  // Pour les sections Maths : liste blanche requise
  if (isMathsSection(currentPath)) {
    if (!hasAccess) {
      const next = encodeURIComponent(location.pathname + location.search);
      return <Navigate to={`/acces-restreint?next=${next}&section=maths`} replace />;
    }
  }

  // Si accès autorisé, afficher le contenu
  return <>{children}</>;
}; 