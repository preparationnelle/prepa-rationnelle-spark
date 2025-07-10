import { useState, useEffect } from 'react';
import { usePythonAccess } from './usePythonAccess';
import { supabase } from '@/integrations/supabase/client';

// Modules restreints (1, 2, 3)
const RESTRICTED_MODULES = [1, 2, 3];

export const usePythonModuleAccess = () => {
  const { hasAccess, loading, accessCode } = usePythonAccess();
  const [showRestrictedModal, setShowRestrictedModal] = useState(false);
  const [currentModule, setCurrentModule] = useState<{ id: number; name: string } | null>(null);
  const [userModuleAccess, setUserModuleAccess] = useState<Record<number, boolean>>({});

  // Charger les accès sauvegardés depuis la base de données
  useEffect(() => {
    const loadUserModuleAccess = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: accessCodes } = await supabase
        .from('user_access_codes')
        .select('module_name')
        .eq('user_id', user.id);

      if (accessCodes) {
        const accessMap: Record<number, boolean> = {};
        accessCodes.forEach(({ module_name }) => {
          // Extraire le numéro du module depuis le nom
          const moduleMatch = module_name.match(/(\d+)/);
          if (moduleMatch) {
            const moduleId = parseInt(moduleMatch[1]);
            accessMap[moduleId] = true;
          }
        });
        setUserModuleAccess(accessMap);
      }
    };

    loadUserModuleAccess();
  }, []);

  const checkModuleAccess = (moduleId: number, moduleName: string): boolean => {
    // Module 0 (fondamentaux) est toujours accessible
    if (moduleId === 0) {
      return true;
    }

    // Si l'utilisateur a l'accès général via PRDIMITAR ou autre code
    if (hasAccess) {
      return true;
    }

    // Vérifier l'accès spécifique au module depuis la base de données
    if (userModuleAccess[moduleId]) {
      return true;
    }

    // Fallback: Vérifier l'accès spécifique au module (localStorage pour rétrocompatibilité)
    const moduleAccess = localStorage.getItem(`python_module_${moduleId}_access`);
    if (moduleAccess === 'granted') {
      return true;
    }

    // Modules restreints nécessitent une autorisation
    if (RESTRICTED_MODULES.includes(moduleId)) {
      setCurrentModule({ id: moduleId, name: moduleName });
      setShowRestrictedModal(true);
      return false;
    }

    return true;
  };

  const grantModuleAccess = async (moduleId: number, moduleName: string, code: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    try {
      // Sauvegarder l'accès en base de données
      const { error } = await supabase
        .from('user_access_codes')
        .upsert({
          user_id: user.id,
          module_name: `Module ${moduleId} - ${moduleName}`,
          access_code: code
        });

      if (!error) {
        // Mettre à jour le state local
        setUserModuleAccess(prev => ({
          ...prev,
          [moduleId]: true
        }));
        return true;
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de l\'accès:', error);
    }
    return false;
  };

  const handleModalClose = () => {
    setShowRestrictedModal(false);
    setCurrentModule(null);
  };

  return {
    hasAccess,
    loading,
    accessCode,
    checkModuleAccess,
    grantModuleAccess,
    showRestrictedModal,
    currentModule,
    handleModalClose,
    isRestrictedModule: (moduleId: number) => RESTRICTED_MODULES.includes(moduleId)
  };
};