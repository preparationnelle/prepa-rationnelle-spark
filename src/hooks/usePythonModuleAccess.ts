import { useState, useEffect } from 'react';
import { usePythonAccess } from './usePythonAccess';

// Modules restreints (1, 2, 3)
const RESTRICTED_MODULES = [1, 2, 3];

export const usePythonModuleAccess = () => {
  const { hasAccess, loading, accessCode } = usePythonAccess();
  const [showRestrictedModal, setShowRestrictedModal] = useState(false);
  const [currentModule, setCurrentModule] = useState<{ id: number; name: string } | null>(null);

  const checkModuleAccess = (moduleId: number, moduleName: string): boolean => {
    // Module 0 (fondamentaux) est toujours accessible
    if (moduleId === 0) {
      return true;
    }

    // Si l'utilisateur a l'accès général via PRDIMITAR ou autre code
    if (hasAccess) {
      return true;
    }

    // Vérifier l'accès spécifique au module (persistance)
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

  const handleModalClose = () => {
    setShowRestrictedModal(false);
    setCurrentModule(null);
  };

  return {
    hasAccess,
    loading,
    accessCode,
    checkModuleAccess,
    showRestrictedModal,
    currentModule,
    handleModalClose,
    isRestrictedModule: (moduleId: number) => RESTRICTED_MODULES.includes(moduleId)
  };
};