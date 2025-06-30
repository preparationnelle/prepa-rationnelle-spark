
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

export const usePythonAccess = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [accessCode, setAccessCode] = useState<string | null>(null);
  const { user } = useAuth();

  const checkAccess = async () => {
    if (!user) {
      setHasAccess(false);
      setLoading(false);
      return;
    }

    try {
      // Vérifier si l'utilisateur a un code d'accès valide
      const { data: codes, error } = await supabase
        .from('access_codes')
        .select('*')
        .eq('user_id', user.id)
        .eq('active', true)
        .maybeSingle();

      if (error) {
        console.error('Erreur lors de la vérification d\'accès:', error);
        setHasAccess(false);
      } else if (codes) {
        setHasAccess(true);
        setAccessCode(codes.code);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setHasAccess(false);
    } finally {
      setLoading(false);
    }
  };

  const validateAccessCode = async (code: string) => {
    if (!user) {
      throw new Error('Vous devez être connecté pour utiliser un code d\'accès');
    }

    try {
      // Vérifier si le code existe et n'est pas déjà utilisé
      const { data: existingCode, error: fetchError } = await supabase
        .from('access_codes')
        .select('*')
        .eq('code', code.toUpperCase())
        .eq('active', true)
        .maybeSingle();

      if (fetchError) {
        throw new Error('Erreur lors de la vérification du code');
      }

      if (!existingCode) {
        throw new Error('Code d\'accès invalide ou expiré');
      }

      if (existingCode.user_id && existingCode.user_id !== user.id) {
        throw new Error('Ce code d\'accès a déjà été utilisé');
      }

      // Attribuer le code à l'utilisateur s'il n'est pas encore attribué
      if (!existingCode.user_id) {
        const { error: updateError } = await supabase
          .from('access_codes')
          .update({
            user_id: user.id,
            used_at: new Date().toISOString()
          })
          .eq('id', existingCode.id);

        if (updateError) {
          throw new Error('Erreur lors de l\'activation du code');
        }
      }

      await checkAccess();
      return true;
    } catch (error) {
      throw error;
    }
  };

  const createCheckoutSession = async () => {
    if (!user) {
      throw new Error('Vous devez être connecté pour effectuer un achat');
    }

    try {
      const { data, error } = await supabase.functions.invoke(
        'create-python-course-checkout',
        {
          headers: {
            Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
          },
        }
      );

      if (error) {
        throw new Error(error.message);
      }

      // Ouvrir Stripe checkout dans un nouvel onglet
      window.open(data.url, '_blank');
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    checkAccess();
  }, [user]);

  return {
    hasAccess,
    loading,
    accessCode,
    validateAccessCode,
    createCheckoutSession,
    refetch: checkAccess
  };
};
