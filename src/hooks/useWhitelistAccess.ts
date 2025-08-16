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

// Pages/sections protégées par liste blanche — un seul mécanisme (Maths & Python)
// Zones protégées
// - Exact: '/formation' (page d'entrée Python ECG)
// - Préfixes: sous-pages Python, formations Maths principales
const PROTECTED_EXACT = ['/formation'];
const PROTECTED_PREFIXES = ['/formation/python-'];
const WHITELISTED_SECTIONS = [
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

      // Vérifier si l'email est dans la liste blanche
      const allowed = isWhitelisted(currentUser.email);

      setHasAccess(allowed);
      setIsLoading(false);
    };

    checkAccess();
  }, [currentUser, loading]);

  const isSectionProtected = (path: string): boolean => {
    // Normaliser le path (supprimer trailing slash)
    const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;

    // 1) Protection exacte (ne doit PAS attraper '/formations')
    if (PROTECTED_EXACT.includes(normalized)) {
      return true;
    }

    // 2) Protection par préfixe pour toutes les sous-pages Python
    if (PROTECTED_PREFIXES.some((prefix) => normalized.startsWith(prefix))) {
      return true;
    }

    // 3) Protection Maths (préfixe)
    if (WHITELISTED_SECTIONS.some((section) => normalized.startsWith(section))) {
      return true;
    }

    return false;
  };

  return {
    hasAccess,
    isLoading,
    isSectionProtected,
    whitelistedEmails: WHITELISTED_EMAILS,
  };
}; 