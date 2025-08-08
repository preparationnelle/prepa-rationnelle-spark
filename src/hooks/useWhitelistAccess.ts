import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

// Liste blanche des emails autorisés
const WHITELISTED_EMAILS = [
  'davelkeza61@gmail.com',
  'dimitrovdimitar556@gmail.com'
];

// Pages/sections protégées par liste blanche
const WHITELISTED_SECTIONS = [
  '/formation/math',
  '/formation/python',
  '/formation/maths',
  '/formation/python/',
  '/formation/math/',
  '/formation/maths/'
];

export const useWhitelistAccess = () => {
  const { user } = useAuth();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAccess = () => {
      setIsLoading(true);
      
      // Si pas d'utilisateur connecté, pas d'accès
      if (!user) {
        setHasAccess(false);
        setIsLoading(false);
        return;
      }

      // Vérifier si l'email est dans la liste blanche
      const userEmail = user.email?.toLowerCase();
      const isWhitelisted = WHITELISTED_EMAILS.some(
        email => email.toLowerCase() === userEmail
      );

      setHasAccess(isWhitelisted);
      setIsLoading(false);
    };

    checkAccess();
  }, [user]);

  const isSectionProtected = (path: string): boolean => {
    return WHITELISTED_SECTIONS.some(section => 
      path.startsWith(section)
    );
  };

  return {
    hasAccess,
    isLoading,
    isSectionProtected,
    whitelistedEmails: WHITELISTED_EMAILS
  };
}; 