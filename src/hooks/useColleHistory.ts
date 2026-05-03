import { useState, useCallback, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import type {
  ColleSession,
  ColleSessionDetail,
  ColleQuestionWithReponse,
  ColleHistoryFilters,
  Pagination,
} from '@/types/colle';

// ============================================================================
// Interface publique du hook
// ============================================================================

export interface UseColleHistory {
  // Etat
  sessions: ColleSession[];
  loading: boolean;
  error: string | null;
  filters: ColleHistoryFilters;
  pagination: Pagination;

  // Actions
  loadSessions: () => Promise<void>;
  setFilters: (filters: Partial<ColleHistoryFilters>) => void;
  setPage: (page: number) => void;
  fetchSessionDetail: (id: string) => Promise<ColleSessionDetail>;
  refresh: () => Promise<void>;
}

// ============================================================================
// Constantes
// ============================================================================

const DEFAULT_PAGE_SIZE = 10;

// ============================================================================
// Hook
// ============================================================================

export const useColleHistory = (): UseColleHistory => {
  const { currentUser } = useAuth();

  // --- Etat ---
  const [sessions, setSessions] = useState<ColleSession[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFiltersState] = useState<ColleHistoryFilters>({});
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    total: 0,
  });

  // ============================================================================
  // loadSessions
  // ============================================================================

  const loadSessions = useCallback(async () => {
    if (!currentUser) {
      setError('Vous devez etre connecte pour consulter votre historique.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Construire la requete de base
      let query = supabase
        .from('colle_sessions')
        .select('*', { count: 'exact' })
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false });

      // Appliquer les filtres
      if (filters.langue) {
        query = query.eq('langue', filters.langue);
      }

      if (filters.dateFrom) {
        query = query.gte('created_at', filters.dateFrom.toISOString());
      }

      if (filters.dateTo) {
        // Ajouter un jour pour inclure toute la journee de fin
        const endDate = new Date(filters.dateTo);
        endDate.setDate(endDate.getDate() + 1);
        query = query.lt('created_at', endDate.toISOString());
      }

      // Pagination : LIMIT + OFFSET
      const from = (pagination.page - 1) * pagination.pageSize;
      const to = from + pagination.pageSize - 1;
      query = query.range(from, to);

      const { data, error: queryError, count } = await query;

      if (queryError) {
        console.error('Erreur chargement historique:', queryError);
        throw new Error('Impossible de charger l\'historique des colles.');
      }

      setSessions((data ?? []) as unknown as ColleSession[]);
      setPagination((prev) => ({
        ...prev,
        total: count ?? 0,
      }));
    } catch (err: any) {
      const message = err?.message || 'Erreur lors du chargement de l\'historique.';
      console.error('useColleHistory.loadSessions:', message, err);
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [currentUser, filters, pagination.page, pagination.pageSize]);

  // ============================================================================
  // setFilters
  // ============================================================================

  const setFilters = useCallback((newFilters: Partial<ColleHistoryFilters>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }));
    // Revenir a la page 1 quand les filtres changent
    setPagination((prev) => ({ ...prev, page: 1 }));
  }, []);

  // ============================================================================
  // setPage
  // ============================================================================

  const setPage = useCallback((page: number) => {
    setPagination((prev) => ({ ...prev, page }));
  }, []);

  // ============================================================================
  // fetchSessionDetail
  // ============================================================================

  const fetchSessionDetail = useCallback(
    async (id: string): Promise<ColleSessionDetail> => {
      if (!currentUser) {
        throw new Error('Vous devez etre connecte pour consulter le detail d\'une colle.');
      }

      try {
        // 1. Charger la session
        const { data: sessionData, error: sessionError } = await supabase
          .from('colle_sessions')
          .select('*')
          .eq('id', id)
          .single();

        if (sessionError) {
          console.error('Erreur chargement detail session:', sessionError);
          throw new Error('Impossible de charger le detail de la session.');
        }

        // 2. Charger les questions
        const { data: questionsData, error: questionsError } = await supabase
          .from('colle_questions')
          .select('*')
          .eq('session_id', id)
          .order('ordre', { ascending: true });

        if (questionsError) {
          console.error('Erreur chargement questions detail:', questionsError);
          throw new Error('Impossible de charger les questions.');
        }

        // 3. Charger les reponses
        const questionIds = (questionsData ?? []).map((q) => q.id);
        let reponsesMap: Record<string, any> = {};

        if (questionIds.length > 0) {
          const { data: reponsesData, error: reponsesError } = await supabase
            .from('colle_reponses')
            .select('*')
            .in('question_id', questionIds);

          if (reponsesError) {
            console.error('Erreur chargement reponses detail:', reponsesError);
            // On continue sans les reponses
          } else {
            for (const r of reponsesData ?? []) {
              reponsesMap[r.question_id] = r;
            }
          }
        }

        // 4. Assembler le detail complet
        const questionsWithReponses: ColleQuestionWithReponse[] = (questionsData ?? []).map(
          (q) => ({
            ...(q as any),
            reponse: reponsesMap[q.id] ?? null,
          }),
        );

        const detail: ColleSessionDetail = {
          ...(sessionData as unknown as ColleSession),
          questions: questionsWithReponses,
        };

        return detail;
      } catch (err: any) {
        const message = err?.message || 'Erreur lors du chargement du detail.';
        console.error('useColleHistory.fetchSessionDetail:', message, err);
        throw err;
      }
    },
    [currentUser],
  );

  // ============================================================================
  // refresh
  // ============================================================================

  const refresh = useCallback(async () => {
    await loadSessions();
  }, [loadSessions]);

  // ============================================================================
  // Chargement automatique quand les filtres ou la page changent
  // ============================================================================

  useEffect(() => {
    if (currentUser) {
      loadSessions();
    }
  }, [currentUser, filters, pagination.page, loadSessions]);

  // ============================================================================
  // Retour
  // ============================================================================

  return {
    // Etat
    sessions,
    loading,
    error,
    filters,
    pagination,

    // Actions
    loadSessions,
    setFilters,
    setPage,
    fetchSessionDetail,
    refresh,
  };
};

export default useColleHistory;
