import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

// Liste blanche des emails autorisés
const WHITELISTED_EMAILS = [
  'davelkeza61@gmail.com',
  'dimitrovdimitar556@gmail.com',
];

// Helper public pour vérifier un email (normalisé)
export const isWhitelisted = (email: string | null | undefined): boolean => {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  return WHITELISTED_EMAILS.includes(normalized);
};

// Pages/sections protégées par liste blanche
const WHITELISTED_SECTIONS = [
  '/formation/math',
  '/formation/maths',
  '/formation/python',
];

export const useWhitelistAccess = () => {
  const { currentUser } = useAuth();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAccess = () => {
      setIsLoading(true);
      
      // Si pas d'utilisateur connecté, pas d'accès
      if (!currentUser) {
        setHasAccess(false);
        setIsLoading(false);
        return;
      }

      // Vérifier si l'email est dans la liste blanche
      const allowed = isWhitelisted(currentUser.email);

      setHasAccess(allowed);
      setIsLoading(false);
    };

    checkAccess();
  }, [currentUser]);

  const isSectionProtected = (path: string): boolean => {
    // Normaliser le path (supprimer trailing slash)
    const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    return WHITELISTED_SECTIONS.some((section) => normalized.startsWith(section));
  };

  return {
    hasAccess,
    isLoading,
    isSectionProtected,
    whitelistedEmails: WHITELISTED_EMAILS,
  };
}; 