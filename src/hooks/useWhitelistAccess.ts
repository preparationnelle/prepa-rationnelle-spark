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

// Sections Python (accès libre après connexion)
const PYTHON_SECTIONS = ['/formation'];
const PYTHON_PREFIXES = ['/formation/python-'];

// Sections Maths (protection par liste blanche)
const MATHS_WHITELISTED_SECTIONS = [
  '/formation/maths-methodologie',
  '/formation/maths-approfondies',
  '/formation/maths-appliquees',
];

export const useWhitelistAccess = () => {
  const { currentUser, loading } = useAuth();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAccess = () => {
      setIsLoading(true);
      
      // Tant que l'état auth global charge, on attend (évite double sas)
      if (loading) {
        setIsLoading(true);
        return;
      }

      // Si pas d'utilisateur connecté, pas d'accès
      if (!currentUser) {
        setHasAccess(false);
        setIsLoading(false);
        return;
      }

      // Pour les sections Maths : vérifier la liste blanche
      // Pour les sections Python : accès libre après connexion
      const allowed = isWhitelisted(currentUser.email);

      setHasAccess(allowed);
      setIsLoading(false);
    };

    checkAccess();
  }, [currentUser, loading]);

  const isPythonSection = (path: string): boolean => {
    const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    return PYTHON_SECTIONS.includes(normalized) || 
           PYTHON_PREFIXES.some((prefix) => normalized.startsWith(prefix));
  };

  const isMathsSection = (path: string): boolean => {
    const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    return MATHS_WHITELISTED_SECTIONS.some((section) => normalized.startsWith(section));
  };

  const isSectionProtected = (path: string): boolean => {
    return isPythonSection(path) || isMathsSection(path);
  };

  return {
    hasAccess,
    isLoading,
    isSectionProtected,
    isPythonSection,
    isMathsSection,
    whitelistedEmails: WHITELISTED_EMAILS,
  };
}; 